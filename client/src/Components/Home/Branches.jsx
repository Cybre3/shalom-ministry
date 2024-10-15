import React from 'react';

const branches = [
  {
    id: 1,
    title: 'Ghana Community Outreach',
    items: ['Breman Elementary School', 'Breman Parish Fund'],
  },
  {
    id: 2,
    title: 'Conference With A Twist',
    items: [
      <span>
        A retreat style conference for spiritual <br /> transformation and healing among a <br />{' '}
        community of believers of all seasons of life, <br /> also know as CWAT
      </span>,
    ],
  },
  {
    id: 3,
    title: 'Community Experiences',
    items: [
      <span>
        Local fundraising events and activities, <br /> that support our annual CWAT that are <br />{' '}
        focused on commmunity-building and fellowship
      </span>,
    ],
  },
  {
    id: 4,
    title: 'Financial Aid Services',
    items: [
      <span>
        Offering monetary supplement to <br /> those experiencing financial hardship
      </span>,
    ],
  },
  {
    id: 5,
    title: 'In Da Streetz',
    items: [
      <span>
        Providing meals, hygiene products, and prayers <br /> to our local South Florida homeless
        communities
      </span>,
    ],
  },
];

function Branches() {
  const { innerWidth: width } = window;

  return (
    <div className="mb-20 w-screen lg:mt-20 lg:h-screen shadow-lg">
      <div className="mx-auto flex w-full flex-col items-center bg-shalomCorner bg-[length:800px_450px] bg-right-bottom bg-no-repeat lg:h-full">
        <h2 className="mb-10 bg-shalomCorner  bg-[length:2000px_400px] bg-clip-text bg-center bg-right bg-no-repeat text-center text-6xl text-transparent lg:mb-4 lg:text-right lg:text-8xl">
          MINISTRY BRANCHES
        </h2>

        <div className="space-y-10 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-8 lg:gap-x-20 lg:p-10">
          {width > 1024
            ? branches.map((branch) => (
                <div className="mx-auto w-full text-center odd:pl-48 even:pr-48 last-of-type:col-span-full last-of-type:w-2/5 last-of-type:pl-0">
                  <h3 className="mb-2 text-4xl">{branch.title}</h3>
                  {branch.items.map((item) => (
                    <p className="mx-auto w-auto text-2xl">{item}</p>
                  ))}
                </div>
              ))
            : branches.map((branch) => (
                <div className="mx-auto w-full text-center odd:pl-20 even:pr-20">
                  <h3 className="mb-2 text-2xl lg:text-4xl">{branch.title}</h3>
                  {branch.items.map((item) => (
                    <p className="text-lg">{item}</p>
                  ))}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Branches;
/* bg-clip-text text-transparent  */
