// Modelo de Producto
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fecha: Date,

})

const turnos = mongoose.model('Turnos', userSchema);

export default turnos