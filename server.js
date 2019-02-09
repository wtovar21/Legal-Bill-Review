var mongojs = require('mongojs');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//Express
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Passport init
app.use(passport.initialize());
app.use(passport.session());

//routes
// var users = require('./controllers/user-routes');
//app.use(users); //

//var html = require('./controllers/html-routes');
//app.use(html);

//Original n.sure? look this up. 
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

// Added mongojs to hook the data
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});


app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});