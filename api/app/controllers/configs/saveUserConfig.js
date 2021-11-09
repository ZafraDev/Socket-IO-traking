const { matchedData } = require("express-validator");
const { structure, handleSuccess } = require("../../middlewares/utils");
const { findConfigByUserId, editConfig, createNewConfig } = require("./helpers");

const saveUserConfig = structure(async (req, res) => {
    const _id = req.user;
    const data = matchedData(req)

    const foundedConfig = await findConfigByUserId(_id);

    if (!foundedConfig) {
        const savedConfig = await createNewConfig({...data, user: _id});
        return handleSuccess({ res, data: savedConfig });
    } else {
        const editedConfig = await editConfig(foundedConfig._id, data);
        return handleSuccess({ res, data: editedConfig });
    }
});

module.exports = {
    saveUserConfig
}