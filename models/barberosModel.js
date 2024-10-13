// Modelo de Producto
import mongoose from "mongoose";

const barberosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Es obligatorio el nombre'],
        minlength: [5, 'El nombre de contener 5 caracteres como minimo'],
        maxlength: 64
    },
    especialidad: String,
    
})

const barber = mongoose.model('Barber', barberosSchema);

export default barber