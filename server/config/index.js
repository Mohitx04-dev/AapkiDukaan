require("dotenv").config();
module.exports = {
  SECRET: process.env.APP_SECRET,
  MONGO_URI : process.env.MONGO_URI
};