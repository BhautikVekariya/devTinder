const express = require("express");
const app = express();


app.use("/",(err,req,res,next)=>{
   if(err){
      // logic your error
      res.status(500).send("something went Wrong");
   }
})

app.get("/getUserData",(req,res)=>{
   try{
      // Logic and db call and get user data
      throw new Error("xyxhhas");
      res.send("send User Data");
   }
   catch(err){
      res.status(500).send("Some Error contact support team");
   }
})
app.use("/", (err,req,res,next)=>{
   if(err){
      // logic your error
      res.status(500).send("Something Went Wrong");
   }
})
app.listen(7777,()=>{
    console.log("This is the listen of the 7777..")
})