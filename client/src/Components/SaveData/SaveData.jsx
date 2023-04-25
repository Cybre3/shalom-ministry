import React from 'react';
import Form from '../common/form';
import Joi from 'joi-browser';
import DataField from '../common/dataField';

class SaveData extends Form {
  state = {
    data: {
      numberOfFields: 1,
      collectionName: '',
    },
    errors: {},
  };

  schema = {
    collectionName: Joi.string().required().label('Collection Name'),
  };

  inputTypeOptions = [
    { key: 'text', name: 'text', value: 'Text' },
    { key: 'number', name: 'number', value: 'Number' },
    { key: 'group', name: 'group', value: 'Group' },
    { key: 'boolean', name: 'boolean', value: 'Yes/No' },
  ];

  handleAddField = (fields) => {
    this.setState({ data: { numberOfFields: this.state.data.numberOfFields + 1 } });
  };

  handleRemoveField = (e) => {
    e.target.parentElement.remove()
  };

  render() {
    const fields = [];
    const { numberOfFields } = this.state.data;

    for (let i = 1; i <= numberOfFields; i++)
      fields.push(<DataField options={this.inputTypeOptions} onRemove={this.handleRemoveField} key={i} id={i} />);

    return (
      <div>
        {this.renderInput('collectionName', 'Collection Name')}
        <button onClick={() => this.handleAddField(fields)}>Add Field</button>
        {fields}
      </div>
    );
  }
}

export default SaveData;
