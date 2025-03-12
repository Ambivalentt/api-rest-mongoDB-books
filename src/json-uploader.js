// src/jsonUploader.js
const fs = require('fs');
const path = require('path');  //usar para ver el path exacto menos errores al usar docker 
const Book = require('../models/bookSchema');

// Función para cargar los libros desde el archivo JSON a la base de datos
const jsonPath = path.join(__dirname, '../books_100.json');

const loadBooks = () => {
    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON:', err);
            return;
        }

        const books = JSON.parse(data);

        Book.insertMany(books)
            .then(() => {
                console.log('Libros insertados correctamente');
            })
            .catch((err) => {
                console.error('Error al insertar los libros:', err);
            });
    });
};

module.exports = loadBooks; // Exportamos la función
