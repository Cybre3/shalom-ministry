import React from 'react';
// import './missionStatement.css';
import './size.css';

function MissionStatement(props) {
  const uppercaseStatement =
    <p> Shalom Ministry meets the needs of the lost, broken, and wounded as Yeshua’s <br /> extension of holistic help to those in need. We are a non-profit organization <br /> whose ambassadors compassionately listen to the individuals we serve to <br /> understand their unique needs, leading to their transformation. Our ministry <br /> began in 2018, when our founder was sent by Yeshua to Eritrea and <br /> Ghana, where she preached the Gospel, helped build schools, and <br /> provided facilities to the underprivileged population of the region. <br /> These projects serve as Shalom Ministry's heritage, which are still <br /> supported! Today and tomorrow, we seek to be the answer, the <br /> missing link, and the hands and feet of Yeshua on Earth!</p>

  const statement = `"Shalom Ministry meets the needs of the lost, broken & wounded"`

  return (
    <div className="w-screen h-[800px] bg-shalom-watermark bg-no-repeat bg-[-30%_60%] bg-[length:50%]">

      <div className='w-full h-full text-center backdrop-blur'>
        <div className='w-3/5 h-full mx-auto pt-8'>

          <h2 className='text-8xl'>MiSSiON & ViSiON</h2>
          <div className='flex mt-10 h-3/4'>
            <p className='text-lg text-left leading-[3rem] w-3/4 pl-6'>{uppercaseStatement}</p>
            <p className='text-6xl text-right w-2/6 leading-[5rem]'>{statement}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default MissionStatement;
