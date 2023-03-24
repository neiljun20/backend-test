const authenticationService = require('../services/authentication');

exports.login = async (req, res) => {
  let code = 500;

  const { tokebn } = await authenticationService.login(req.body);
  
  if(!tokebn){
     res.status(code).send({ code, msg: "login failed" });
     return;
  }

  code = 200;
  res.status(code).send({ code, tokebn });
}