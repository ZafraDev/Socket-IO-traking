const { Schema, model } = require('mongoose');

let ConfigSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            require: [true, 'El usuario es requerido'],
            unique: true,
        },
        contacts: [
            {
                name: {
                    type: String,
                    require: [true, 'El nombre del contacto es requerido']
                },
                phone: {
                    type: String,
                    require: [true, 'El teléfono del contacto es requerido']
                }
            }
        ],
        messages: [
            {
                title: {
                    type: String,
                    require: [true, 'El título del mensaje es requerido']
                },
                content: {
                    type: String,
                    require: [true, 'El contenido del mensaje es requerido']
                }
            }
        ],
        mainMessage: {
            content: {
                type: String,
                require: [true, 'El contenido del mensaje es requerido']
            }
        }

    },
    {
        timestamps: true,
    }
);

module.exports = model('Config', ConfigSchema);
