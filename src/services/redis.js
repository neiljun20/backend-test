const redis = require('../utils/redis');

/**
 * @param string token
 * @param string username
 * @return void
 */
exports.setToken = (token, userName) => {
  redis.setex(token, 300, userName);
};

/**
 * @param string token
 * @return object
 */
exports.findToken = async (token) => {
  return await redis.get(token);
};