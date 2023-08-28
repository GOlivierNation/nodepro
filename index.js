const mysql  = require('mysql');

var mysqlconnection = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'employee'
});