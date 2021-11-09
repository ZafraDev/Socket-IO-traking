const getItems = async (model = {}, populate = []) => {
    const items = await model.find().lean().populate(populate);
    return items;
  };
  
  module.exports = { getItems };
  