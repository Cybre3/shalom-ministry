import React from 'react';
// import './missionStatement.css';
import './size.css';

function MissionStatement(props) {
  const uppercaseStatement = (
    <p>
      {' '}
      Shalom Ministry meets the needs of the lost, broken, and wounded as Yeshua’s <br /> extension
      of holistic help to those in need. We are a non-profit organization <br /> whose ambassadors
      compassionately listen to the individuals we serve to <br /> understand their unique needs,
      leading to their transformation. Our ministry <br /> b egan in 2018, when our founder was sent
      by Yeshua to Eritrea and <br /> Ghana, where she preached the Gospel, helped build schools,
      and <br /> provided facilities to the underprivileged population of the region. <br /> These
      projects serve as Shalom Ministry's heritage, which are still <br /> supported! Today and
      tomorrow, we seek to be the answer, the <br /> missing link, and the hands and feet of Yeshua
      on Earth!
    </p>
  );

  const statement = (
    <span>
      "Shalom Ministry <br /> meets the <br /> needs of the lost, broken,
      <br />& wounded..."
    </span>
  );

  const statementText = 'Shalom Ministry meets the needs of the lost, broken, & wounded';

  return (
    <div className="h-screen w-screen bg-shalom-watermark bg-[length:50%] bg-[-30%_60%] bg-no-repeat">
      <div className="relative h-fit w-full text-center backdrop-blur lg:pb-32">
        <div
          before-dynamic-value={statementText}
          className={`lg:before:content-[" "] container mx-auto items-center justify-center before:absolute before:right-0 before:h-full before:w-full before:rounded-md before:flex before:items-center before:leading-[6rem] before:border-8 before:border-x-0 before:border-b-0 before:border-violet-900 before:bg-violet-200 before:text-6xl before:content-[attr(before-dynamic-value)] before:text-right before:pr-10 lg:w-auto lg:before:right-24 lg:before:w-5/6 before:opacity-20`}
        >
          <h2 className="pt-10 text-4xl lg:text-8xl">
            MISSION <span className="">&</span> VISION
          </h2>

          <div className="mx-0 my-4 lg:my-0 h-full w-full items-start justify-center px-10 lg:flex lg:h-3/4 lg:p-12">
            <p className="text-justify lg:text-left text-lg lg:text-2xl lg:leading-[3.2rem]">
              {uppercaseStatement}
            </p>
            <p className="ml-[-155px] hidden w-1/4 text-right text-2xl lg:mt-[-10px] lg:block lg:text-6xl lg:leading-[5.5rem]">
              {statement}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionStatement;
