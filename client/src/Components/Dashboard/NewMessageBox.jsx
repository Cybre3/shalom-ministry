import React from 'react'
import Joi from 'joi';

import Form from '../common/form'

class NewMessageBox extends Form {
    state = {
        data: {
            to: '',
            subject: '',
            body: ''
        },
        errors: {}
    }

    schema = {
        _id: Joi.string(),
        to: Joi.string().required().label('To'),
        subject: Joi.string().required().label('Subject'),
        body: Joi.string().required().label('Body'),
    }

    inputClasses = {
        inputContainer: 'space-x-2 w-full flex border-b-2',
        inputClass: 'w-full focus:outline-0'
    }

    textareaClass = {
        inputContainer: 'w-full',
        inputClass: 'w-full p-1 focus:outline-0 resize-none',
        rows: 10
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={`border border-black w-1/3 rounded rounded-md bottom-24 right-4 ${this.props.isVisible ? 'absolute' : 'hidden'}`}>
                <h2 className='bg-blue-500 flex justify-between text-white pl-2 mb-2 text-lg'>
                    New Message
                    <button className='mr-2' onClick={this.props.closeWindow}>X</button>
                </h2>
                <div className='px-2 space-y-4'>
                    {this.renderInput('to', 'to:', 'text', false, this.inputClasses)}
                    {this.renderInput('subject', 'subject:', 'text', false, this.inputClasses)}
                    {this.renderTextarea('message', 'message', 'textarea', this.textareaClass)}
                </div>
                {this.renderButton('Send', false, 'bg-blue-500 text-white w-fit  rounded-md ml-2 my-2', 'w-full hover:cursor-pointer px-3 py-1')}
            </form>
        )
    }
}

export default NewMessageBox
