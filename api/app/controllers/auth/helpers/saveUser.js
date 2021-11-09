const { createItem } = require("../../../middlewares/db");
const User = require("../../../models/User");

const saveUser = async (user) => {
    const savedUser = await createItem(user, User);
    return savedUser;
};

module.exports = {
    saveUser
}