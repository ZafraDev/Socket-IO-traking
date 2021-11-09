const { Schema, model } = require('mongoose');

let TrackSchema = new Schema(
	{
		lng: {
			type: Number,
			required: [true, 'La longitud es requerida'],
		},
		lat: {
			type: Number,
			required: [true, 'La latitud es requerida'],
		},
		user: {
			type: Schema.Types.ObjectId,
			required: [true, 'El usuario es requerido'],
			ref: "User"
		},
		seq: {
			type: Number,
			required: [true, 'La secuencia es requerida'],
		}
	},
	{
		timestamps: true,
	}
);

module.exports = model('Track', TrackSchema);
