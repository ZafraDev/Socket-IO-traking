const mongoose  = require("mongoose");
const { getItemByQuery } = require("../../../middlewares/db")
const Config = require("../../../models/Config")

const findSelectedMessage = async (config,  messageId) => {
    if (!config) return "Me encuentro en peligro";
    const messageSelected = config.messages.find((m) => {
        const _id = m._id.toString();
        return _id == messageId
    });
    if (!messageSelected) return config.mainMessage.content || "Me encuentro en peligro";
    return messageSelected.content;
}

module.exports = {
    findSelectedMessage
}