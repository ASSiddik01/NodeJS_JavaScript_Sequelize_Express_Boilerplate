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
