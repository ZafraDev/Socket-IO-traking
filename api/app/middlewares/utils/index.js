const { errorMiddlewarer } = require("./errorMiddleware"),
  { handleError } = require("./handleError"),
  { handleSuccess } = require("./handleSuccess"),
  { structure } = require("./structure"),
  { removeExtensionFromFile } = require("./removeExtensionFromFile"),
  { isIDGood } = require("./isIDGood"),
  { validateResult } = require("./validateResult"),
  { parseUndefined } = require("./parseUndefined"),
  { cleanQuery } = require("./cleanQuery");


module.exports = {
  errorMiddlewarer,
  handleError,
  structure,
  isIDGood,
  removeExtensionFromFile,
  validateResult,
  cleanQuery,
  handleSuccess,
  parseUndefined
};
