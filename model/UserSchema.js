const mongoose = require('mongoose');
const UserSchema= new mongoose.Schema({
    userName:{
        type:String,
        requred:true,
        unique:true
    },
    password:{
        type:String,
        requred:true
    },
    fullName:{
        type:String,
        requred:true
    },
    role:{
        type:Array, // 3 roles
        requred:true
    },
    
    isActive:{
        type:Boolean,
        requred:true
    }
});
module.exports = mongoose.model('User',UserSchema);