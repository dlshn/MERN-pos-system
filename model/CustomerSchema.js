const mongoose = require('mongoose');
const CustomerSchema= new mongoose.Schema({
    customerName:{
        type:String,
        requred:true
    },
    address:{
        type:String,
        requred:true
    },
    contact:{
        type:String,
        requred:true
    },
    email:{
        type:String,
        requred:true
    },
    salary:{
        type:Number,
        requred:true
    },
    isActive:{
        type:Boolean,
        requred:true
    }
});
module.exports = mongoose.model('Customer',CustomerSchema);