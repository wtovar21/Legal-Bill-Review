var express = require("express");

var router = express.Router();

// Import the model (bill.js) to use its database functions.
var bill = require("../models/bill.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    bill.selectAll(function(data) {
      var hbsObject = {
        bills: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/bills", function(req, res) {
    bill.insertOne([
      "rate", "date"
    ], [
      req.body.rate, req.body.date
    ], function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/bills/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  

  });
  
  // Export routes for server.js to use.
  module.exports = router;
  