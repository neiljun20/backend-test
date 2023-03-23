require('dotenv').config();

const {
  PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST
} = process.env;

module.exports = {
  PORT: PORT || 3000,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST
};