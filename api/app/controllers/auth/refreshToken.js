const {
  getUserIdFromToken,
  generateToken,
} = require("./helpers"),
  { findUserById } = require("../users/helpers"),
  { isIDGood, structure, handleSuccess } = require("../../middlewares/utils");

const refreshToken = structure(async (req, res) => {
  const tokenEncrypted = req.headers.authorization
    .replace("Bearer ", "")
    .trim();
  let userId = getUserIdFromToken(tokenEncrypted);
  userId = isIDGood(userId);
  const user = await findUserById(userId);
  return handleSuccess({ res, data: { ...generateToken(userId), user } });
});

module.exports = { refreshToken };
