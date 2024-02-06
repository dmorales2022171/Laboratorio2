const {Schema, model} = require('mongoose');

const AnimalesSchema = Schema({
    nombre :{
        type: String,
        required: [true, 'nombre del animal obligatorio']
    },
    peso :{
        type: Number,
        required: [true, 'el peso del animal es necesario']
    },
    edad:{
        type: Number,
        required:[true, 'la edad es obigatoria']
    },
    altura:{
        type:Number,
        required:[true, 'la altura es obligatoria']
    },
    tipo:{
        type:String,
        required:[true, 'el tipo de animal es obligatorio']
    }
})