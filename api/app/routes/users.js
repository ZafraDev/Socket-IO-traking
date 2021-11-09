const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const trimRequest = require('trim-request')
const requireAuth = passport.authenticate('jwt', {
  session: false
})

const {
  getUserById
} = require('../controllers/users')

const {
  validateGetUserId
} = require('../controllers/users/validators')

/*
 * Login route
 */
router.get('/:id', trimRequest.all, validateGetUserId, getUserById)

module.exports = router
