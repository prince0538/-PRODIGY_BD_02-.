const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
}, { timestamps: true })

const userModel = mongoose.model('users', userSchema)

module.exports = userModel