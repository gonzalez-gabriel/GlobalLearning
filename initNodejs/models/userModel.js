const mongoose = require('mongoose');
// const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;


const userModel = new Schema(
    {
        firstName: {
            type: String,
            required: [true, 'Es requerido el nombre']
        },
        lastName: {
            type: String,
            required: [true, 'Es requerido el apellido']
        },
        userName: {
            type: String,
            required: [true, 'Es requerido el nombre de usuario']
        },
        password: {
            type: String,
            select: false,
            required: [true, 'Es requerido el password']
        },
        email: { 
            type: String, 
            unique: true, 
            lowercase: true, 
            required: [true, 'Es requerido el email'], 
            match: [/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, "El formato correcto es alguien@algunlugar.com"] 
        },
        address: { 
            type: String, 
            required: [true, 'Es requerido la dirección'] 
        },
        phone: { 
            type: Number, 
            required: [true, 'Es requerido el número telefónico'] 
        },
        signupDate: { 
            type: Date, 
            default: Date.now() 
        }
    }
)

// userModel.pre('save', (next) => {
//     let user = this


//     bcrypt.genSalt(10, (err, salt) => {
//         if(err) return next(err)

//         bcrypt.hash(user.password, salt, null, (err, hash) => {
//             if(err) return next(err)

//             user.password = hash
//             next()
//         })
//     })
// })

module.exports = mongoose.model('User', userModel);