const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const Customer = require("../model/customer");
const Seller = require("../model/seller");
const { SECRET } = require("../config");
const Admin = require("../model/admin");
const Executive = require("../model/executive");
const { ExtractJwt } = require("passport-jwt/lib");

/**
 * @DESC To register the user (ADMIN, SUPER_ADMIN, USER)
 */

const userRegister = async (req, res, next) => {
  let params =req.originalUrl.split('/')
  params=params[3]
  try {
    // Validate the username
    let usernameNotTaken = await validateUsername(req.body.Username,params);
    if (!usernameNotTaken) {
      return res.status(400).json({
        message: `Username is already taken.`,
        success: false
      });
    }
    // // validate the email
    // let emailNotRegistered = await validateEmail(req.body.Email);
    // if (!emailNotRegistered) {
    //   return res.status(400).json({
    //     message: `Email is already registered.`,
    //     success: false
    //   });
    // }

    // Get the hashed password
    const password = await bcrypt.hash(req.body.Password, 12);
    // create a new user
    req.body["Password"] = password
    next()

  } catch (err) {
    // Implement logger function (winston)
    console.log('Error')
    return res.status(500).json({
      message: "Unable to create your account.",
      success: false
    });
  }
};

/**
 * @DESC To Login the user (ADMIN, SUPER_ADMIN, USER)
 */
const userLogin = async (req,res) => {

  let role = req.params.role
  let { Username, Password } = req.body;
  console.log(Username,Password)
  let user;
  if(role==='Seller') {
     user = await Seller.findOne({ Username : Username, "WebsiteData.Domain" : req.body.Domain});
  }
  else if(role==='Customer') {
     user = await Customer.findOne({ Username : Username });
  }
  else if(role==='Executive') {
    user = await Executive.findOne({ Username : Username });
 } else if(role==='Admin') {
  user = await Admin.findOne({ Username : Username });
}
  else {
    return;
  }
  // First Check if the username is in the database
  if (!user) {
    return res.status(404).json({
      message: "Username is not found. Invalid login credentials.",
      success: false
    });
  }
  let isMatch = await bcrypt.compare(Password, user.Password);
  if (isMatch) {
    // Sign in the token and issue it to the user

    let token = jwt.sign(
      {
        user_id: user._id,
        Username: user.Username,
        role : role
      },
      process.env.SECRET,
      { expiresIn: "7 days" }
    );

    let result = {
      id : user._id,
      username: user.Username,
      token: `Bearer ${token}`,
      expiresIn: 168
    };

    return res.status(200).json({
      ...result,
      message: "Hurray! You are now logged in.",
      success: true
    });
  } else {
    return res.status(403).json({
      message: "Incorrect password.",
      success: false
    });
  }
};

const validateUsername = async (username,params) => {
  if(params==='Seller') {
    let user = await Seller.findOne({ Username : username });
    return user ? false : true;
  }
  else if(params==='Customer'){
    let user = await Customer.findOne({ Username : username });
    return user ? false : true;
  }
  else if(params==='Admin'){
    let user = await Admin.findOne({ Username : username });
    return user ? false : true;
  }
  else if(params==='Executive'){
    let user = await Executive.findOne({ Username : username });
    return user ? false : true;
  }
  else{
    return false;
  }
};
const ChangePassword = async (req,res) => {
  let params = req.params.role
  let newPass = await bcrypt.hash(req.body.Password, 12)
  if(params==='Seller') {
    let user = await Seller.findOneAndUpdate({_id : req.params.id},{Password : newPass})
    return user ? res.status(200).send('Done') : res.status(401).send('Failed');
  }
  else if(params==='Customer'){
    let user = await Customer.findOneAndUpdate({_id : req.params.id},{Password : newPass});
    return user ? res.status(200).send('Done') : res.status(401).send('Failed');
  }
  else if(params==='Admin'){
    let user = await Admin.findOneAndUpdate({ _id : req.params.id },{Password : newPass});
    return user ? res.status(200).send('Done') : res.status(401).send('Failed');
  }
  else if(params==='Executive'){
    let user = await Executive.findOneAndUpdate({_id : req.params.id },{Password : newPass});
    return user ? res.status(200).send('Done') : res.status(401).send('Failed');
  }
  else{
    return res.send({message : "Invalid Request"});
  }
};
/**
 * @DESC Passport middleware
 */

const Auth  = (req,res,next) => { 
  passport.authenticate("jwt", { session: false } )(req,res,next) 
}
const AuthS = (req,res,next) => {
  if(req.user.role==='Seller') {
    next()
  }
  else{
    res.status(401).send('Unauthorised')
  }
}
const AuthC = (req,res,next) => {
  if(req.user.role==='Customer') {
    next()
  }
  else{
    res.status(401).send('Unauthorised')
  }
}
const AuthE = (req,res,next) => {
  if(req.user.role==='Executive') {
    next()
  }
  else{
    res.status(401).send('Unauthorised')
  }
}
const AuthA = (req,res,next) => {
  if(req.user.role==='Admin') {
    next()
  }
  else{
    res.status(401).send('Unauthorised')
  }
}
const AuthAE = (req,res,next) => {
  console.log(req.user)
  if(req.user.role==='Admin' || req.user.role==='Executive') {
    next()
  }
  else{
    res.status(401).send('Unauthorised')
  }
}
const AuthSE = (req,res,next) => {
  if(req.user.role==='Seller' || req.user.role==='Executive') {
    next()
  }
  else{
    res.status(401).send('Unauthorised')
  }
}
// const CheckRole = (req,res,next)=>{
//   if(role===req.body.role) {
//     next()
//   } 
//   else{
//     res.status(401).send('Unauthorised')
//   }
// }

/**
 * @DESC Check Role Middleware
 */

const validateEmail = async email => {
  let user = await Customer.findOne({ Email : email });
  return user ? false : true;
};

const serializeUser = req => {
  return {
    Username: req.user.username,
    Email: req.user.email,
    _id: req.user._id,
    updatedAt: req.user.updatedAt,
    createdAt: req.user.createdAt,
  }
}


const updateUser = async (user,req,res) => {
  const id = req.params.username;
  Customer.findOneAndUpdate({Username : id},user)
  .then((data)=>{
      if(!data) {
        res.status(404).send("Failed")
      }
      else {
        res.status(200).send("Updated")
      }
  })
}

const deleteuser = async (req,res) => {
  const id = req.params.username;
  Customer.findOneAndDelete({Username : id})
  .then((data)=>{
      if(!data) {
        res.status(404).send("Failed")
      }
      else {
        res.status(200).send("Deleted")
      }
  })
}

const GetUserData = async (req,res) => {
  Customer.findOne({Username: req.params.username})
  .then((data)=>{
    if(!data) {
      res.status(404).send("Failed")
    }
    else {
      res.status(200).send(data)
    }
  })
}



const findusers = (req, res) => {
  Customer.find()
        .then((user) => {
          res.send(user);
        })
        .catch((err) => {
          res
            .status(500)
            .send({
              message:
                err.message ||
                "Error Occurred while retriving Member information",
            });
        });
};




module.exports = {
  Auth,
  AuthA,
  AuthS,
  AuthE,
  AuthC,
  AuthAE,
  AuthSE,
  userLogin,
  userRegister,
  serializeUser,
  updateUser,
  GetUserData,
  deleteuser,
  findusers,
  ChangePassword
};