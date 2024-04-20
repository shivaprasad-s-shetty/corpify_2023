const express = require("express");
const app = express();
require("./db");

const PORT = process.env.PORT || 5000;
app.use(express.json());

const emailQueryRouter = require("./Routes/Emailquery");
const serviceReqRouter = require("./Routes/Servicerequire"); // Adjust the path accordingly

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", emailQueryRouter);
app.use("/api", serviceReqRouter); // Use /api as the base path

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
