const { matchedData } = require("express-validator");
const { structure, handleError, handleSuccess } = require("../../middlewares/utils");
const { validateIfExistsEmail, validateIfExistsDni, saveUser } = require("./helpers");

const signUp = structure(async (req, res) => {
    const data = matchedData(req);

    const existUserEmail = await validateIfExistsEmail(data.email);
    if (existUserEmail) return handleError(res, 400, "Ya existe un usuario registrado con ese correo");

    const existUserDni = await validateIfExistsDni(data.dni);
    if (existUserDni) return handleError(res, 400, "Ya existe un usuario registrado con ese DNI");

    const savedUser = await saveUser(data);

    return handleSuccess({res, data: savedUser, status: 201});
});

module.exports = { signUp };