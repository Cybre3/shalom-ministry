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
    <div className="h-fit w-screen bg-violet-300/20 py-20 text-center">
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

        {width > 1024 ? (
          <div className="my-20 flex w-2/3 justify-around justify-self-center mx-32">
            {items.map((item) => (
              <div className="h-150px flex w-1/3 flex-col items-center justify-center rounded-3xl border-2 border-sky-900 bg-black py-8 pt-10 hover:shadow-lg hover:shadow-sky-900">
                <img
                  className="mb-auto h-[350px] w-[400px] rounded-lg bg-white p-2"
                  src={item.src}
                  alt={item.alt}
                />
                <p className="mb-auto w-full px-5 pt-6 text-2xl">{item.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-10 my-20 flex-col w-2/3 justify-around justify-self-center space-y-10">
            {items.map((item) => (
              <div className="h-150px flex w-full flex-col items-center justify-center rounded-3xl border-2 border-sky-900 bg-black py-8 pt-10 hover:shadow-lg hover:shadow-sky-900">
                <img
                  className="mb-auto h-[250px] w-[400px] rounded-lg bg-white p-2"
                  src={item.src}
                  alt={item.alt}
                />
                <p className="mb-auto w-full px-5 pt-6 text-2xl">{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Umbrella;
