"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    // static associate(models) {}
  }
  Product.init(
    {
      UUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { message: "Please enter a valid product name" },
          notEmpty: { message: "Product name cannot be empty" },
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { message: "Please enter a relavant category" },
        },
      },

      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            message: "Please enter a url",
          },
          isUrl: { message: "Please enter a valid url" },
        },
      },
    },
    {
      sequelize,
      tableName: "products",
      modelName: "Product",
    }
  );
  return Product;
};