const Score = require('../models/score');
const redis = require('./redis');

/**
 * @param int user
 * @return object
 */
const findByUser = async (user) => {
  return await Score.findOne({
    where: { user }
  });
};

/**
 * @param object user
 * @param int score
 * @return object
 */
const setScore = async (user, score) => {
  const redisScore = await redis.getScoreInLeaderboard(user.userName);

  if (redisScore === undefined || redisScore < score) {
    await redis.setScoreInLeaderboard(user.userName, score);
  }

  const userScore = await findByUser(user.id);

  if(userScore){
    
    if(userScore.score < score){
      return await userScore.update({ score });
    }

    return userScore;
  }

  return await Score.create({ user: user.id, score });
};

module.exports = {
  findByUser,
  setScore
};