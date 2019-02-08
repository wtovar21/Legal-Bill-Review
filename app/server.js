var mongojs = require('mongojs');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require("mongoose");

//Express
var app = express();
var PORT = process.env.PORT || 3000;


// // Parse request body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Make public a static folder
// console.log(__dirname)
// app.use( express.static(__dirname + "/app/public"));

// Passport init
app.use(passport.initialize());
app.use(passport.session()); 

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/bills_controller.js");

app.use(routes);


//routes
// var users = require('./controllers/user-routes');
// app.use(users);

// var html = require('./controllers/html-routes');
// app.use(html);

// //Original n.sure? look this up. 
// require('./app/routing/apiRoutes.js')(app); 
// require('./app/routing/htmlRoutes.js')(app);

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/legal-bills";
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// app.get("/", function(req, res) {
//   db.bills.find({})
//     .then(function(dbArticle) {
//       // If we were able to successfully find Articles, send them back to the client
//       console.log(dbArticle);
//     })
//     .catch(function(err) {
//       // If an error occurred, send it to the client
//       console.log(err);
//     });

//     res.render("index");
//   });

// app.post("/submit", function(req, res) {
//   // Save the request body as an object called bills
//   var bills = req.body;

//   // Save the book object as an entry into the books collection in mongo
//   db.bills.save(bills, function(error, saved) {
//     // Show any errors
//     if (error) {
//       console.log(error);
//     }
//     else {
//       // Otherwise, send the response to the client (for AJAX success function)
//       res.send(saved);
//     }
//   });
// });

// // Retrieve results from mongo
// app.get("/all", function(req, res) {
//   // Find all notes in the notes collection
//   db.bills.find({}, function(error, found) {
//     // Log any errors
//     if (error) {
//       console.log(error);
//     }
//     else {
//       // Otherwise, send json of the notes back to user
//       // This will fire off the success function of the ajax request
//       res.json(found);
//     }
//   });
// });

app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});