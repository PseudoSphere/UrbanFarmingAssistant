const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ---DB---
const dbHandler = require('./dbHandler');


// ---Express---
const app = express();

// Port Number
const port = 80;

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Homepage Image
app.get('/farm.jpg', (req, res) => {
    res.sendFile(path.join(__dirname,'./publicAssets/farm.jpg'));
})

// Show Database Content
app.get('/data/:username/:timeFrame', queryValidate, (req, res) => {
    let username = req.validated.username;
    let timeFrame = req.params.timeFrame;
    let sql = "BEGIN \
        SELECT * FROM TestEnv \
        WHERE date >= DATEADD(DAY, -" + timeFrame + ", GETDATE()) \
        AND username = '" + username + "' \
        ORDER BY date DESC \
        FOR JSON AUTO; \
        SELECT * FROM Feed \
        WHERE date >= DATEADD(DAY, -" + timeFrame + ", GETDATE()) \
        AND username = '" + username + "' \
        ORDER BY date DESC \
        FOR JSON AUTO; \
        END";
    
    dbHandler.betterQuery(sql, (err, rowCount, rows) => {
        if(rowCount < 1) {
            res.send({dataExists: false});
            return;
        }
        // rows[0][0].value = first array of returned objects
        let table = rows[0][0].value;
        // rows[1][0].value = second array of returned objects
        let feedTable = rows[1][0].value;
        res.send({dataExists: true, table, feedTable});
    });
});

// --- Handle get requests without options using Angular 4 ---
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// provide token on login
app.post('/login', (req, res) => {
    if(!req.body.username || !req.body.password) {
        res.statusCode = 400;
        res.statusMessage = "Username and Password Required.";
        res.send();
        return;
    }
    let user = {
        username: req.body.username,
        password: req.body.password
    }
    let sql = "SELECT username, password FROM Users WHERE \
        username = '" + user.username + "' \
        FOR JSON AUTO;";
    dbHandler.query(sql, 
    // Call back if any rows are returned
        (columns) => {
            rawData = columns[0].value;
            data = JSON.parse(rawData);
            bcrypt.compare(user.password, data[0].password, (err, response) => {
                if(response) {
                    // --If true, send token and message, and status, and username--
                    // Token 
                    const token = jwt.sign({
                        username:req.body.username
                    }, data[0].password);

                    resData = {
                        username: user.username,
                        message:  "Successfully logged in.",
                        success: true,
                        token
                    }

                    res.send(resData);
                } else { // password does not compare
                    res.statusCode = 401;
                    res.statusMessage = "Invalid password";
                    res.send();
                }  
            });
        // Callback needed to check for 0 rows returned (aka no user found)
        }, (err, rowCount, rows) => {
            if(rowCount < 1) {
                res.statusCode = 401;
                res.statusMessage = "Username does not exists";
                res.send();
            }
        }
    )
})

// Register User
app.post('/register', (req, res) => {
    if(!req.body.username || !req.body.password) {
        res.statusCode = 400;
        res.statusMessage = "Username and Password Required.";
        res.send();
        return;
    }

    // Salt and Hash password
    let hash = bcrypt.hashSync(req.body.password, 10);

    // New user to add to DB
    let newUser =  {
        username: req.body.username,
        password: hash
    }

    // Insert user (check for pre-existing)
    sql = "INSERT INTO Users (username, password) VALUES \
        ('" + newUser.username + "', '" + newUser.password + "');";

    dbHandler.query(sql, ()=>{}, (err, rowCount, rows) => {
        // Error number 2627 indicates duplicate key
        if(err && err.number == 2627) {
            res.statusCode = 409;
            res.statusMessage = 'Username already exists.';
            res.send()
        } else {
            const token = jwt.sign({
                username:req.body.username
            }, hash);

            resData = {
                    username: newUser.username,
                    message:  "User successfully registered.",
                    success: true,
                    token
                }

                res.send(resData);
        }
    })
});

