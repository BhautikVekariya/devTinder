const express = require("express");
const app = express();

// app.use("/route", rH, [rH2, rH3], rH4, rH5);

app.use("/user",(req,res,next)=>{
    console.log("this is the response!!")
    next();
},
 (req,res,next)=>{
    // res.send("this is the response2!!")
    console.log("this is the response2!!")
    next();
 },
 [(req,res,next)=>{
    // res.send("this is the response3!!");
    console.log("this is the response3!!")
    next();
 },
 (req,res,next)=>{
    // res.send("this is the response4!!");
    console.log("this is the response4!!")
    next();
 },
 (req,res,next)=>{
    console.log("this is the response5!!");
    res.send("5 response!!!");
 }
]);

app.listen(7777,()=>{
    console.log("This is the listen of the 7777..")
})