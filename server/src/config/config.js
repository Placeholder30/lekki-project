const {
  USERNAME,
  PASSWORD,
  DATABASE,
  HOST,
  DEVPASS,
  DEVUSER,
  DEVDATABASE,
} = process.env;
module.exports = {
  development: {
    username: DEVUSER,
    password: DEVPASS,
    database: DEVDATABASE,
    host: "localhost",
    dialect: "postgres",
  },
  production: {
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    host: HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
