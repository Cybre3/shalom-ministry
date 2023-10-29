import React from 'react'
import Form from './common/form';
import Joi from 'joi';

class ResetPassword extends Form {
    state = {
        data: {
            newPassword: '',
            newPasswordRepeat: ''
        },
        errors: {},
        bool: false
    }

    schema = {
        _id: Joi.string(),
        newPassword: Joi.string().required().label('New Password'),
        newPasswordRepeat: Joi.any()
            .valid(Joi.ref('newPassword'))
            .required()
            .label('Confirm password')
            .options({ language: { any: { allowOnly: 'Passwords do not match!' } } }),
    }

    inputClasses = {
        inputContainer: 'flex flex-col space-y-1.5',
        inputClass: 'outline outline-black outline-1 rounded-md py-2 px-4',
        labelClass: 'font-bold'
    };

    doSubmit = async () => {
       try {
         await createResetSession(); 
         await resetPassword();
       } catch (error) {
        
       }
    }

    render() {
        return (
            <div className='h-screen w-screen flex justify-center'>
                <div className='pt-40 w-1/4'>
                    <div className='h-fit px-10 space-y-6'>
                        <h2 className='text-center font-bold text-4xl'>RESET PASSWORD</h2>
                        <p className='text-center text-lg'>Please enter your new password.</p>

                        <form className='space-y-3' onSubmit={this.handleSubmit}>
                            {this.renderInput('newPassword', "New Password:", 'password', false, this.inputClasses)}
                            {this.renderInput('newPasswordRepeat', "Re-type password:", 'password', false, this.inputClasses)}
                            {this.renderButton('Reset Password', this.state.bool, 'mx-auto bg-gray-400 text-center rounded-md py-0.5 w-1/2 outline outline-1 outline-black', 'cursor-pointer w-full font-bold')}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResetPassword