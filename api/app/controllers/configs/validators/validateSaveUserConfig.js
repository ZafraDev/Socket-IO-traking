const { validateResult, parseUndefined } = require('../../../middlewares/utils')
const { check } = require('express-validator')

const validateSaveUserConfig = [
    check('contacts')
        .optional()
        .custom(parseUndefined)
        .isArray()
        .withMessage('Los contactos de emergencia debe ser un arreglo'),
    check('contacts.*.name')
        .optional()
        .custom(parseUndefined)
        .isString()
        .withMessage('El nombre del contacto deben ser caracteres'),
    check('contacts.*.phone')
        .optional()
        .custom(parseUndefined)
        .isNumeric()
        .withMessage('El teléfono del contacto debe contener solo números')
        .isLength({
            max: 9,
            min: 9
        })
        .withMessage('El teléfono del contacto debe 9 dígitos'),
    check('messages')
        .optional()
        .custom(parseUndefined)
        .isArray()
        .withMessage('Los mensajes deben ser un arreglo'),
    check('messages.*.title')
        .optional()
        .custom(parseUndefined)
        .isString()
        .withMessage('El título del mensaje deben ser caracteres'),
    check('messages.*.content')
        .optional()
        .custom(parseUndefined)
        .isString()
        .withMessage('El contenido del mensaje deben ser caracteres'),
    check('mainMessage')
        .optional()
        .custom(parseUndefined)
        .isObject()
        .withMessage('El mensaje principal debe ser un objeto'),
    check('mainMessage.content')
        .optional()
        .custom(parseUndefined)
        .isString()
        .withMessage('El contenido del mensaje principal deben ser caracteres'),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateSaveUserConfig }