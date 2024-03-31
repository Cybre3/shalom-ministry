import React from 'react'
import Joi from 'joi-browser';
import Form from './common/form';
import { connect } from 'react-redux';

import { addEmail, loadEmails, removeEmail, sendEmailBlast } from '../store/emails';

import withRouter from '../utilities/withRouter';



class Emailsend extends Form {
    state = {
        data: {
            email: '',
            date: new Date().toISOString().substring(0, 10),
            message: '',
            subMessage: '',
            subject: '',
            firstname: ''
        },
        emailList: [],
        errors: {},
        bool: false,
    };

    async componentDidMount() {
        await this.props.loadEmails();
        this.setState({ emailList: await this.props.emails })
    }


    schema = {
        _id: Joi.string(),
        email: Joi.string().email().allow('').label('email'),
        date: Joi.string().required().label('Date'),
        message: Joi.string().required().label('Message'),
        subMessage: Joi.string().allow('').label('Sub Message'),
        subject: Joi.string().allow('').label('Subject'),
        firstname: Joi.string().allow('').label('Firstname'),
    };


    handleAddToEmailList = async emailInfo => {
        // this.state.emailList.push(email)
        // this.setState({ emailList: this.state.emailList })
        try {
            await this.props.addEmail(emailInfo)
            this.state.data.email = '';
            this.state.data.firstname = '';
            await this.props.loadEmails()
            this.setState({ emailList: await this.props.emails })
        } catch (error) {
            console.log(error)
        }
    }

    handleRemoveEmail = async emailID => {
        // this.state.emailList.push(email)
        // this.setState({ emailList: this.state.emailList })
        try {
            await this.props.removeEmail(emailID)
            await this.props.loadEmails()
            this.setState({ emailList: await this.props.emails })
        } catch (error) {
            console.log(error);
        }
    }

    doSubmit = async () => {
        const { emailList, data } = this.state;
        const { subject, date, message, subMessage } = data;
        this.state.data.message = '';
        this.state.data.subMessage = '';
        this.state.data.subject = '';
        this.props.sendEmailBlast({ subject, message, subMessage, date, emailList });
    }

    infoClasses = {
        inputContainer: 'flex flex-col space-y-2 w-full',
        inputClass: 'border border-black w-full'
    }

    subjectClasses = {
        inputContainer: 'flex justify-between space-x-4 w-full',
        inputClass: 'border border-black w-full'
    }

    dateClass = {
        inputContainer: 'flex absolute justify-between space-x-4 top-2 right-2',
        inputClass: 'border px-2'
    }

    textareaClasses = {
        inputContainer: 'w-full text-left my-4 h-fit',
        inputClass: 'w-full h-3/4 py-1 px-2 mt-2 border border-black',
    };


    render() {
        const { firstname, email } = this.state.data;
        return (
            <div className='w-screen h-fit flex mb-32'>

                <div className='mx-auto w-1/2 h-fit border border-black border-2 rounded shadow shadow-blue-800 shadow-lg p-10 pt-16 mt-32 block relative'>

                    <div className='flex space-x-2 mb-4'>
                        {this.renderInput('firstname', 'First Name', '', '', this.infoClasses)}
                        {this.renderInput('email', 'Email', 'email', '', this.infoClasses)}
                        <button className='bg-gray-300 h-fit border border-black py-0.5 px-4 cursor-default self-end' onClick={() => this.handleAddToEmailList({ firstname, email })}>
                            Add
                        </button>
                    </div>

                    <form onSubmit={this.handleSubmit} className='flex flex-col space-y-4 text-center'>

                        {this.renderInput('date', 'Date', 'date', '', this.dateClass)}

                        <div className=''>
                            <h2>Email List</h2>
                            <div className='flex flex-col border border-black w-full mx-auto h-[200px] overflow-y-scroll p-2 space-y-2'>
                                {
                                    this.props.emails.map(
                                        item =>
                                            <div key={item._id} className='flex border w-full p-1 rounded rounded-sm justify-between'>
                                                <p className='ml-4'>{item.firstname}</p>
                                                <p className='ml-10'>{item.email}</p>
                                                <button onClick={() => this.handleRemoveEmail(item._id)} className="cursor-pointer text-red-500 mr-4">[remove]</button>
                                            </div>
                                    )
                                }
                            </div>
                        </div>

                        {/* <div className=''>
                            <h2>Common Emails</h2>
                            <div className='border w-full mx-auto h-32'>example@this.com</div>
                        </div> */}
                        {this.renderInput('subject', 'Subject:', '', '', this.subjectClasses)}


                        {this.renderTextarea('message', 'Message:', '', this.textareaClasses)}
                        {this.renderTextarea('subMessage', 'Sub Message', '', this.textareaClasses)}



                        {this.renderButton(
                            'Send',
                            this.state.bool,
                            'send-btn w-1/2 self-center h-fit block',
                            'disabled:text-gray-500 w-full rounded-full py-2 disabled:bg-zinc-400 space-x-1 cursor-pointer disabled:cursor-default bg-blue-600 text-white border border-black text-black mt-4'
                        )}
                    </form>
                </div >
            </div >
        )
    }
}

const mapStateToProps = state => ({
    emails: state.entities.emails.list
});

const mapDispatchToProps = dispatch => ({
    addEmail: email => dispatch(addEmail(email)),
    removeEmail: emailID => dispatch(removeEmail(emailID)),
    sendEmailBlast: emailInfo => dispatch(sendEmailBlast(emailInfo)),
    loadEmails: () => dispatch(loadEmails())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Emailsend));