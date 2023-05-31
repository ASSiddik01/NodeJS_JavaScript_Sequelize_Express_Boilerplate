<hr><hr>

## **_Sequelize - A promise based object-relational mapping library for SQL DB_**

<hr><hr>

> ===== Note: All underscre ( \_ ) sectence will replace by yours without only type =====

<hr>

### **Install node on project**

```bash
npm init
```

> N.B.: Here I use server.js entry point

### **Install freamwork**

```bash
npm i express dotenv cors colors nodemon mysql2 sequelize body-parser
```

### **Create server**

Create server.js file on project root folder and copy the code and paste

```bash
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app");
const errorHandler = require("./middleware/errorHandler");
const { DBConnect } = require("./utilities/dbConnect");
DBConnect();

// Server
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(
    `==== Your server is running on http://localhost:${port} ====`.yellow.bold
      .italic
  );
});

// Handle Error || Close App
app.use(errorHandler);

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
```

### **Create app**

Create app.js file on project root folder and copy the code and paste

```bash
const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");

// Middleware
app.use(express.json());
app.use(cors());
// Body Parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Testing API
app.get("/", (req, res) => {
  res.send(`==== Your app is running successfully ====`);
});

// Unknown API Handle
app.all("*", (req, res) => {
  res.send(`==== Requested Route Not Found ====`);
});

module.exports = app;

```

### **Create Middleware**

Create a folder named middleware and create a file named errorHandler.js on middleware folder and copy the code and paste

```bash
const errorHandler = (err, req, res, next) => {
  res.send(err.message);
};

module.exports = errorHandler;

```

### **Create DB connection**

Create a folder named utilities and create a file named dbConnect.js on utilities folder and copy the code and paste

```bash
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv").config();

const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

const DBConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log(`==== DB Connection is succesfully ====`.green.bold.italic);
  } catch (error) {
    console.log(`==== Database Connection Error ====`.red.bold.italic, error);
  }
};

module.exports = { DBConnect, sequelize };
```

### **Install freamwork**

```bash
npm i express dotenv cors colors nodemon mysql2 sequelize body-parser
```
