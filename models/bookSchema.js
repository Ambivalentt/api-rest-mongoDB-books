const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    year: Number,
    imageUrl: String
},{collection: 'books'});

// Crear el modelo basado en el esquema
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;