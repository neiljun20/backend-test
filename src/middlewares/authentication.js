const userService = require('../services/user');
const redisService = require('../services/redis');

exports.validateInput = async (req, res, next) => {
  
  if(!req.body || !req.body.userName || !req.body.userPwd){
    const code = 400;
    res.status(code).send({ code, msg: "invalid! userName and userPwd is required" });
    return;
  }

  next();

};

exports.validateToken = async (req, res, next) => {

  const code = 500;
  const msg = "bad token";

  if(!req.body || !req.body.token){
    res.status(code).send({ code, msg });
    return;
  }

  const user = await redisService.findToken(req.body.token);

  if(!user){
    res.status(code).send({ code, msg });
    return;
  }

  req.user = user;
  
  next();
}