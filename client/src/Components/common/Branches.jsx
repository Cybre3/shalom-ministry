import React from 'react'


const branches = [
    { id: 1, title: 'Ghana Community Outreach', items: ['Breman Elementary School', 'Breman Parish Fund'] },
    { id: 2, title: 'Conference With A Twist', items: [`A retreat style conference for spiritual transformation and healing among a community of believers of all seasons of life, also know as CWAT`] },
    { id: 3, title: 'Community Experiences', items: ['Local fundraising events and activities, that support our annual CWAT that are focused on  commmunity-building and fellowship'] },
    { id: 4, title: 'Financial Aid Services', items: ['Offering monetary supplement to those experiencing financial hardship'] },
    { id: 5, title: 'In Da Streetz', items: ['Providing meals, hygiene products, and prayers to our local South Florida homeless communities'] },
]


function Branches() {
    return (

        <div className='w-screen h-screen mt-20 mb-32'>
            <div className='h-full w-full flex flex-col items-center mx-auto bg-shalomCorner bg-right-bottom bg-[length:800px_450px] bg-no-repeat'>

                <h2 className='text-8xl mb-4'>MiNiSTRY BRANCHES</h2>

                <div className='p-10 grid grid-rows-2 grid-cols-2 gap-20 gap-x-0 text-black'>
                    {branches.map(branch => (
                        <div className='mx-auto w-full last-of-type:col-span-full last-of-type:w-1/2 last-of-type:pl-0 text-center odd:pl-48 even:pr-48'>
                            <h3 className='text-4xl mb-2'>{branch.title}</h3>
                            {branch.items.map(item => (
                                <p className='text-2xl w-3/4 mx-auto'>{item}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Branches;
