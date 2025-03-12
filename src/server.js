require('dotenv').config();
const express = require('express');
const connectDB = require('./db.js'); // Importar la conexión a la base de datos
const path = require('path');
//const loadBooks = require('./json-uploader.js'); // Importamos la función para cargar los libros


const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
})


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