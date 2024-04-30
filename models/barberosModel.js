// Modelo de Producto
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    especialidad: String,
    
})

const barber = mongoose.model('Barber', userSchema);

export default barber