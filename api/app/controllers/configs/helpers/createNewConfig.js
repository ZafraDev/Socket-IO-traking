const { createItem } = require("../../../middlewares/db");
const Config = require("../../../models/Config");

const createNewConfig = async (config) => {
    const savedConfig = await createItem(config, Config);
    return savedConfig;
};

module.exports = { createNewConfig }