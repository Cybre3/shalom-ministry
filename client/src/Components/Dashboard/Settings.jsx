import React from 'react';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

import Form from '../common/form';
import { getUserById } from '../../services/authService';
import { updateUser } from '../../services/userService';
import withRouter from './../../utilities/withRouter';
import convertToBase64 from '../../utilities/helpers/convertPhotoFile';

import profileFiller from '../../assets/Dashboard/profileFill.png';

class Settings extends Form {
  state = {
    data: {
      selectedFile: '',
      photoUrl: '',
      fileData: {},
    },
    userInfo: {},
    errors: {},
    picURL: '',
  };

  schema = {
    selectedFile: Joi.string().label('File'),
    photoUrl: Joi.string().label('Photo URL'),
    fileData: Joi.object().label('Image Data'),
  };

  async componentDidMount() {
    const { data: user } = await getUserById(this.props.params.id);
    this.setState({ userInfo: await user })
  }

  doSubmit = async (e) => {
    const { _id: userId } = this.state.userInfo;
    try {
      await updateUser(userId, { photoUrl: convertToBase64(this.state.data.photoUrl) })
    } catch (error) {
      toast.error('Update Failed!')
      console.log(error);
    }
  };

  fileInputClasses = {
    inputContainer: '',
    inputClass: '',
  };

  render() {
    // console.log(this.state.userInfo)
    const { email, firstname, lastname, userNumber, dateRegistered, lastSignedIn } = this.state.userInfo.basicInfo ? this.state.userInfo.basicInfo : '';
    return (
      <div className="p-4">
        <div className="mx-auto flex w-full flex-col items-center justify-center">
          <img
            className="w-32 rounded-full"
            src={this.state.data.photoUrl || profileFiller}
            alt=""
          />
          <h2 className="text-center">Profile Picture</h2>
          <form
            onSubmit={this.handleSubmit}
            className="mx-auto flex w-1/2 flex-col space-y-2 bg-red-500"
          >
            <div className="mx-auto text-center">
              {this.renderInput('selectedFile', '', 'file', false, this.fileInputClasses)}
              {this.renderButton(
                'Upload',
                null,
                '',
                'cursor-pointer bg-gray-400 px-3 py-0.5 rounded-sm'
              )}
            </div>
          </form>

          <div className="grid w-full grid-cols-2 grid-rows-2 gap-8 gap-x-12 border border-black">
            <div>
              <h2 className="text-lg font-bold">Account Info</h2>
              <h3>Account# {userNumber}</h3>
              <h3>Member Since: {dateRegistered}</h3>
              <h3>Last Signed In: {lastSignedIn}</h3>
              <h3>Username: {email}</h3>
            </div>
            <div>
              <h2 className="text-lg font-bold">Personal Info</h2>
              <h3>
                Name: {firstname} {lastname}
              </h3>
              <h3>Email: {email}</h3>
              <h3>Phone</h3>
            </div>
            <div>
              <h2 className="text-lg font-bold">Security</h2>
              <h3>Username: {email}</h3>
              <h3>Password <NavLink to='/recovery' className='bg-gray-400 px-2 py-1 rounded'>Reset Password</NavLink></h3>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(Settings);
