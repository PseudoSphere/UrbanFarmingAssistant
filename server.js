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
        res.status = 400;
        res.send({message:"Username and Password Required."});
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
                console.log("compare: ", response);
            });
            //---SEND TOKEN---
        // Callback needed to check for 0 rows returned
        }, (err, rowCount, rows) => {
            if(rowCount < 1) {
                res.statusCode = 401;
                res.send({message: "Username does not exists"});
            }
        }
    )
})

// Register User
app.post('/register', (req, res) => {
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
            res.send({message: 'Username already exists.'})
        } else {
            const token = jwt.sign({
                    username:req.body.username
                }, hash);

            res.send({message: 'User successfully created', token});
        }
    })
/*
    let decoded = jwt.verify(token, hash);
    console.log("decoded: ", decoded)

    bcrypt.compare(req.body.password, hash, function(err, response) {
        console.log("compare: ", response);
    });
*/
});

// Handle data input
app.post('/input', (req, res) => {
    let validData = true;
    let data = req.body;    

    // Validate data (numbers only)
    for(let element in data) {
        /* check "number" to prevent text entries. check null data type which
            is sent in the event of data entry, the deletion without refreshing */
        if(typeof(data[element]) != "number" && data[element] != null) {
            console.log("invalid data");
            validData = false;
        }
    };

    if(!validData) {
        res.send({ message: "Invalid Data" });
    } else {
        sql = 'INSERT INTO TestEnv(date, chickenEggs, duckEggs, goatMilk) \
            VALUES(GETDATE(), ' + 
                (data.chickenEggs ? data.chickenEggs : 0) + ', ' + 
                (data.duckEggs ? data.duckEggs : 0) + ', ' +
                (data.goatMilk ? data.goatMilk : 0) + ');';
        dbHandler.simpleQuery(sql);
        res.send({ message: "Data added succesfully"})
    }
});

// Listen on Port
app.listen(port, () => {
  console.log('Server started on port '+ port + "...");
});