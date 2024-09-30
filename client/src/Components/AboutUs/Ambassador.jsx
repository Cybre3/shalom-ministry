import React from 'react';

function Ambassador({ ambassador }) {
  return (
    // <div className="group border-4 border-double border-white bg-black p-1 text-white sm:grid sm:h-fit sm:auto-rows-min sm:grid-cols-2 sm:p-0 md-lg:grid-rows-1 md-lg:border-0 md-lg:bg-transparent md-lg:text-black">
    //   <div className="border shadow-inner shadow-white sm:border-x-0 sm:border-y-2 sm:border-gray-500 sm:group-odd:col-start-2 md-lg:mx-auto md-lg:h-[104%] md-lg:w-10/12 md-lg:self-center md-lg:border-4 md-lg:border-black md-lg:group-odd:col-start-2 md-lg:group-odd:row-span-full md-lg:group-even:row-span-full">
    //     <img src={ambassador.photo} alt="" className="md-lg:h-full" />
    //   </div>

    //   <h2 className="mt-2 flex flex-col sm:mt-0 sm:h-full sm:justify-center sm:border-x-0 sm:border-y-2 sm:border-gray-500 sm:group-odd:col-start-1 sm:group-odd:row-start-1 md-lg:-mt-2.5 md-lg:h-2/6 md-lg:self-start md-lg:border-4 md-lg:border-b-0 md-lg:border-black md-lg:bg-white md-lg:group-odd:col-end-1 md-lg:group-even:col-start-2 md-lg:group-even:row-start-1 lg:-mt-[0.65rem] 2xl:-mt-[0.7rem]">
    //     <span className="text-2xl font-bold">{ambassador.name}</span>
    //     <em className="text-lg">{ambassador.title}</em>
    //   </h2>

    //   <p className="mytext p-3 text-justify sm:col-span-full sm:p-6 md-lg:-mb-[0.6rem] md-lg:h-[80%] md-lg:self-end md-lg:border-4 md-lg:border-t-0 md-lg:border-black md-lg:bg-white md-lg:group-odd:col-end-1 md-lg:group-odd:row-start-1 md-lg:group-even:col-start-2 md-lg:group-even:row-start-1 lg:-mb-2.5 2xl:-mb-[0.665rem]">
    //     {ambassador.bio}
    //   </p>
    // </div>
    <div
      className="group h-[450px] w-[300px] bg-transparent perspective-800 odd:mb-72 even:mt-72"
      id="flip-card"
    >
      <div className="relative flex h-full items-center">
        <div
          className="t-0 absolute rounded-md border-2 border-white shadow-lg shadow-indigo-950 transition duration-[1s] transform backface-hidden group-hover:rotate-y-180"
          id="flip-card-front"
        >
          <img className="rounded-md" src={ambassador.photo} alt="" />
        </div>
        <div
          className="t-0 absolute space-y-4 rounded-md bg-white p-6 py-8 text-black shadow-lg shadow-indigo-950 transition duration-[1s] -rotate-y-180 transform backface-hidden group-hover:rotate-y-0"
          id="flip-card-back"
        >
          <h2 className="flex flex-col">
            <span className="text-2xl font-bold">{ambassador.name}</span>
            <em>{ambassador.title}</em>
          </h2>
          <p className="text-justify">{ambassador.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Ambassador;

/* 
 <div
      key={ambassador._id}
      className="group border-4 border-double border-white bg-black p-1 text-white"
    >
      <div className='sm:flex sm:flex-row sm:group-odd:flex-row-reverse'>
        <div className="border shadow-inner shadow-white sm:w-11/12">
          <img src={ambassador.photo} alt="" className="" />
        </div>
        <h2 className="space-x-2 sm:flex sm:w-full sm:flex-col sm:justify-center sm:border-x-0 sm:border-y-2 sm:border-gray-500">
          <span className="text-xl font-bold sm:text-2xl">{ambassador.name}</span>
          <em className="text-lg">{ambassador.title}</em>
        </h2>
      </div>
      <p className="mytext p-3 text-justify sm:col-span-full sm:p-6">{ambassador.bio}</p>
    </div>
*/
