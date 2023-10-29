const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const Joi = require('joi');

const eventSchema = new Schema({
    title: String,
    subTitle: String,
    dateStart: Date,
    dateEnd: Date,
    location: String
});

const Event = mongoose.model('Event', eventSchema);

function validateEvent(input) {
    const schema = Joi.object({
        title: Joi.string().required(),
        subTitle: Joi.string(),
        dateStart: Joi.date().required(),
        dateEnd: Joi.date().required(),
        location: Joi.string().required(),
    });

    return schema.validate(input);
}

exports.Event = Event;
exports.validate = validateEvent;