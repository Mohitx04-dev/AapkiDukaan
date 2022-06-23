const Mongoose = require('mongoose')
const AdminModel = new Mongoose.Schema({
    Username : {
        type : String,
    },
    Password : {
        type : String
    }
},
{
    collection : 'Admin'
})

const Admin = Mongoose.model("Admin", AdminModel);

module.exports = Admin;