const mysql = require("mysql");

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123123123",
    database:"employee_register"
})

conn.connect((err)=>{
    if(err) throw err;
    console.log("DB Connected Successfully");
})

module.exports = conn;