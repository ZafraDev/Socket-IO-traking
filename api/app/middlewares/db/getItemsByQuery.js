const getItemsByQuery = async (
    query = {}, 
    model = {}, 
    populate = [],
    sort = {}
 ) => {
   const item = await model.find(query).sort(sort).lean().populate(populate)
   return item
}

module.exports = { getItemsByQuery }
