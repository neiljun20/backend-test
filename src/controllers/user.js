const userService = require('../services/user');

exports.create = async (req, res) => {

  let code = 500;
  let msg = "account already exists";

  const isExist = await userService.isUserNameExist(req.body.userName);
  
  if(isExist){
    res.status(code).send({ code, msg });
    return;
  }

  await userService.createUser(req.body);

  code = 200;
  msg = "OK";

  res.status(code).send({ code, msg });

};