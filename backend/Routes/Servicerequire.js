// routes/serviceReq.js

const express = require("express");
const router = express.Router();
const ServiceReq = require("../models/Servicereq");
const { body, validationResult } = require("express-validator");

router.post(
  "/submit-service-req",
  [
    body("email", "Invalid email").isEmail(),
    body("company", "Company is required").notEmpty(),
  ],
  async (req, res) => {
    const { email, company, phone, description } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await ServiceReq.create({
        email,
        company,
        phone,
        description,
        // Add other fields as needed
      });

      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.json({ success: false, error: "Failed to submit service request" });
    }
  }
);

module.exports = router;
