const userService = require('../services/user');

exports.newAccount = async (req, res) => {

  let code = 400;
  let msg = "invalid! userName and userPwd is required";

  if(!req.body || !req.body.userName || !req.body.userPwd){
    res.status(code).send({ code, msg });
    return;
  }

  const isExist = await userService.isUserNameExist(req.body.userName);
  
  if(isExist){
    code = 500;
    msg = "account already exists";
    res.status(code).send({ code, msg });
    return;
  }

  await userService.createUser(req.body);

  code = 200;
  msg = "OK";

  res.status(code).send({ code, msg });

};

