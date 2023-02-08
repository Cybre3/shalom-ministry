import React, { Component } from 'react';
import Input from './input';
import CustomInput from './customInput';
import Textarea from './textarea';
import Joi from 'joi-browser';

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[name] = errorMessage;
    else delete errors[name];

    const data = { ...this.state.data };
    data[name] = value;
    this.setState({ data, errors });
  };

  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = 'text') => {
    const { errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        label={label}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  };

  renderCustomInput = (name, label, type = 'text') => {
    const { errors } = this.state;

    return (
      <CustomInput
        type={type}
        name={name}
        label={label}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  };

  renderTextarea = (name, label, type = 'text') => {
    const { errors } = this.state;

    return (
      <Textarea
        type={type}
        name={name}
        label={label}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  };
}

export default Form;