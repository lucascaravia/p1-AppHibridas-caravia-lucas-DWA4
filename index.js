import express from "express";
import mongoose from "mongoose";
import { routerAPI }  from "./routes/index.js";
const app = express();
const port = 3000;

mongoose.connect( 'mongodb://127.0.0.1:27017/Project0', { useNewUrlParser: true, useUnifiedTopology: true}  )

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
console.log('Conexión exitosa a MongoDB');
});

app.use( express.json() );

app.get('/', (req, res) => {
    res.status(200).send('<h1> CRUD de Productos </h1>');
})


routerAPI(app);


app.listen( 3000, () =>{
    console.log('Servidor escuchando en el puerto ' + port);
})



// Utilidad para verificar el token
function validarToken(  req, res, next ){
    // El token viaja en el header
    let token = req.headers.authorization;
    // Chequeo si se paso el token
    if( !token){
        return res.status(401).json({ msg: 'No se paso el token'})
    }
     // Solo en In
token = token.split(' ')[1];

    jwt.verify(token, clave, (error, decoded) => {
        if( error) {
            return res.status(403).json({ msg: 'Token invalido'})
        }
        // Retorno el id del usuario
        req.userId = decoded.userId;
        next();
    })
}