// Handle data input
app.post('/input', queryValidate, (req, res) => {
    let data = req.body;
    let validData = validateData(data);    

    if(!validData) {
        res.send({ message: "Invalid Data" });
    } else {
        let date = data.date;
        let username = req.validated.username;
        let sql = "BEGIN";
        if(data.chickenEggs || data.duckEggs || data.goatMilk) {
            sql += " INSERT INTO TestEnv(date, username, chickenEggs, duckEggs, goatMilk) \
                VALUES('" + date + "', '" + username + "', " +
                    (data.chickenEggs ? data.chickenEggs : 0) + ", " + 
                    (data.duckEggs ? data.duckEggs : 0) + ", " +
                    (data.goatMilk ? data.goatMilk : 0) + ");"
        }
        // feedValues = [{feedType, cost}, {...},...]
        data.feedValues.forEach(element => {
            sql += " INSERT INTO Feed(date, username, feedType, cost) \
            VALUES('" + date + "', '" + username + "','" +
            element.feedType + "', " + element.cost + ");";
        });
        sql += " END";
        dbHandler.simpleQuery(sql);
        res.send({ message: "Data added succesfully"})
    }
});

//Update Data
app.post('/update', queryValidate, (req, res) => {
    let data = req.body.data;
    let validData = validateData(data);

    if(!validData) {
        res.send({ message: "Invalid Data" });
    } else {
        sql = "UPDATE TestEnv \
            SET chickenEggs = " + (data.chickenEggs ? data.chickenEggs : 0) + ", \
            duckEggs = " + (data.duckEggs ? data.duckEggs : 0) + ", \
            goatMilk = " + (data.goatMilk ? data.goatMilk : 0) +
            " WHERE username = '" + req.validated.username + "' AND ID = " + req.body.id + ";";
        dbHandler.simpleQuery(sql);
        res.send({ message: "Data Updated"});
    }
});

//Update Feed
app.post('/feed/update', queryValidate, (req, res) => {
    sql = "UPDATE Feed \
        SET cost = " + req.body.cost + " \
        WHERE username = '" + req.validated.username + "' AND ID = " + req.body.id + ";";
    dbHandler.simpleQuery(sql);
    res.send({ message: "Data Updated"});
});

//Delete Data
app.post('/delete', queryValidate, (req, res) => {
    let id = req.body.id;

    sql = "DELETE FROM TestEnv \
        WHERE username = '" + req.validated.username + "' AND ID = " + req.body.id + ";";
    dbHandler.simpleQuery(sql);
    res.send({ message: "Data Removed"});
});

//Delete Feed
app.post('/feed/delete', queryValidate, (req, res) => {
    let id = req.body.id;

    sql = "DELETE FROM Feed \
        WHERE username = '" + req.validated.username + "' AND ID = " + req.body.id + ";";
    dbHandler.simpleQuery(sql);
    res.send({ message: "Data Removed"});
});

// Listen on Port
app.listen(port, () => {
  console.log('Server started on port '+ port + "...");
});

function queryValidate(req, res, next) {
    // Get token username
    token = req.headers.jwt;
    if(!token) {
        res.statusCode = 401;
        res.send();
    }
    username = jwt.decode(token).username;

    // Get password to verify token
    let sql = "SELECT password FROM Users WHERE username = '" 
        + username + "' FOR JSON AUTO;";
    dbHandler.betterQuery(sql, (err, rowCount, rows) => {
        if(rowCount < 1) { 
            res.statusCode = 401;
            res.send();
            return;
        }
        // rows[0][0].value = array of returned objects
        data = JSON.parse(rows[0][0].value);
        password = data[0].password;
        
        // Authenticate
        let decoded = jwt.verify(token, password, (err, token) => {
            if (err) {
                res.statusCode = 401;
                res.send();
            } else {
                req.validated = {username};
                next();
            }
        });
    })
}
function validateData(data) {
    validData = true;

    // ---Validate data (Hacky validation until refactored DB)---
    // chickenEggs
    if(!(data.chickenEggs == null) && !typeof(data.chickenEggs)=='number') {
        validData = false;
    }
    // duckEggs
    if(!(data.duckEggs == null) && !typeof(data.duckEggs)=='number') {
        validData = false;
    }
    // goatMilk
    if(!(data.goatMilk == null) && !typeof(data.goatMilk)=='number') {
        validData = false;
    }

    return validData;
}