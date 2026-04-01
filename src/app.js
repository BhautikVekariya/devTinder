const express = require("express");

const app = express();

app.use("/",(req,res)=>{
    res.send("Hello this one dashboard");
})

app.use("/hello",(req,res)=>{
    res.send("Hello hello hi how have you been")
})

app.listen(7777,()=>{
    console.log("server is successfully listening on port 7777....")
});