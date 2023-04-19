const express = require("express");

const app = express();
const db = require("./database.js")
app.use(express.urlencoded());
app.set("views",__dirname+"/views");
app.set("view engine","ejs");
app.use(express.static(__dirname));
app.get("/",(req,res)=>{
    res.render("index");
})
app.post("/",(req,res)=>{
    var d = req.body;
    var sql = "insert into detail (name,email,phno,age,gender,qualification,joindate,experience) values (?,?,?,?,?,?,?,(year(current_date)-year(joindate)))";
    db.query(sql,[d.name,d.email,d.phno,d.age,d.gender,d.qualification,d.joindate],(err,data)=>{
        if(err) throw err;
        console.log("Successfully Inserted");
    })
    res.redirect("/get");
})
app.get("/get",(req,res)=>{
    var sql = "select * from detail";

    db.query(sql,(err,data)=>{
        console.log(data);
        res.render("data",{datum:data});
    })
})
app.listen(3000,(req,res)=>{
    console.log("Connected on port 3000 http://localhost:3000");
})

// create table detail(
//    id int primary key not null auto_increment,
//      name varchar(50) default null,
//      phno int default null,
//      age int default null,
//      gender varchar(20) default null,
//      qualification varchar(100) default null,
//      joindate date default null,
//      experience int default null););