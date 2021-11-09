const createItem = async (data = {}, model = {}, populate = []) => {
	const savedItem = await model.create(data);
	if (populate && populate.length > 0) await savedItem.populate(populate).execPopulate();
	return savedItem.toObject();
};

module.exports = { createItem };
