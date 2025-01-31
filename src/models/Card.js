const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Card = sequelize.define("Card", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  list_id: { type: DataTypes.INTEGER, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  due_date: { type: DataTypes.DATE, allowNull: true },
  status: { 
    type: DataTypes.ENUM("active", "expired"), 
    defaultValue: "active"
  }
}, {
  timestamps: true
});

module.exports = Card;
