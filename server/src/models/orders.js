"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.Product, {
        foreignKey: "productId",
        onDelete: "CASCADE",
      });
    }
  }
  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      orderId: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      orderQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      orderDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      sequelize,
      createdAt: false,
      tableName: "orders",
      modelName: "Order",
    }
  );
  return Order;
};
