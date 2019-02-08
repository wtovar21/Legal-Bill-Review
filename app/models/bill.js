// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var bill = {
    selectAll: function(cb) {
      orm.selectAll("bills", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("bills", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("bills", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgers_controller.js)
  module.exports = bill;
  