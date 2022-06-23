const mongoose = require("mongoose");
const Admin = require("../model/admin");

exports.newAdmin = (req, res) => {
  try {
    if (!req.body) {
      res.send('Invalid Request')
    }
    const admin = new Admin({
      Username: req.body.Username,
      Password: req.body.Password,
    });
    admin.save().then((data) => {
        res.send(data)
    });
  } catch (err) {
    res.status(500).send(err);
  }
};