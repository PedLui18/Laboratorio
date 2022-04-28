const rutas = require('express').Router();
const Usuario = require('../esquemas/usuario');

const mongoose = require("mongoose");

rutas.get('/', function(req, res){
    Usuario.find({})
        .then((list) => {res.send(list); console.log(list)})
        .catch( (error) => {console.log(error)});
})

rutas.post('/', (req, res) => {

    const usuario = new Usuario({
        _id: new mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        correo: req.body.correo,
        constrasenia: req.body.constrasenia,
        rol: req.body.rol,
        imagen: req.body.imagen
    });

    //console.log(usuario);
    //console.log(req.body);
    
    usuario.save()
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: "Registro exitoso",
            createdUser: result
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });

});

/*rutas.put('/:id', function(resq, res){

})

rutas.delete('/id',function(req, res){
    
})*/


module.exports = rutas