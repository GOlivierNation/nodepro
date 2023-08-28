const mysql  = require('mysql');

var mysqlconnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123',
    database: 'employee'
});

mysqlconnection.connect((err)=>{
    if(!err)
    console.log('Connection done');
    else
    console.log('connection failed \n Error: ' + JSON.stringify(err, undefined, 2));
});