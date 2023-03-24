const User = require('../models/user');
const bcrypt = require('bcrypt');

/**
 * @param string userName
 * @return object
 */
const findByUserName = async (userName) => {
  return await User.findOne({
    where: { userName }
  });
};

/**
 * @param string userName
 * @return bool
 */
const isUserNameExist = async (userName) => {
  return await findByUserName(userName) ? true : false ;
};

/**
 * @param object newUser
 * @return object
 */
const createUser = async (newUser) => {
  newUser.userPwd = await bcrypt.hash(newUser.userPwd, 10);
  return await User.create({ ...newUser });
};

module.exports = {
  findByUserName,
  isUserNameExist,
  createUser
};