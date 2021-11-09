const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

let userSchema = new Schema(
	{
		email: {
			type: String,
			lowercase: true,
			required: [true, 'El correo es requerido'],
		},
		password: {
			type: String,
			required: [true, 'La contraseña es requerida'],
			select: false,
		},
		dni: {
			type: String,
		},
		fullName: {
			type: String,
			uppercase: true,
			required: [true, 'El nombre completo es requerido'],
		},
		phone: {
			type: String,
		},
		isBlocked: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const hash = function (user, salt, next) {
	bcrypt.hash(user.password, salt, (error, newHash) => {
		if (error) {
			return next(error);
		}
		user.password = newHash;
		return next();
	});
};

const genSalt = function (user, SALT_FACTOR, next) {
	bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
		if (err) {
			return next(err);
		}
		return hash(user, salt, next);
	});
};

userSchema.pre('save', function (next) {
	const that = this;
	const SALT_FACTOR = 5;
	if (!that.isModified('password')) {
		return next();
	}
	return genSalt(that, SALT_FACTOR, next);
});

userSchema.statics.comparePassword = async (password, recivedPasword) => {
	return await bcrypt.compare(password, recivedPasword);
};

module.exports = model('User', userSchema);
