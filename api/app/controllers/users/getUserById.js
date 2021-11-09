const { matchedData } = require("express-validator");
const { structure, handleSuccess, handleError } = require("../../middlewares/utils");
const { findUserById } = require('./helpers')

const getUserById = structure(async (req, res) => {
    const { id } = matchedData(req);
    const user = await findUserById(id)
    if (!user) handleError(res, 404, "No se encontró el usuario")
    return handleSuccess({ res, data: user })
})

module.exports = {
    getUserById
}