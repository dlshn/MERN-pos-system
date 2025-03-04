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
    customer:{
        type:String, 
        requred:true
    },
    date:{
        type:Date,  
        requred:true
    }
});
module.exports = mongoose.model('Order',OrderSchema);