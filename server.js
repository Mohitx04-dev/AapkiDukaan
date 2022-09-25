const express = require("express");
const app = express();
const connectDB = require('./server/database/connection');
const dotenv = require('dotenv');
dotenv.config( { path : 'config.env'} )
const morgan = require('morgan');
const path = require('path');
const cors = require("cors");
const passport = require("passport");
const uploads = require('./server/middleware/Uploads/')
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.disable('etag');
app.use(passport.initialize());
connectDB();
require("./server/middleware/passport")(passport);
app.use(passport.session());
app.use(express.urlencoded({ extended : true}))
app.use('/', require('./server/routes/router'))
app.use(uploads)
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client','build', 'index.html'));
  });
app.listen(5000, () => {
  console.log("listening on port 5000");
});
