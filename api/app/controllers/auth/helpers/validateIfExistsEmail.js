const { getItemByQuery } = require("../../../middlewares/db");
const User = require("../../../models/User");

const validateIfExistsEmail = async (email) => {
    const exist = await getItemByQuery({ email }, User);
    return !!exist;
}

module.exports = {
    validateIfExistsEmail
}