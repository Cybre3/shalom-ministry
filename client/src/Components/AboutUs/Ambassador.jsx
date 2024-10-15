import React from 'react';

function Ambassador({ ambassador }) {
  return (
    <div
      className="group h-[450px] w-[300px] bg-transparent perspective-800 lg:odd:mb-72 lg:even:mt-72 mb-20"
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
          className="t-0 absolute space-y-4 rounded-md bg-white p-6 py-8 text-black shadow-lg shadow-indigo-950 transition duration-[1s] -rotate-y-180 transform backface-hidden group-hover:rotate-y-0  border border-black"
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
