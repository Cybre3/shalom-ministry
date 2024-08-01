import React from 'react';
import comfyCouch from '../../assets/Home/t3c-logo-L.png';
import HeavenlyMP from '../../assets/Home/HMP logo.jpg';
import zdsJpg from '../../assets/Home/zds logo.png';



const items = [
    { id: 1, src: comfyCouch, alt: 'comfyCouch image', text: 'Virtual and in-person life coaching services provided by our VTP Doris Singh for individuals, couples, spouses, and friends' },
    { id: 2, src: HeavenlyMP, alt: 'HMP image', text: 'Christ-centered edification for couples of all stages: dating, engaged, and married!' },
    { id: 3, src: zdsJpg, alt: 'zdsJpg image', text: 'Photography services for event photography and personal photoshoots' },
]

function Umbrella() {
    return (
        <div className='w-screen h-full text-center pt-32 pb-56'>
            <div className='w-full h-full'>

                <h2 className='text-9xl w-full' >The SHALOM MiNiSTRY Umbrella</h2>

                <p className='w-4/5 px-12 mx-auto text-3xl tracking-tighter'>Shalom Ministry is dedicated to uplift entrpreneurs and visionaries who are passionate about serving as ambassadors for the Kingdom of Yeshua and sharing their hearts for people. Learn more about the organizations, entrpreneurs, and services that Shalom Ministry oversees!</p>

                <div className='flex h-3/4 mx-32 items-center'>
                    {items.map(item => (
                        <div className='flex flex-col w-1/3 h-2/3 justify-between items-center pt-10' >
                            <img className='w-[475px] h-[450px]' src={item.src} alt={item.alt} />
                            <p className='w-auto px-5 pt-6 mb-2 text-3xl'>{item.text}</p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Umbrella;
