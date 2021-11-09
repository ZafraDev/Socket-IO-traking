const getItemByQuery = async (
   query = {},
   model = {},
) => {
   const item = await model.findOne(query).lean()
   return item
}

module.exports = { getItemByQuery }
