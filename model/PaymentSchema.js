const mongoose = require('mongoose');
const PaymentSchema= new mongoose.Schema({
    order:{
        type:Object,
        requred:true
    },
    amount:{
        type:Number,
        requred:true
    },
    tax:{
        type:Number,
        requred:true
    },
    discount:{
        type:Number, 
        requred:true
    },
    date:{
        type:Date,  
        requred:true
    },
    transactionDetails:{
        type:Object, 
        requred:true
    },
});
module.exports = mongoose.model('Payment',PaymentSchema);