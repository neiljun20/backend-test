const redis = require('../utils/redis');

/**
 * @param string token
 * @param object user
 * @return void
 */
exports.setToken = (token, user) => {
  user = JSON.stringify(user);
  redis.setex(token, 300, user);
};

/**
 * @param string token
 * @return object
 */
exports.findToken = async (token) => {
  const user = await redis.get(token);
  return JSON.parse(user);
};

/**
 * @param string userName
 * @param int score
 * @return void
 */
exports.setScoreInLeaderboard = async (userName, score) => {
  await redis.zadd('leaderboard', score, userName);
}

/**
 * @param string userName
 * @return int
 */
exports.getScoreInLeaderboard = async (userName) => {
  return await redis.zscore('leaderboard', userName);
}