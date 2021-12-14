const mongoose = require('mongoose');
// const bcrypt = require('bcrypt-nodejs');

const {Schema} = mongoose;


const userModel = new Schema(
    {
        firstName: { type: String, required:true },
        lastName: { type: String, required:true },
        userName: { type: String, required:true },
        password: { type: String, select: false, required:true},
        email: { type: String, unique: true, lowercase: true, required:true},
        address: { type: String, required:true },
        phone: { type: Number, required:true },
        signupDate: {type: Date, default: Date.now()}
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