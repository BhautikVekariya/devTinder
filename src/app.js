const express = require("express");
const connetDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser")


app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);

connetDB()
    .then(() => {
        console.log("Database connection established..")
        app.listen(7777, () => {
            console.log("This is the listen of the 7777..")
        })
    })
    .catch((err) => {
        console.log("Database cannot be connted." + err)
})


