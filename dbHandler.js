// Tedious
const tediousConfig = require("./config/tedious");

const tedious = require('tedious');
const Connection = tedious.Connection;
const Request = tedious.Request;

// The simplest yet most powerful, based on new understanding of TediousJS
//   callback(err, roCount, rows)
module.exports.betterQuery = (sql, callback) => {
    // Form request
    let request = new Request(sql, function(err, rowCount, rows) {
            if(err) { console.log('error: ' + err); }
            console.log(rowCount + ' row(s) returned');
            if(callback) { callback(err, rowCount, rows); }
            connection.close();
        }
    );
    
    // Connect and execute request
    const connection = new Connection(tediousConfig);
    connection.on('connect', function(err) {
        if (err) {
            console.log(err)
        }
        else{
            connection.execSql(request);
        }
    });
    // Add error handling to the connection (if connection times out, this will keep the program from crashing)
    connection.on('error', (err)=>{
        console.log("Error in dbHandler: ", err)
    });
}

module.exports.query = (sql, callback, requestCallback) => {
    // Form request
    let request = new Request(sql, function(err, rowCount, rows) {
            console.log('error: ' + err);
            console.log(rowCount + ' row(s) returned');
            if(requestCallback) {
                requestCallback(err, rowCount, rows);
            }
            connection.close();
        }
    );
    request.on('row', callback);
    /*
    request.on('done', function (rowCount, more, rows) { 
        if(!more) {
            //console.log('connection close 1');
            //connection.close();
        }
    });
    /*
    request.on('doneProc', (rowCount, more, rows) => { 
        if(!more) {
            //console.log('connection close 2');
            connection.close();
        }
    });
    */
    
    // Connect and execute request
    const connection = new Connection(tediousConfig);
    connection.on('connect', function(err) {
        if (err) {
            console.log(err)
        }
        else{
            connection.execSql(request);
        }
    });
    // Add error handling
    connection.on('error', (err)=>{
        console.log("Error in dbHandler: ", err)
    });
}

module.exports.simpleQuery = (sql) => {
    // Form request
    let request = new Request(sql, function(err, rowCount, rows) {
            console.log('error: ' + err);
            console.log(rowCount + ' row(s) returned');
        }
    );
    request.on('done', function (rowCount, more, rows) { 
        if(!more) {
            //console.log('connection close 1');
            connection.close();
        }
    })/* Sometimes this is needed (in other database work I needed it)
        In this case it causes the connection to close early.
    request.on('doneProc', (rowCount, more, rows) => { 
        if(!more) {
            //console.log('connection close 2');
            connection.close();
        }
    });*/
    
    // Connect and execute request
    const connection = new Connection(tediousConfig);
    connection.on('connect', function(err) {
        if (err) {
            console.log(err)
        }
        else{
            connection.execSql(request);
        }
    });
    // Add error handling
    connection.on('error', (err)=>{
        console.log("Error in dbHandler: ", err)
    });
}