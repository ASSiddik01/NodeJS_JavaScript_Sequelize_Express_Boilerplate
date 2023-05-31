const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");
const dataRoute = require("./routes/data.route");
require("./models/index");

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Body Parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Testing API
app.get("/", (req, res) => {
  res.send(`==== Your app is running successfully ====`);
});

// Data Route
app.use("/api/v1/data", dataRoute);

// Unknown API Handle
app.all("*", (req, res) => {
  res.send(`==== Requested Route Not Found ====`);
});

module.exports = app;
