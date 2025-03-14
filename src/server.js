require('dotenv').config({path:'../.env'});
const express = require('express');
const connectDB = require('./db.js'); // Importar la conexión a la base de datos
const cors = require('cors');
const bookRouter = require('./routes/bookRoutes.js'); // Importamos el enrutador de libros
//const loadBooks = require('./json-uploader.js'); // Importamos la función para cargar los libros
const app = express();


app.use(express.json());

app.use(cors()) ;
app.use('/books', bookRouter)




//conectar servidor
const PORT = process.env.PORT || 3000;

connectDB()
.then(() => {
    console.log('MongoDB conectado');
    
    app.listen(PORT, () => {
        console.log(`Servidor actualizdo y corriendo TEST2 ${PORT}`);
    });
}).catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
});