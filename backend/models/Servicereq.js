// ServiceReq.js

const mongoose = require("mongoose");

const serviceReqSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  description: {
    type: String,
  },
  // Add other fields as needed
});

const ServiceReq = mongoose.model("ServiceReq", serviceReqSchema);

module.exports = ServiceReq;
