const { updateItem } = require("../../../middlewares/db");
const Config = require("../../../models/Config");

const editConfig = async (id, config) => {
    const updatedConfig = await updateItem(id, config, Config);
    return updatedConfig;
};

module.exports = { editConfig }