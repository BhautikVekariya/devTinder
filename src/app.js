const express = require("express");
const app = express();

// Handle Auth Middleware for all GET, POST, ... request
const {adminAuth,userAuth} = require("./middlewares/auth")
app.use("/admin", adminAuth);

app.get("/user/login",(req,res)=>{
     res.send("User logged in successfully!");
});

app.get("/user/data",userAuth,(req,res)=>{
   res.send("User Data Send"); 
})


app.get("/admin/getAllData", (req,res)=>{
   //  Logic of checking if the request is authorized
      res.send("All Data Send");
 
});

app.get("/admin/deleteUser", (req,res)=>{
   //   Logic of checking if the request is authorized.
      res.send("Deleted a user");
});

app.listen(7777,()=>{
    console.log("This is the listen of the 7777..")
})