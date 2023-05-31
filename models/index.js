const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./../utilities/dbConnect");

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Data = require("./data")(sequelize, DataTypes);

db.sequelize.sync({ alter: true }).then(() => {
  console.log("All models synchronized");
});

module.exports = db;
