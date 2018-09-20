const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    repeatpassword:{
        type:String,
        required:true
    }},{
    collection:'servers'
    



});

module.exports =  mongoose.model('userSchema',userSchema);