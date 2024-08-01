import React from 'react'


const branches = [
    { id: 1, title: 'Ghana Community Outreach', items: ['Breman Elementary School', 'Breman Parish Fund'] },
    { id: 2, title: 'Conference With A Twist', items: [<span>A retreat style conference for spiritual <br /> transformation and healing among a <br /> community of believers of all seasons of life, <br /> also know as CWAT</span>] },
    { id: 3, title: 'Community Experiences', items: [<span>Local fundraising events and activities, <br /> that support our annual CWAT that are <br /> focused on  commmunity-building and fellowship</span>] },
    { id: 4, title: 'Financial Aid Services', items: [<span>Offering monetary supplement to <br /> those experiencing financial hardship</span>] },
    { id: 5, title: 'In Da Streetz', items: [<span>Providing meals, hygiene products, and prayers <br /> to our local South Florida homeless communities</span>,] },
]


function Branches() {
    return (

        <div className='w-screen h-screen mt-20 mb-20'>
            <div className='h-full w-full flex flex-col items-center mx-auto bg-shalomCorner bg-right-bottom bg-[length:1200px_600px] bg-no-repeat'>

                <h2 className='text-9xl mb-4 bg-shalomCorner bg-center bg-[length:3000px_400px] bg-right bg-clip-text text-transparent  bg-no-repeat'>MiNiSTRY BRANCHES</h2>

                <div className='p-10 grid grid-rows-2 grid-cols-2 gap-16 gap-x-16'>
                    {branches.map(branch => (
                        <div className='mx-auto w-full last-of-type:col-span-full last-of-type:w-2/5 last-of-type:pl-0 text-center odd:pl-48 even:pr-48'>
                            <h3 className='text-6xl mb-2'>{branch.title}</h3>
                            {branch.items.map(item => (
                                <p className='text-4xl w-auto mx-auto'>{item}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Branches;
/* bg-clip-text text-transparent  */