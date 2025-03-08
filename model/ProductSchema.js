const mongoose = require('mongoose');
const ProductSchema= new mongoose.Schema({
    productName:{
        type:String,
        requred:true,
        unique:true
    },
    description:{
        type:String,
        requred:true
    },
    unitPrice:{
        type:Number,
        requred:true
    },
    qtyOnHand:{
        type:Array, 
        requred:true
    },
    
    isActive:{
        type:Boolean,
        requred:true
    },
    images:{
        type:Array, // s3 bucket
        requred:true
    }
});

ProductSchema.statics.findLowStockProducts = function(){
    return this.find({qtyOnHand:{$lt:10}});
}

module.exports = mongoose.model('Product',ProductSchema);