const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model('User', new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    name: {
        type: String,
        required: false,
    },
    surname: {
        type: String,
        required: false,
    },
    born_date: {
        type: Date,
        required: false,
    },



}));

const validateUser = (user_req) => {
    const schema = Joi.object({
        user_name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().min(5).required(),
        name: Joi.string(),
        surname: Joi.string(),
        born_date: Joi.date()
    });
    return schema.validate(user_req);
}


exports.User = User;
exports.validate = validateUser;