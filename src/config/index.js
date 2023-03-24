/* eslint-env node */

require("dotenv").config();

const {
  PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_PASSWORD
} = process.env;

module.exports = {
  PORT: PORT || 3000,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_PASSWORD
};