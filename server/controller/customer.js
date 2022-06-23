const mongoose = require("mongoose");
var Customer = require('../model/customer')
const Seller = require('../model/seller')


exports.createCustomer = async  (req,res) => {
   try {
       if (!req.body){
       }
       const Address={
         Street : req.body.Street,
         State : req.body.State,
         Pincode : req.body.Pincode,
         City : req.body.City,
       }
       const customer = new Customer({
         FirstName : req.body.FirstName,
         LastName : req.body.LastName,
         Username : req.body.Username,
           PhoneNo : req.body.PhoneNo,
           Address : Address,
           Password : req.body.Password
       })
       await customer.save()
       res.status(200).send(customer)

   }catch(err) {
       res.status(500).send(err)
   }
}
exports.updateCustomer = (req,res) =>{
  Customer.updateOne({id : req.body._id},{
    FirstName : req.body.FirstName,
    LastName : req.body.LastName,
    Username : req.body.Username,
      PhoneNo : req.body.PhoneNo,
      Address : {
        Street : req.body.Street,
        State : req.body.State,
        Pincode : req.body.Pincode,
        City : req.body.City
      }
  }).then(data=>{
    res.send(data)
  })
}
exports.ShowCustomer = (req,res)=>{
   Customer.find({}).then(data=>{
      res.send(data)
   })
}
exports.GetCustomerbyId = (req,res)=>{
  console.log('inside')
  Customer.findById(req.user.user._id).then(data=>{
    res.send(data)
 })
}

exports.GetOrderIds = (req,res) => {
  Customer.updateOne(
    { _id: req.body.CustId },
    { $addToSet: { Orders: {
        _id : req.body.OrderId
    }} }
    ).then((data)=>{
         console.log('Success')
         console.log(req.body.OrderId)
         res.send({_id:  req.body.OrderId})
    }).catch(e=>{
        console.log(e)
    })
}


