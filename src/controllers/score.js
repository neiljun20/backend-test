const scoreService = require('../services/score');

exports.create = async (req, res) => {

  let code = 500;
  let msg = "bad score";

  if(req.body.myScore === undefined || !Number.isInteger(req.body.myScore)){
    res.status(code).send({ code, msg });
    return;
  }
  
  await scoreService.setScore(req.user.userName, req.body.myScore);
  code = 200;
  msg = "OK";
  res.status(code).send({ code, msg });

};

exports.leaderBoard = async (req, res) => {

  const code = 200;
  const data = await scoreService.leaderBoard(req.user.userName);

  res.status(code).send({ code, data });

};