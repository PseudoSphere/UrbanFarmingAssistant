const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

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