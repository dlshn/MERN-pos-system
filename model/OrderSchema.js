const mongoose = require('mongoose');
const OrderSchema= new mongoose.Schema({
    products:{
        type:Array,
        requred:true
    },
    total:{
        type:Number,
        requred:true
    },
    status:{
        type:String, // Pending, Rejected, Comleted, Cancelled 
        requred:true
    },
    Customer:{
        type:String, 
        requred:true
    },
    Date:{
        type:Date,  
        requred:true
    }
});
module.exports = mongoose.model('Order',OrderSchema);