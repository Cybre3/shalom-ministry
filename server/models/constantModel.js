const mongoose = require('mongoose');
const Joi = require('joi');

const constantSchema = new mongoose.Schema({
  type: String,
  amount: Number,
});

constantSchema.statics.upCountByOne = function (constantName) {
  return this.updateOne(
    { type: constantName },
    {
      $inc: { amount: 1 },
    }
  );
};

const Constant = mongoose.model('Constant', constantSchema);

function validateConstant(input) {
  const schema = Joi.object({
    type: Joi.string().required(),
    amount: Joi.number().required(),
  });

  return schema.validate(input);
}

exports.Constant = Constant;
exports.constantSchema = constantSchema;
exports.validate = validateConstant;
