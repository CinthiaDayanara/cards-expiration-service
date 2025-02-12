const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres", // O "postgres", "sqlite", según el tipo de base de datos
  host: process.env.DB_HOST || "localhost", 
  username: process.env.DB_USER || "root", 
  password: process.env.DB_PASSWORD || "password", 
  database: process.env.DB_NAME || "listas", 
  logging: false // Puedes habilitarlo si quieres ver las consultas SQL
});

module.exports = sequelize;
