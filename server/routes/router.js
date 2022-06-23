const express = require("express");
const route = express.Router();

const seller = require("../controller/seller");
const products = require("../controller/products");
const customer = require("../controller/customer");
const executive = require("../controller/executive");
const Auth = require("../middleware/Auth");
const Admin = require("../controller/admin");

// route.get("/api/test",Auth.Auth,seller.Check); 
route.get("/api/findSellerbyDomain/:domain",seller.findSellerbyDomain); //MAIN API 
route.post("/api/createProduct",Auth.Auth,Auth.AuthS,products.createProduct); //Create Product in Product Pool
route.put("/api/CreatePromoCode/:id",Auth.Auth,Auth.AuthS,seller.CreatePromoCode); //Creates promocode for a seller
route.post("/api/create/Seller", Auth.userRegister, seller.createSeller); // Creates User
route.post("/api/create/Customer", Auth.userRegister, customer.createCustomer); //Creates Seller
route.post("/api/create/Admin",Auth.userRegister,Admin.newAdmin);
route.post("/api/create/Executive",Auth.userRegister,executive.createExecutive); 
route.post("/api/loginUser/:role",Auth.userLogin); //Login API for DB
route.put("/api/createProduct",Auth.Auth,Auth.AuthS ,products.createProduct,seller.AddProducts); //Add Product to a single Seller & Product Pool
route.get("/api/findSellerProducts/:id",seller.GetProducts); // Gets All products a Seller Sells
route.put("/api/findProductsbyCategory/:id",seller.GetProductsbyCategory); //Finds all products in Seller's Category
route.get("/api/findProduct/:id",Auth.Auth,Auth.AuthA,products.GetProducts); //Finds a purticular Product from Product Pool
route.put("/api/addProduct",Auth.Auth,Auth.AuthS,seller.AddProducts); //Add Products for a single Seller
route.put("/api/updateWebsite/:id",Auth.Auth,Auth.AuthS,seller.UpdateSetting); //Updates Website Settings of Seller's Website
route.get("/api/showCustomer",Auth.Auth,Auth.AuthA,customer.ShowCustomer); //Fetches All Customers Registered
route.get("/api/getCustomerbyToken",Auth.Auth,customer.GetCustomerbyId); //Fetches Single Customer Data to him
route.get("/api/showClient",Auth.Auth,Auth.AuthAE,seller.ShowClient); //Fetches All registered Sellers
route.get("/api/showProduct",Auth.Auth,Auth.AuthAE,products.ShowProducts); //All Products Pool

route.get("/api/getFullProduct/:id/:pid",seller.Fprod,products.Fprod); //Gets Complete Data for a Seller's Product
route.get("/api/GetPromoCode/:id",Auth.Auth,Auth.AuthS,seller.GetPromoCode); //Fetched all Promocodes for a single Seller
route.put("/api/checkpromo/:id",seller.CheckPromo); //Validates PromoCode & Calculates Discount
route.get("/api/getAllProducts/:id/",seller.GetProductsAll); //All Products of a Single Seller with Name and Photo Included
route.put("/api/DeletePromo/:id",Auth.Auth,Auth.AuthS,seller.DeletePromo);//Deletes Promo Codes
route.put("/api/DeleteProducts/:id",Auth.Auth,Auth.AuthS,seller.DeleteProducts);//Deletes Products 
route.delete("/api/DeleteSeller/:id",Auth.Auth,Auth.AuthA,seller.DeleteSeller);//Deletes seller 
route.put("/api/ChangePassword/:role/:id",Auth.ChangePassword);//Changes Password
route.get("/api/GetExecutive",Auth.Auth,Auth.AuthA,executive.GetExecutive); //Get Executives
route.delete("/api/DeleteExecutive/:id",Auth.Auth,Auth.AuthA,executive.DeleteExecutive);//Deletes executive 
route.put("/api/PlaceOrder/",seller.recieveOrder,customer.GetOrderIds);//Placed Order
route.get("/api/GetSales/:id",seller.GetSales);
route.put("/api/updateCustomer/:id",customer.updateCustomer);
route.get("/api/GetOrderbyCustomer/:id/:cid", seller.GetOrderbyCustomer);
route.get("/api/GetOrderDetail/:id/:oid", seller.getOrderDetail);

module.exports = route;
