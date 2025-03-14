const Book = require('../../models/bookSchema.js');
const express = require('express');

// Controlador para obtener los libros desde la base de datos
const dbBooks = async (req, res) => {
    try {
        // Obtener todos los libros de la base de datos
        const books = await Book.find();

        // Mostrar los libros en la consola
        console.log('Libros encontrados:', books);

        // Enviar los libros como respuesta en formato JSON
        res.json(books); 
    } catch (error) {
        // En caso de error, enviar una respuesta de error
        res.status(500).json({ message: error.message });
    }
}

module.exports = dbBooks;
