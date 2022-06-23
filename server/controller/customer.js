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
         res.send(data)
    }).catch(e=>{
        console.log(e)
    })
}


const Order = async (v,Sid) => Seller.findOne({'Sales' : {$elemMatch : {_id :(v)}}}).then((data)=>{
 return data
})
exports.getOrdersAll = async (req,res) =>{
  const OrderIds = async () => Customer.findOne({_id : req.params.id}).then((data)=>{
          return data.Orders
      })

  let Arr = await OrderIds()
  let Arr2=[];
  for(let i=0; i<Arr.length; i++) {
      let v = await Order(Arr[i]._id)
      console.log(v)
      // Arr[i]["Name"] = v.Name
      // Arr[i]["Photo"] = v.Photo
      // const returnedTarget = Object.assign(v,Arr[i]);
      // Arr[i] = returnedTarget
      // Arr2.push(returnedTarget)
  }
  // res.send(Arr2)
}