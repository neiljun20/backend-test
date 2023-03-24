const redis = require("./redis");

/**
 * @param string userName
 * @param int score
 * @return void
 */
exports.setScore = async (userName, score) => {
  const userScore = await redis.getScoreInLeaderboard(userName);

  if (userScore === undefined || userScore < score) {
    await redis.setScoreInLeaderboard(userName, score);
  }
};

/**
 * @param string userName
 * @return object
 */
exports.leaderBoard = async (userName) => {
  let myScore = await redis.getScoreInLeaderboard(userName);
  const myRank = await redis.getRankInLeaderboard(userName);
  const topUsers = await redis.getTopThreeUsers();

  myScore = myScore ? parseInt(myScore) : 0 ;

  let rank = [];

  for (let i = 0; i < topUsers.length; i += 2) {
    rank.push({
      userName: topUsers[i],
      score: parseInt(topUsers[i + 1]),
    });
  }

  return {
    mine: {myScore, myRank},
    rank
  };
};