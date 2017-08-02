const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// ---DB---
const dbHandler = require('./dbHandler');


// ---Express---
const app = express();

// Port Number
const port = 3000;

/* Not sure if I'll need this
// CORS Middleware
app.use(cors());
*/

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());


// --- Handle all get requests using angular ---
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Handle data input
app.post('/input', (req, res) => {
    data = req.body;
    console.log(data);
    if(data) {
        sqlKeys = 'INSERT INTO test Env(date';
        sqlValues = 'VALUES(GETDATE()';
        if(data.chickenEggs) {
            sqlKeys += ' , chickenEggs';
            sqlValues += ' ,' + data.chickenEggs;
        }
        if(data.duckEggs) {
            sqlKeys += ' , duckEggs';
            sqlValues += ' ,' + data.duckEggs;
        }
        if(data.goatMilk) {
            sqlKeys += ' , goatMilk';
            sqlValues += ' ,' + data.goatMilk;
        }
        sqlKeys += ') ';
        sqlValues += ');';
        sql = sqlKeys + sqlValues;
        dbHandler.simpleQuery(sql);
    }
    
    res.send("Post Request Received");
});

// Listen on Port
app.listen(port, () => {
  console.log('Server started on port '+ port + "...");
});