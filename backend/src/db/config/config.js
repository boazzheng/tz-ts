const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../../../.env')});

// console.log(process.env.DB_NAME, process.env.DB_PWD, process.env.DB_NAME);

module.exports = {
  "development": {
    "username": process.env.DB_USER || "",
    "password": process.env.DB_PWD || "",
    "database": process.env.DB_NAME || "",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USER || "",
    "password": process.env.DB_PWD || "",
    "database": process.env.DB_NAME || "",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USER || "",
    "password": process.env.DB_PWD || "",
    "database": process.env.DB_NAME || "",
    "host": "localhost",
    "dialect": "postgres"
  }
}
