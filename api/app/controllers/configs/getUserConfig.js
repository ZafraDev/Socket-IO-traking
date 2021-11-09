const { structure, handleSuccess } = require("../../middlewares/utils");
const { findConfigByUserId } = require("./helpers");


const getUserConfig = structure(async (req, res) => {
    const _id = req.user;
    const userConfig = await findConfigByUserId(_id);

    return handleSuccess({ res, data: userConfig })
});

module.exports = {
    getUserConfig,
}