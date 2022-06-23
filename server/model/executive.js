const mongoose = require('mongoose')

const personalDetails = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Address : {
        type:String,
        required:true
    },
   
    Occupation: {
        type:String,
        required:true
    },
    AadharNo: {
        type:Number,
        required:true
    },
    PhoneNo: {
        type:Number,
        required:true
    },
    Email: {
        type:String,
        required:true
    }

   
   
})

// const Leads = new mongoose.Schema({
//     SellerId:  {  
//         type : mongoose.Schema.Types.ObjectId,
//         required : true,
//         ref : 'Seller'
//     },
//     DOJ : {
//         type: Date,
//         required: true
//     }
// })

// const PayOuts = new mongoose.Schema({
//     StartDate : {
//         type: Date,
//         required: true
//     },
//     EndDate : {
//         type: Date,
//         required: true
//     },
//     SellerBillId : [
//     {
//         type : mongoose.Schema.Types.ObjectId,
//         required : true,
//         ref : 'Seller'
//     }],
//     Payout : {
//         type: Number,
//         required: true,
//         default : 0
//     }
// })


const ExecutiveSchema = new mongoose.Schema({
    // PayOuts : [PayOuts],
    // Leads: [Leads],
    personalDetails : personalDetails,
    Username : {
        type: String,
        required: true
    },
    Password : {
        type: String,
        required: true
    },
    // Email : {
    //     type: String,
    //     required: true
    // },
  
  

},{
    collection : 'Executives'
}
)

const Executive = mongoose.model('Executive', ExecutiveSchema)

module.exports = Executive

