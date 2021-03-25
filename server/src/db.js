const { Sequelize } = require("sequelize");

async function init() {
  const { DATABASE, USERNAME, PASSWORD, HOST } = process.env;
  const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
    pool: { min: 0, max: 8, idle: 1000 },
  });
  try {
    await sequelize.authenticate();
    console.log("Connection to db has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
const db = init;

module.exports = db;
