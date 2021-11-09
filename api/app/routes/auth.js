const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const trimRequest = require('trim-request')
const requireAuth = passport.authenticate('jwt', {
  session: false
})

const {
  login,
  getProfile,
  refreshToken,
  signUp,
} = require('../controllers/auth')

const {
  validateLogin,
  validateSignUp
} = require('../controllers/auth/validators')

/*
 * Login route
 */
router.post('/sign_in', trimRequest.all, validateLogin, login)

/*
 * Sign Up route
 */
router.post('/sign_up', trimRequest.all, validateSignUp, signUp)

/*
 * Profile route
 */
router.get(
  '/profile',
  requireAuth,
  trimRequest.all,
  getProfile
)

/*
 * Refresh token route
 */
router.get(
  '/refresh_token',
  requireAuth,
  trimRequest.all,
  refreshToken
)

module.exports = router
