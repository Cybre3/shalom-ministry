import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SecondaryActions from './SecondaryActions';

function ActionSection(props) {
    const { user } = props;
    const [currentAction, setCurrentAction] = useState();

    useEffect(() => {

    })

    const generateActionOptions = (user) => {
        const links = [
            { label: 'Dashboard', link: 'home' },
            { label: 'Events', link: 'events' },
            { label: 'Forms', link: 'invoices/new', requiresAdmin: true },
            { label: 'Admin', link: 'home', requiresAdmin: true },
            { label: 'Messages', link: 'my-messages' },
        ]

        return links.filter((option) => (user.isAdmin ? option : !option.requiresAdmin));
    }


    return (
        <div className="w-[25%] flex">
            <div className='bg-blue-900 text-white text-xl pt-6 space-y-1 relative w-1/2 flex flex-col'>
                {
                    generateActionOptions(user()).map(action => (
                        <NavLink key={action.label} className="hover:bg-gray-600 py-2 pl-4" to={action.link} onClick={() => setCurrentAction(action.label)}>
                            {action.label}
                        </NavLink>
                    ))
                }
                <p className='absolute bottom-16 left-4'>{user().userEmail}</p>
            </div>

            <SecondaryActions user={user} action={currentAction} />

        </div >
    )
}

export default ActionSection
