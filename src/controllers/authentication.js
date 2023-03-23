const authenticationService = require('../services/authentication');

exports.login = async (req, res) => {
  let code = 500;
  let msg = "login failed";

  const { tokebn } = await authenticationService.login(req.body);
  
  if(!tokebn){
     res.status(code).send({ code, msg });
     return;
  }

  code = 200;
  res.status(code).send({ code, tokebn });
}