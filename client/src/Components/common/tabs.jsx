import { Fragment, useState } from 'react';
import { Tab } from '@headlessui/react';
import spaNsip from '../../assets/Home/spa&sip_Instagram.png';
import internationalLunch from '../../assets/Home/SM_international luncheon _ Instagram.png';
import reachStreetz from '../../assets/Home/inDaStreetzLogo_Instagram.png';

export default function Example() {
  let [categories] = useState({
    'Previous Events': [
      {
        id: 1,
        title: 'International Luncheon',
        date: 'Feb. 4th, 2023',
        image: internationalLunch,
      },
      {
        id: 2,
        title: 'Spring Spa & Sip',
        date: 'March 18th, 2023',
        image: spaNsip,
        bgPhotoName: 'spaNsip',
      },
    ],
    'Get Involved': [
      {
        id: 1,
        title: 'Reach-in DaStreetz',
        date: 'Every 3rd Saturday',
        image: reachStreetz,
      },
     
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
    <div className="w-full max-w-md mx-auto px-2 my-24 xl:p-4 xl:my-24 xl:rounded-md sm:px-0 xl:shadow-lg xl:shadow-blue-900/50 xl:hidden">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/50 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected ? 'bg-white shadow' : 'text-white hover:bg-white/[0.12] hover:text-white'
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
                      className={`${
                        info.image ? 'absolute' : ''
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
