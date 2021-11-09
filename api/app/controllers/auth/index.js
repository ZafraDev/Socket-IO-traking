const { login } = require('./login')
const { getProfile } = require('./getProfile')
const { refreshToken } = require('./refreshToken')
const { signUp } = require('./signUp')

module.exports = {
    login,
    getProfile,
    refreshToken,
    signUp,
}