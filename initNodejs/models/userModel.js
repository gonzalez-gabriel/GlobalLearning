const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const {Schema} = mongoose;


const userModel = new Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        userName: { type: String },
        password: { type: String, select: false},
        email: { type: String, unique: true, lowercase: true},
        address: { type: String },
        phone: { type: Number }
        // signupDate: {type: Date, default: Date.now()}
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