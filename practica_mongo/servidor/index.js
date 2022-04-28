require('./config/conexion');

const Usuario = require("./esquemas/usuario");

const express = require('express');

const port = (process.env.port || 3000)

const app = express();

app.use(express.json());

/*const user = new Usuario(
    { 
        nombre: 'Maria',
        correo: 'Maria@gmail.com',
        contrasenia: '555',
        rol: 'secre',
        imagen: 'prueba'
    }
);
user.save();*/

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.set('port', port)

app.use('/usuario', require('./rutas/usuario'))


app.listen(app.get('port'),(error)=>{
    if(error)
    {
        console.log('Error en la conexion'+error)
    }else{
        console.log('Servidor iniciado en el puerto: '+port)
    }
})