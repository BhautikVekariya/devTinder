const express = require("express");

const app = express();

app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params)
    res.send({firstname:"tushar",lastname:"makvana"})
});


app.listen(3000, () => {
    console.log("server is successfully listening on port 3000....");
});