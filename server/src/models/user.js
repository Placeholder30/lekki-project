"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    // static associate(models) {}
  }
  User.init(
    {
      UUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { message: "You must enter your firstname" },
          notEmpty: { message: "firstname must not be empty" },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        defaultValue: "Anon",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { message: "You already have an account" },
        validate: { isEmail: { msg: "Please enter a valid email" } },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { message: "Please enter a password" },
          len: { message: "password is too short", args: [5] },
        },
      },
      address: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  return User;
};
