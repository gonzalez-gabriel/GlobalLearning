const express = require('express');//es un framework que nos facilita funciones para ahorrarnos código (.use .listen,etc)
//facilita la vida para las peticiones http 
const mongoose = require('mongoose');//ORM  manejadore d la base de datos => conexiones y querys (consultas) usando .fin .updateOne etc
const Book = require('./models/bookModel');
const User = require('./models/userModel');
const bodyParser = require('body-parser');//el body es el cuerpo del msj, el contenido, 
//parser lo convierte a formato de json (conveccion para escribir un objeto) para poder usarlo

const bookRouter = require('./routes/bookRouter')(Book);
const userRouter = require('./routes/userRouter')(User);
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/bookAPI');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', bookRouter);
app.use('/api', userRouter);
app.listen(8080);

