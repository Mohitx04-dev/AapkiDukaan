const Mongoose = require('mongoose')
const Address = new Mongoose.Schema({
    Street : {
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    Pincode:{
        type:Number,
        required:true
    },
    State:{
        type: String,
        required:true
    }
})
const Orders = new Mongoose.Schema({
    SellerId : {
        type: Mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Seller",
    },
    Price : {
        type:Number,
        required:true
    },
    ProductId:{
        type: Mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Products",
    },
    Address,
    Status:{
        type:Boolean,
        required:true
    }
})
const CustomerSchema = new Mongoose.Schema({
    Address,
    FirstName : {
        type: String,
        required: true
    },
    LastName : {
        type: String,
        required: true
    },
    Username : {
        type: String,
        required: true
    },
    Password : {
        type: String,
        required: true
    },
    PhoneNo : {
        type: Number,
        required: true
    },
    Orders : [Orders]
}, 
{
    collection : 'Customers'
})

const Customers = Mongoose.model("Customers", CustomerSchema);

module.exports = Customers;