const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const trimRequest = require('trim-request')
const requireAuth = passport.authenticate('jwt', {
    session: false
})

const {
    getUserConfig,
    saveUserConfig
} = require('../controllers/configs')

const {
    validateSaveUserConfig
} = require('../controllers/configs/validators')

router.get("/",
    requireAuth,
    trimRequest.all,
    getUserConfig
)

router.post("/",
    requireAuth,
    trimRequest.all,
    validateSaveUserConfig,
    saveUserConfig
)

module.exports = router
