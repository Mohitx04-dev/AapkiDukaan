var Products = require("../model/products");
const mongoose = require("mongoose");

exports.createProduct = (req, res, next) => {
  try {
    if (!req.body) {
    }

    const product = new Products({
      Name: req.body.Name,
      Photo: req.body.Photo,
      _id: new mongoose.Types.ObjectId(),
    });

    req.body["ProductId"] = product._id;
    product.save().then(() => {
      next();
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.GetProducts = async (req, res) => {
    Products.findById(req.params.id).then((data)=>{
        res.send(data)
    }).catch(((e)=>{
        res.status(404).send(e)
    }))
}

exports.ShowProducts = (req,res)=>{
    Products.find({}).then(data=>{
       
       res.send(data)
    })
 }
exports.Fprod = async (req,res) => {
  Products.findById(mongoose.Types.ObjectId(req.params.pid)).then((data)=>{
    req.body.ProdData["Name"] = data.Name
    req.body.ProdData["Photo"] = data.Photo
    const returnedTarget = Object.assign(data,req.body.ProdData);
    res.send(returnedTarget)
  })
}
