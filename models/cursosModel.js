// Modelo de cursoso
// Modelo de cursoso
import mongoose from "mongoose";

const cursosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Es obligatorio el nombre'],
        minlength: [5, 'El nombre de contener 5 caracteres como minimo'],
        maxlength: 64
    },
    price: Number,
    stock: Number,
    img: String
})


const Cursos = mongoose.model('Cursos', cursosSchema);
// Exporto el Objeto cursos

export default Cursos