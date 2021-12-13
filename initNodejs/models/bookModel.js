const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookModel = new Schema(
    {
        title: { type: String},
        author: { type: String},
        genre: { type: String},
        read: { type: Boolean}
    }
)



module.exports = mongoose.model('Book', bookModel);


//Lo más importante
//Es un json  
//Es el modelo de nuetra base de datos
//La estructura de nuestros documentos dentro de nuestra colección

//Tarea hacer lo mismo que hicimos en la clase, crear un módulo userRouter userModel
