const mysql  = require('mysql');

var mysqlconnection = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'employee'
});

mysqlconnection.connect((err)=>{
    if(!err)
        console.log('Connection done');
    else
        console.log('connection failed \n Error: ' + JSON.stringify(err, undefined));

})