const express = require("express");
const Router = express.Router();
const EmailQuery = require("../models/Email.js");
const { body, validationResult } = require("express-validator");

Router.post(
  "/submit-email",
  [body("email", "incorrect email").isEmail()],
  async (req, res) => {
    const { email } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await EmailQuery.create({
        email,
        // Add other fields as needed
      });

      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.json({ success: false });
    }
  }
);

module.exports = Router;
