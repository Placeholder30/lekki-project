"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasOne(models.Order, {
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      UUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      address: {
        type: DataTypes.STRING,
        defaultValue: "Homeless",
      },
      lastLogin: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
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
