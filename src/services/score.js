const redis = require('./redis');

/**
 * @param string userName
 * @param int score
 * @return void
 */
const setScore = async (userName, score) => {
  const redisScore = await redis.getScoreInLeaderboard(userName);

  if (redisScore === undefined || redisScore < score) {
    await redis.setScoreInLeaderboard(userName, score);
  }
};

module.exports = {
  setScore
};