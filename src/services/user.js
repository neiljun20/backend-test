const User = require('../models/user');
const hashPassword = require('../utils/hashPassword');

/**
 * @param string
 * @return object
 */
const findByUserName = async (userName) => {
  return await User.findOne({
    where: { userName }
  });
};

/**
 * @param string
 * @return bool
 */
const isUserNameExist = async (userName) => {
  return await findByUserName(userName) ? true : false ;
};

/**
 * @param object
 * @return object
 */
const createUser = async (newUser) => {
  newUser.userPwd = await hashPassword(newUser.userPwd);
  return await User.create({ ...newUser });
};

module.exports = {
  isUserNameExist,
  createUser
};