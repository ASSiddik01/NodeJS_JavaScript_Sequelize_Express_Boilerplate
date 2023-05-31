module.exports = (sequelize, DataTypes) => {
  const Data = sequelize.define(
    "Data",
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your name",
          },
          notEmpty: {
            msg: "Your provide empty, please enter your name",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "This email is already taken.",
        },
        validate: {
          isEmail: {
            msg: "Email address must be valid.",
          },
        },
      },
      gender: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [["male", "female"]],
            msg: "Gender Must be male or female",
          },
        },
      },
    },
    {
      // other option
      tableName: "datas",
      timestamps: true,
    }
  );
  return Data;
};
