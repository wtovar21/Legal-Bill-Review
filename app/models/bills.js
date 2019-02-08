var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var BillSchema = new Schema({
  // `title` is required and of type String
  rate: {
    type: String,
    required: true,
    unique: true
  },
  // `link` is required and of type String
  date: {
    type: String,
    required: true,
    unique: true
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note

});

// This creates our model from the above schema, using mongoose's model method
var bills = mongoose.model("bills", BillSchema);

// Export the Article model
module.exports = bills;
