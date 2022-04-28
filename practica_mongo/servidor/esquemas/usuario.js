const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String,
    correo: String,
    contrasenia: String,
    rol: String,
    imagen: String
})

const Usuario = mongoose.model('usuarios', usuarioSchema);

module.exports = Usuario;