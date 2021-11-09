const {
  getUserIdFromToken,
} = require("./helpers");
const { findUserById } = require('../users/helpers')
const { isIDGood, structure, handleSuccess } = require("../../middlewares/utils");

const getProfile = structure(async (req, res) => {
  const tokenEncrypted = req.headers.authorization
    .replace("Bearer ", "")
    .trim();
  let userId = getUserIdFromToken(tokenEncrypted)
  userId = isIDGood(userId);
  const user = await findUserById(userId);
  return handleSuccess({ res, data: user })
});

module.exports = { getProfile };
