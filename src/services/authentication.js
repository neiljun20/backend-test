const userService = require('./user');
const redisService = require('./redis');
const bcrypt = require('bcrypt');
const shortid = require('shortid');

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

/**
 * @param object reqUser
 * @return object
 */
exports.login = async (reqUser) => {
  let tokebn = "";

  const user = await userService.findByUserName(reqUser.userName);
  
  if(!user){
    return { tokebn };
  }

  const isPasswordCorrect = await bcrypt.compare(reqUser.userPwd, user.userPwd);

  if(!isPasswordCorrect){
    return { tokebn };
  }

  tokebn = shortid.generate({length: 8});

  redisService.setToken(tokebn, {
    id: user.id,
    userName: user.userName
  });

  return {
    tokebn
  }
  
}