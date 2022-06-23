


const { SECRET } = require("../config");
const { Strategy, ExtractJwt } = require("passport-jwt");
const Seller = require("../model/seller");
const Executive = require("../model/executive");
const Admin = require("../model/admin");
const Customers = require("../model/customer");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
};
module.exports = passportS  =>  {
    passportS.use('jwt', new Strategy(opts, async (payload, done) => {
      const FindinSeller = await Seller.findById(payload.user_id)
      const FindinAdmin = await Admin.findById(payload.user_id)
      const FindinExecutive = await Executive.findById(payload.user_id)
      const FindinCustomers = await Customers.findById(payload.user_id)
      function send(user) {
        let Article = {
            user : user,
            role : payload.role
        }
        return done(null, Article);
      }
      if(payload.role==='Seller') {
          user = FindinSeller
          if(user) {
            send(user)
          }
      }
      else if(payload.role === 'Admin') {
          user = FindinAdmin
          if(user) {
            send(user)
          }
      }
      else if(payload.role === 'Executive') {
          user = FindinExecutive
          if(user) {
            send(user)
          }
      }
      else if(payload.role === 'Customer') {
          user = FindinCustomers
          console.log(user)
          if(user) {
            send(user)
          }
      } else {
        return done(null, false);
      }
      
    }))
}