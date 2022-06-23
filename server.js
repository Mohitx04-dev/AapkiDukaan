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
app.use(passport.session());
require("./server/middleware/passportS")(passport);

connectDB();
app.use(express.urlencoded({ extended : true}))
app.use('/', require('./server/routes/router'))
app.use(uploads)


app.listen(5000, () => {
  console.log("listening on port 5000");
});
