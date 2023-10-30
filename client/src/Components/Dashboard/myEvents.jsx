import { Fragment, useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
// import { getCurrentUser } from '../../services/authService';
import { getUserEvents } from '../../services/registrarService';
// import _ from 'lodash';

function MyEvents(props) {

    /* 
        const eventObj = {};
        const allEvents = await getAllEvents();
        allEvents.map(event => eventObj[title] = {..._.omit(event, 'title'});
    */

    useEffect(() => {
        const userEvents = async () => {
            // const user = getCurrentUser();
            const { data: userEvents } = await getUserEvents('cherishe1999@yahoo.com');
            const userEventNames = userEvents.map(regEvents => regEvents.category)
            console.log(userEventNames);
        }
        userEvents();
    }, [])

    let [categories] = useState({
        'Upcomming Events':
            // user.events
            [
                {
                    id: 1,
                    title: 'Conference With a Twist',
                    date: 'Oct. 19th - 21st',
                    // image: internationalLunch,
                },

            ],
        'Previous Events': [
            // user.events

        ],
        /* Testimonies: [
          {
            id: 1,
            title: 'Ask Me Anything: 10 answers to your questions about coffee',
            date: '2d ago',
            commentCount: 9,
            shareCount: 5,
          },
          {
            id: 2,
            title: "The worst advice we've ever heard about coffee",
            date: '4d ago',
            commentCount: 1,
            shareCount: 2,
          },
        ], */
    });


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <div className="w-1/2 px-2 my-20 xl:p-4">
            <Tab.Group>
                <h2 className='text-3xl'>My Events</h2>
                <Tab.List className="flex space-x-1 rounded-md bg-black p-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-md py-2 text-sm font-medium leading-5 text-black',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-black focus:outline-none focus:ring-2',
                                    selected ? 'bg-white shadow text-black' : 'text-white hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="flex m-3 bg-half-black rounded-md p-1 py-2 xl:outline-8 xl:outline-double xl:outline-gray-500">
                    {Object.values(categories).map((category, idx) => (
                        <Tab.Panel key={idx} className={'w-full'}>
                            <ul className="space-y-3">
                                {category.map((info) => (
                                    <li
                                        key={info.id}
                                        className={`relative rounded-md ${!info.image ? 'bg-white' : ''}`}
                                    >
                                        <div
                                            className={`${info.image ? 'absolute' : ''
                                                } top-1 right-2 bg-clear-white w-fit p-1 rounded-md`}
                                        >
                                            {!info.image && (
                                                <Fragment>
                                                    <h3 className="text-sm font-medium leading-5">{info.title}</h3>
                                                    <ul className="mt-1 flex space-x-1 text-md font-bold leading-4 text-gray-900">
                                                        <li>{info.data}</li>
                                                    </ul>
                                                </Fragment>
                                            )}
                                            <ul className="mt-1 flex space-x-1 text-md font-bold leading-4 text-gray-900">
                                                <li>{info.date}</li>
                                            </ul>
                                        </div>
                                        {info.image && (
                                            <img src={info.image} alt="" className="w-full h-48 rounded-md" />
                                        )}
                                        {/* eslint-disable-next-line */}
                                        <a href="/" className={'absolute inset-0 rounded-md'} />
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );

}

export default MyEvents
