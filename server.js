const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Define database connection

const mongoose = require('mongoose');
const connection = `mongodb+srv://futures-admin:${process.env.ATLAS_PW}@futures-stats.9limu.mongodb.net/futures-stats?retryWrites=true&w=majority`;
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}
// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
