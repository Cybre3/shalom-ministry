import React, { Component } from 'react';
import Joi from 'joi-browser';

import Input from './input';
import CustomInput from './customInput';
import Dropdown from './dropdown';
import Textarea from './textarea';
import CheckBox from './checkBox';

import load1 from '../../assets/load2.gif';

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

    if (!Promise.reject) e.target.reset();
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

  renderButton = (label, state, className) => {
    return (
      <div className={className}>
        <button disabled={this.validate()} className="btn btn-primary">
          {label}
          <i className="fa fa-paper-plane" />
          {state ? (
            <b className="load">
              <img src={load1} alt="img not responding" />
            </b>
          ) : (
            ''
          )}
        </button>
      </div>
    );
  };

  renderInput = (name, label, type = 'text', value, disabled = false) => {
    const { errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={value}
        disabled={disabled}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  };

  renderCustomInput = (name, label, type = 'text', value, disabled = false) => {
    const { errors } = this.state;

    return (
      <CustomInput
        type={type}
        name={name}
        label={label}
        value={value}
        disabled={disabled}
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

  renderDropdown = (name, label, options) => {
    const { data, errors } = this.state;

    return (
      <Dropdown
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderCheckbox = (name, label, options) => {
    const { data, errors } = this.state;

    return (
      <CheckBox
        name={name}
        label={label}
        value={data[name]}
        options={options}
        onChange={this.onChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
