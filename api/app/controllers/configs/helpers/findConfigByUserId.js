const { getItemByQuery } = require("../../../middlewares/db")
const Config = require('../../../models/Config')

const findConfigByUserId = async (userId) => {
    const foundedConfig = await getItemByQuery({ user: userId }, Config);
    return foundedConfig;
}

module.exports = {
    findConfigByUserId
}