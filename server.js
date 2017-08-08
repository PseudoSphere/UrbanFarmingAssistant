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
app.get('/data/:timeFrame', (req, res) => {
    let timeFrame = req.params.timeFrame;
    let sql = 'SELECT date,\
            SUM(chickenEggs) as chickenEggs, \
            SUM(duckEggs) as duckEggs, \
            SUM(goatMilk) as goatMilk \
            FROM TestEnv \
        WHERE date >= DATEADD(DAY, -' + timeFrame + ', GETDATE()) \
        GROUP BY date \
        ORDER BY date DESC \
        FOR JSON AUTO;';
    dbHandler.query(sql, (columns) => {
        let rawTable = columns[0].value;
        res.send(rawTable);
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
    let validData = true;
    let data = req.body;

    // ---Validate data (Hacky validation until refactored DB)---
    // Parsing a valid date returns a number, invalid dates turn NaN
    if(!data.date || !typeof(Date.parse(data.date))=='number') {
        validData = false;
    }
    // username
    if(!data.username || !typeof(data.username)=='string') {
        validData = false;
    }
    // chickenEggs
    if(!data.chickenEggs == null && !typeof(data.chickenEggs)=='number') {
        validData = false;
    }
    // duckEggs
    if(!data.duckEggs == null && !typeof(data.duckEggs)=='number') {
        validData = false;
    }
    // goatMilk
    if(!data.goatMilk == null && !typeof(data.goatMilk)=='number') {
        validData = false;
    }
    

    if(!validData) {
        res.send({ message: "Invalid Data" });
    } else {
        sql = "INSERT INTO TestEnv(date, username, chickenEggs, duckEggs, goatMilk) \
            VALUES('" + data.date + "', '" + data.username + "', " +
                (data.chickenEggs ? data.chickenEggs : 0) + ", " + 
                (data.duckEggs ? data.duckEggs : 0) + ", " +
                (data.goatMilk ? data.goatMilk : 0) + ");";
        dbHandler.simpleQuery(sql);
        res.send({ message: "Data added succesfully"})
    }
});

// Listen on Port
app.listen(port, () => {
  console.log('Server started on port '+ port + "...");
});

function queryValidate(req, res, next) {
    let sql = "SELECT password FROM Users WHERE username = '" 
        + req.body.username + 
        "' FOR JSON AUTO;";
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
        let decoded = jwt.verify(req.body.token, password);
        console.log("decoded: ", decoded)
        if(decoded.username == req.body.username) {
            next();
        } else {
            res.statusCode = 401;
            res.send();
        }
    })
}