const express = require("express");

const app = express();

// This will only handle GET call to /user
app.get("/user", (req,res)=>{
    res.send("This is the get request successfully")
});

// This will only handle POST call to /user
app.post("/user", (req,res)=>{
    res.send({firstname:"Bhautik", lastnaem:"vekariya"})
})

// This will only handle Delete call to /user
app.delete("/user",(req,res)=>{
    res.send("this is the delete request")
})

// This will only handle put call to /user
app.put("/user",(req,res)=>{
    res.send("this is the put request")
})

// This will only handle patch call to /user
app.patch("/user",(req,res)=>{
    res.send("this is the patch request")
})

// this will match all the HTTP method API calls to /test
app.use("/hello/2", (req, res) => {
    res.send("Abrakadabara");
});

app.use("/hello", (req, res) => {
    res.send("Hello hello hi how have you been");
});


app.listen(3000, () => {
    console.log("server is successfully listening on port 3000....");
});