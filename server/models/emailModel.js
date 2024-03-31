// const config = require('config');
const mongoose = require('mongoose');
const Joi = require('joi');
// const jwt = require('jsonwebtoken');

const emailSchema = mongoose.Schema({
    email: {
        type: String,
        minlength: 5,
        maxlength: 255,
        unique: true,
    },
    firstname: String
});

// userSchema.methods.generateAuthToken = function () {
//     const token = jwt.sign(
//         { _id: this._id, userEmail: this.basicInfo.email, isAdmin: this.admin.isAdmin, authorizedToDelete: this.admin.authorizedToDelete },
//         config.get('jwtPrivateKey') || process.env.jwtPrivateKey,
//         { expiresIn: '24h' },
//     );
//     return token;
// };

const Email = mongoose.model('Email', emailSchema);

function validateEmail(input) {
    const schema = Joi.object({
        email: Joi.string().email().min(5).max(255).required(),
        firstname: Joi.string().required() 
    });

    return schema.validate(input);
}

exports.Email = Email;
exports.validate = validateEmail;
