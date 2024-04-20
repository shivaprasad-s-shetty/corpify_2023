const mongoose = require("mongoose");

const emailQuerySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Add other fields as needed
});

const EmailQuery = mongoose.model("EmailQuery", emailQuerySchema);

module.exports = EmailQuery;
