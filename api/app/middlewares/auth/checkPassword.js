const User = require('../../models/User')
const checkPassword = async (sendPassword = '', actualPassword = '') => {
  const bool = await User.comparePassword(sendPassword, actualPassword)
  return bool
}

module.exports = { checkPassword }
