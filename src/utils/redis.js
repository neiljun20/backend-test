const redis = require("ioredis");
const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = require('../config');

module.exports = new redis({
  port: REDIS_PORT,
  host: REDIS_HOST,
  password: REDIS_PASSWORD
});