const userService = require('../services/user');

exports.create = async (req, res) => {

  const isExist = await userService.isUserNameExist(req.body.userName);
  
  if(isExist){
    res.status(500).send({ code: 500, msg: "account already exists" });
    return;
  }

  await userService.createUser(req.body);

  code = 200;
  msg = "OK";

  res.status(code).send({ code, msg });

};