const { Schema, model } = require('mongoose');

let TrackSchema = new Schema(
	{
		seq: {
			type: Number,
			required: [true, 'La secuencia es obligatoria'],
		},
		user: {
			type: Schema.Types.ObjectId,
			required: [true, 'El usuario es requerido'],
            ref: "User"
		},
	},
	{
		timestamps: true,
	}
);

module.exports = model('TrackCounter', TrackSchema);
