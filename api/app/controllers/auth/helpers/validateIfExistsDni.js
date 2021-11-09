const { getItemByQuery } = require("../../../middlewares/db");
const User = require("../../../models/User");

const validateIfExistsDni = async (dni) => {
    const exist = await getItemByQuery({ dni }, User);
    return !!exist;
}

module.exports = {
    validateIfExistsDni
}