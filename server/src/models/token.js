"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TokenBlacklist extends Model {
    static associate(models) {}
  }
  TokenBlacklist.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      token: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: "tokens",
      modelName: "TokenBlacklist",
    }
  );
  return TokenBlacklist;
};
