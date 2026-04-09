const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://Bhautik:VBhautik%402003@cluster0.bbrparw.mongodb.net/devTinder");
};

module.exports = connectDB;