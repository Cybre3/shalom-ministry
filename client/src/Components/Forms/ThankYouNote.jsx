import React from 'react';
import Form from '../common/form';

// import withRouter from '../../utilities/withRouter';

class ThankYouNote extends Form {
  state = {
    data: {
      date: new Date().toISOString().substring(0, 10),
    },
    errors: {},
  };

  inputClasses = {
    inputClass: 'border-black border rounded-md',
  };

  dateInputClass = {
    inputClass: 'text-center',
  };

  render() {
    return (
      <div className="mx-auto my-2 h-full w-1/2 rounded-md bg-white p-2">
        <img className="mx-auto w-24" src={require('../../assets/other/SM-Logo-w-Title.png')} alt="" />
        <div className="relative h-3/4 p-4 px-10">
          <span className="text-right">
            {this.renderInput('date', '', 'date', true, this.dateInputClass)}
          </span>
          <span className="flex my-8">
            Dear{' '}
            <span className="ml-1 flex">
              {this.renderInput('recipient', '', 'text', false, this.inputClasses)}{' '}
              <span className="ml-1">,</span>
            </span>
          </span>
          <p className="my-6 indent-4">Thank you for choosing Shalom Ministry!</p>
          <div className="absolute bottom-0 left-10 flex flex-col">
            Sincerely,
            <span>CEO & VP signatures</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ThankYouNote;
