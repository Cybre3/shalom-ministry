import React from 'react';
import comfyCouch from '../../assets/Home/t3c-logo-L.png';
// import HeavenlyMP from '../../assets/Home/HMP logo.jpg';
import zdsJpg from '../../assets/Home/zds logo.png';

const items = [
  //   {
  //     id: 2,
  //     src: HeavenlyMP,
  //     alt: 'HMP image',
  //     text: 'Christ-centered edification for couples of all stages: dating, engaged, and married!',
  //   },
  {
    id: 1,
    src: comfyCouch,
    alt: 'comfyCouch image',
    text: 'Virtual and in-person life coaching services provided by our VTP Doris Singh for individuals, couples, spouses, and friends',
  },
  {
    id: 3,
    src: zdsJpg,
    alt: 'zdsJpg image',
    text: 'Photography services for event photography and personal photoshoots',
  },
];

function Umbrella() {
  const { innerWidth: width } = window;

  return (
    <div className="h-fit w-screen py-20 text-center bg-violet-300/20">
      <div className="h-fit w-full">
        <h2 className="mb-4 w-full px-2 text-4xl lg:text-8xl">
          {width > 1024 ? 'The SHALOM MINISTRY Umbrella' : 'SHALOM MINISTRY Umbrella'}
        </h2>

        <p className="mx-auto w-3/5 text-justify text-xl tracking-tighter lg:px-10 lg:text-center lg:text-2xl">
          Shalom Ministry is dedicated to uplift entrpreneurs and visionaries who are passionate
          about serving as ambassadors for the Kingdom of Yeshua and sharing their hearts for
          people. Learn more about the organizations, entrpreneurs, and services that Shalom
          Ministry oversees!
        </p>

        <div className="mx-10 my-20 flex w-2/3 justify-around justify-self-center lg:mx-32">
          {width > 1024
            ? items.map((item) => (
                <div className="h-150px flex w-1/3 flex-col items-center justify-center rounded-3xl border-2 border-sky-900 bg-black py-8 pt-10 hover:shadow-sky-900 hover:shadow-lg">
                  <img
                    className="mb-auto h-[350px] w-[400px] rounded-lg bg-white p-2"
                    src={item.src}
                    alt={item.alt}
                  />
                  <p className="mb-auto w-full px-5 pt-6 text-2xl">{item.text}</p>
                </div>
              ))
            : items.map((item) => (
                <div className="mb-12 flex flex-col items-center justify-center">
                  <img className="h-[350px] w-[400px]" src={item.src} alt={item.alt} />
                  <p className="mb-2 w-auto pt-3 text-2xl">{item.text}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Umbrella;
