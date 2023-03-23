const userService = require('../services/user');

exports.newAccount = async (req, res) => {

  await userService.createUser(req.body);

  code = 200;
  msg = "OK";

  res.status(code).send({ code, msg });

};

