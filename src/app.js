const express = require("express");
const app = express();
const connetDB = require("./config/database");
const User = require("./models/user")

app.use(express.json());

app.post("/signup", async (req,res)=>{
    console.log(req.body);

    // Creating a new instance of the User model
     const user = new User(req.body);
  try{
      await user.save();
       res.send("User Added Successfully!");
  }catch(err){
    res.status(400).send("Error Saving the User:"+ err.message)
  }   
});

connetDB()
.then(()=>{
    console.log("Database connection established..")
    app.listen(7777,()=>{
    console.log("This is the listen of the 7777..")
})
})
.catch((err)=>{
    console.log("Database cannot be connted.")
})


