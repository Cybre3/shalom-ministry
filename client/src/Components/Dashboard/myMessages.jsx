import React from 'react';
import Form from '../common/form'
import NewMessageBox from './NewMessageBox';

class MyMessages extends Form {
    state = {
        visible: false,
    }

    handleClick = () => this.setState({ visible: true });
    handleCloseWindow = () => this.setState({ visible: false });

    render() {
        return (
            <div className='relative w-full h-full'>
                <button className='bg-blue-500 rounded-md text-white px-3 py-1 ml-4 mt-2' onClick={this.handleClick}>Compose New Message</button>
                <NewMessageBox isVisible={this.state.visible} closeWindow={this.handleCloseWindow} />
            </div>
        )
    }
}

export default MyMessages