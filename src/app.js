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

app.get("/user", async (req,res)=>{
    const userEmail = req.body.emailId;

    try{
        console.log(userEmail);
        const users = await User.findOne({emailId: userEmail});

        if(!users){
            res.status(404).send("User not found");
        }else{

            res.send(users);
        }
    //   const users = await User.find({emailId: userEmail})
    //   if(users.length === 0){
    //     res.status(404).send("User not found")
    //   }else{
    //     res.send(users);
    //   }
    }catch(err){
        res.status(404).send("Somethig went wrong");
    }
})


// Feed API - GET/feed - get all the users from the database
app.get("/feed", async (req,res)=>{
    try{
      const users = await User.find({});
      res.send(users);
    }catch(err){
        res.status(404).send("Somethig Went Wrong")
    }
})

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


