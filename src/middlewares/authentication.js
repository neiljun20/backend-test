const userService = require('../services/user');

exports.validateInput = async (req, res, next) => {
  
  if(!req.body || !req.body.userName || !req.body.userPwd){
    code = 400;
    msg = "invalid! userName and userPwd is required";
    res.status(code).send({ code, msg });
    return;
  }

  next();

};