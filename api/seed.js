const User = require('./app/models/User'),
	usersData = require('./data/users');

const seedDB = async () => {
	const usersCount = await User.countDocuments();
	if (usersCount == 0) {
		const usersPromises = usersData.map(async (user) => {
			return new User(user).save();
		});

		const promises = await Promise.all(usersPromises);
		console.log(promises);
	}
};

module.exports = { seedDB };
