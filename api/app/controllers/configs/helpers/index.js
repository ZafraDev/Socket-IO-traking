const { findConfigByUserId } = require('./findConfigByUserId');
const { editConfig } = require('./editConfig');
const { createNewConfig } = require('./createNewConfig');
const { findSelectedMessage } = require('./findSelectedMessage');

module.exports = {
    findConfigByUserId,
    editConfig,
    createNewConfig,
    findSelectedMessage
}