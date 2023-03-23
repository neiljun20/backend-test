const User = require('../models/user');
const bcrypt = require('bcrypt');

/**
 * @param string
 * @return object
 */
exports.findByUserName = async (userName) => {
  return await User.findOne({
    where: { userName }
  });
};

/**
 * @param string
 * @return bool
 */
exports.isUserNameExist = async (userName) => {
  return await findByUserName(userName) ? true : false ;
};

/**
 * @param object
 * @return object
 */
exports.createUser = async (newUser) => {
  newUser.userPwd = await bcrypt.hash(newUser.userPwd, 10);
  return await User.create({ ...newUser });
};