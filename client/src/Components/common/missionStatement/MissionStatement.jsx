import React from 'react';
// import './missionStatement.css';
import './size.css';

function MissionStatement(props) {
  const uppercaseStatement =
    <p> Shalom Ministry meets the needs of the lost, broken, and wounded as Yeshua’s <br /> extension of holistic help to those in need. We are a non-profit organization <br /> whose ambassadors compassionately listen to the individuals we serve to <br /> understand their unique needs, leading to their transformation. Our ministry <br /> began in 2018, when our founder was sent by Yeshua to Eritrea and <br /> Ghana, where she preached the Gospel, helped build schools, and <br /> provided facilities to the underprivileged population of the region. <br /> These projects serve as Shalom Ministry's heritage, which are still <br /> supported! Today and tomorrow, we seek to be the answer, the <br /> missing link, and the hands and feet of Yeshua on Earth!</p>

  const statement = <span>"Shalom Ministry <br /> meets the <br /> needs of the lost, broken,<br />& wounded..."</span>

  return (
    <div className="w-screen h-screen bg-shalom-watermark bg-no-repeat bg-[-30%_60%] bg-[length:50%]">

      <div className='w-full h-full text-center backdrop-blur pb-32'>
        <div className='w-auto h-full flex flex-col justify-center items-center before:content-["x"] before:absolute before:h-full before:w-5/6 before:right-24 before:bg-violet-200 before:opacity-20 mx-auto before:rounded-md before:border-8 before:border-violet-900 before:border-b-0 before:border-x-0'>

          <h2 className='text-9xl'>MiSSiON & ViSiON</h2>

          <div className='flex justify-center items-start p-12 h-3/4 mx-0 my-0 w-full'>
            <p className='text-3xl text-left leading-[3.8rem]'>{uppercaseStatement}</p>
            <p className='text-7xl text-right w-1/4 ml-[-210px] mt-[-10px] leading-[6.5rem]'>{statement}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default MissionStatement;
