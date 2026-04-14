const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
     firstName:{
        type: String,
        required:true,
        minLength:4,
        maxLength:50,
     },
     lastName:{
        type: String,
        minLength:4,
        maxLength:50,
     },
     emailId:{
        type: String,
        lowercase:true,
        required:true,
        unique:true,
        trim:true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"]
     },
     password:{
        type: String,
        required:true,
        minlength:6
     },
     age:{
        type: Number,
        min: 18
     },
     gender:{
        type: String,
        validate(value){
            if(!["male","female","other"].includes(value)){
                throw new Error("Gender data is not valid")
            }
        }
     },
     photoUrl:{
        type: String,
        default:"https://www.clipartmax.com/png/full/144-1442578_flat-person-icon-download-dummy-man.png",
     },
     about :{
        maxLength:150,
        type: String,
        default:"This is a default about of user!",
     },
     skills :{
        type:[String]
     }

},{
   timestamps: true,
});

module.exports = mongoose.model("User", userSchema)