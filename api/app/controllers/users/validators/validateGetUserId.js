const { validateResult } = require('../../../middlewares/utils')
const { check } = require('express-validator')

const validateGetUserId = [
  check('id')
    .exists()
    .withMessage('Debe añadir el ID del usuario')
    .not()
    .isEmpty()
    .withMessage('Debe añadir el ID del usuario')
    .isMongoId()
    .withMessage('El ID del usuario debe ser de tipo mongo'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateGetUserId }