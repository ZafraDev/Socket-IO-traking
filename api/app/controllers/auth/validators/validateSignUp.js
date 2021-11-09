const { validateResult } = require('../../../middlewares/utils')
const { check } = require('express-validator')
const { passwordRegex } = require("../../../middlewares/regex")

const validateSignUp = [
    check('email')
        .exists()
        .withMessage('Debe añadir el correo electrónico')
        .not()
        .isEmpty()
        .withMessage('Debe añadir el correo electrónico')
        .isEmail()
        .withMessage('Correo electrónico no válido'),
    check('dni')
        .exists()
        .withMessage('Debe añadir el número de documento')
        .not()
        .isEmpty()
        .withMessage('Debe añadir el número de documento')
        .isString()
        .withMessage('El formato del documento es incorrecto'),
    check('fullName')
        .exists()
        .withMessage('Debe añadir el nombre completo')
        .not()
        .isEmpty()
        .withMessage('Debe añadir el nombre completo')
        .isString()
        .withMessage('El nombre completo deben ser caracteres'),
    check('phone')
        .exists()
        .withMessage('Debe añadir el número de teléfono')
        .not()
        .isEmpty()
        .withMessage('Debe añadir el número de teléfono')
        .isNumeric()
        .withMessage('El número de teléfono es inválido'),
    check('password')
        .exists()
        .withMessage('Debe añadir la contraseña')
        .not()
        .isEmpty()
        .withMessage('Debe añadir la contraseña')
        .isLength({
            min: 8
        })
        .withMessage('La contraseña es muy corta, debe ser de almenos 8 caracteres')
        .matches(passwordRegex)
        .withMessage("La contraseña debe contener almenos una letra y un número"),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateSignUp }