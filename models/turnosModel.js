// Modelo de Producto
import mongoose from "mongoose";

const turnosSchema = new mongoose.Schema({
    fecha: { type: Date, default: Date.now },

})

const turnos = mongoose.model('Turnos', turnosSchema);

export default turnos