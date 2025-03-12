require('dotenv').config();
const mongoose = require('mongoose');

// Función para conectar a la base de datos
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 45000,
        });
        console.log('MongoDB conectado');
    } catch (err) {
        console.error('Error al conectar a MongoDB:', err);
        process.exit(1); // Salir con código de error si la conexión falla
    }
};

module.exports = connectDB;
