import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Popover } from '@headlessui/react';

import { getCurrentUser } from '../../services/authService';
import withRouter from '../../utilities/withRouter';

import ActionSection from './ActionSection';
import DashNav from './DashNav';
import Form from '../common/form';


import './dashboard.css';

class Dashboard extends Form {
  state = {
    user: {},
    url: ''
  };

  async componentDidMount() {
    // const { data: user } = await getUserById(this.props.params.id);
    // let photoUrl = user.profilePictureUrl;
    // const newString = photoUrl && photoUrl.replace('blob:', '');
    // this.setState({ user, url: newString });
  }

  render() {
    return (
      <div className="overflow-hidden w-screen h-screen">
        <DashNav user={getCurrentUser} />
        <div className='flex h-full'>

          <ActionSection user={getCurrentUser} />

          <div className="w-[75%]">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
