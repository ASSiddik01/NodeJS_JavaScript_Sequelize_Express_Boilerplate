const db = require("../models/index");
const Data = db.Data;
const { Sequelize, Op } = require("sequelize");

// Get Data Service
exports.getDataService = async () => {
  const result = await Data.findAll({});
  // const result = await Data.findAll({
  //   attributes: [
  //     "firstName",
  //     ["lastName", "nickname"],
  //     // [Sequelize.fn("count", Sequelize.col("firstName")), "Total Count"],
  //     [Sequelize.fn("CONCAT", Sequelize.col("firstName", "lastName")), "Name"],
  //   ],
  // });

  // Include or exclude
  // const result = await Data.findAll({
  //   attributes: {
  //     exclude: ["createdAt", "updatedAt"],
  //     include: [
  //       [
  //         Sequelize.fn("CONCAT", Sequelize.col("firstName"), " Siddik"),
  //         "Full Name",
  //       ],
  //     ],
  //   },
  // });

  // Conditions
  // const result = await Data.findAll({
  //   // where: {
  //   //   id: {
  //   //     [Op.in]: [3, 5],
  //   //   },
  //   // },
  //   order: [["firstName", "DESC"]],
  //   limit: 3,
  //   offset: 1,
  // });

  // data count
  // const result = await Data.count({});
  return result;
};

// Save Data Service
exports.saveDataService = async (reqData) => {
  // Build and Save
  // const user = await Data.build(reqData);
  // const result = await user.save();

  // Create
  const result = await Data.create(reqData);

  // Bulk Create
  // const result = await Data.bulkCreate(reqData);

  return result;
};

// Update Data Service
exports.updateDataService = async (id, reqData) => {
  const result = await Data.update(
    { reqData },
    {
      where: {
        id: id,
      },
    }
  );
  return result;
};

// Update Multiple Data Service
exports.updateMultipleDataService = async (reqData) => {
  const result = "";
  return result;
};

// Delete Data Service
exports.deleteDataService = async (id) => {
  const result = await Data.destroy({
    where: {
      id: id,
    },
  });

  // Delete all data from a table
  // const result = await Data.destroy({
  //   truncate: true,
  // });

  return result;
};

// Delete Multiple Data Service
exports.deleteMultipleDataService = async (reqData) => {
  const result = "";
  return result;
};
