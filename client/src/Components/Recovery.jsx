import React from 'react';
import Form from './common/form'
import Joi from 'joi';
import { generateOTP, verifyOTP } from '../services/authService';

class Recovery extends Form {
    state = {
        data: {
            email: '',
            otp: ''
        },
        errors: {},
        bool: false
    }

    schema = {
        _id: Joi.string(),
        email: Joi.string().email().label('Email'),
        otp: Joi.string().allow("").label('One-time-password')
    }

    checkEmail = async email => {
        try {
           await generateOTP(email);
        } catch (error) {
            const errors = { ...this.state.errors };
            this.setState({ errors });
        }
    }

    doSubmit = async () => {
        const { email, otp } = this.state.data;
        try {
           await verifyOTP(email, otp);
           window.location = `/reset-password/${email}`;
        } catch (error) {
            const errors = { ...this.state.errors };
            this.setState({ errors });
        }
    }

    inputClasses = {
        inputContainer: 'flex flex-col space-y-1.5',
        inputClass: 'outline outline-black outline-1 rounded-md py-2 px-4',
        labelClass: 'font-bold'
    };

    render() {
        return (
            <div className='h-screen w-screen flex justify-center'>
                <div className='pt-40 w-1/4'>
                    <div className='h-fit px-10 space-y-6'>
                        <h2 className='text-center font-bold text-4xl'>ACCOUNT RECOVERY</h2>
                        <p className='text-center text-lg'>Please enter your email to have a one-time-passcode sent to your email.</p>

                        <form className='space-y-3' onSubmit={this.handleSubmit}>
                            {this.renderInput('email', "Email", 'email', false, this.inputClasses)}
                            <div className='w-full text-right'>
                                <button className='bg-gray-400 w-fit px-3 py-0.5 rounded-sm outline outline-1 outline-black' onClick={() => this.checkEmail(this.state.data.email)}>Send One-time-passcode</button>
                            </div>

                            {this.renderInput('otp', "Please enter One-time-password", 'text', false, this.inputClasses)}
                            {this.renderButton('Reset Password', this.state.bool, 'mx-auto bg-gray-400 text-center rounded-md py-0.5 w-1/2 outline outline-1 outline-black', 'cursor-pointer w-full font-bold')}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recovery;