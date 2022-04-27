const rutas = require('express').Router();
const Usuario =require('../esquemas/usuario');

rutas.get('/', function(req, res){
    Usuario.find({})
        .then((list) => {res.send(list); console.log(list)})
        .catch( (error) => {console.log(error)});
})

rutas.post('/', function(req, res){

})

rutas.put('/id', function(resq, res){

})

rutas.delete('/id',function(req, res){
    
})


module.exports = rutas