import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';

import withRouter from '../../utilities/withRouter';

function SecondaryActions(props) {
    const { user, action } = props;
    // const [hidden, setHidden] = useState(true);

    useEffect(() => {
        // const location = props.location
        // ccc m,onsole.log(action);
    }, []);

    const renderLinks = () => {
        switch (action) {
            case 'Messages':
                return ([
                    { id: 2, label: 'All Messages', link: 'my-messages' },
                ]);

            case 'Admin':
                return ([
                    { label: 'Users', link: 'users' },
                    { label: 'Invoices', link: 'invoices' },
                    { label: 'Messages', link: 'messages' },
                    { label: 'Registrations', link: 'registrars' },
                ]);

            case 'Forms':
                return ([
                    { label: 'Create Invoice', link: 'invoices/new' },
                    { label: 'Thank you Note', link: 'forms/thankyou/new' },
                    { label: 'Purchase', link: 'invoices/new' },
                ]);

            case 'Events':
                return ([
                    { id: 1, label: 'My Events', link: 'my-events' },
                    { id: 2, label: 'Browse Events', link: 'all-events' },
                ]);
                
                case 'Dashboard':
                    return ([
                    { id: 1, label: 'My Events', link: 'my-events' },
                    { id: 2, label: 'All Messages', link: 'my-messages' },
                ]);

            default:
                return '';
        }
    }

    const generateActionOptions = (user) => {
        return renderLinks().filter((option) => (user.isAdmin ? option : !option.requiresAdmin));
    }


    return (
        user() && (
            <div className="bg-gray-500 text-white text-lg flex flex-col pt-6 space-y-1 relative w-1/2">
                {
                    action && generateActionOptions(user()).map(action =>
                        <NavLink key={action.label} className="hover:bg-gray-600 py-2 pl-4" to={action.link} >
                            {action.label}
                        </NavLink>)
                }
            </div>
        )
    )
}


export default withRouter(SecondaryActions);
