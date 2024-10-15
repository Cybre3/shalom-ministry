import React from 'react';
// import './missionStatement.css';
import './size.css';

function MissionStatement(props) {
  const { innerWidth: width } = window;

  const uppercaseStatement = (
    <p>
      {' '}
      Shalom Ministry meets the needs of the lost, broken, and wounded as Yeshua’s <br /> extension
      of holistic help to those in need. We are a non-profit organization <br /> whose ambassadors
      compassionately listen to the individuals we serve to <br /> understand their unique needs,
      leading to their transformation. Our ministry <br /> began in 2018, when our founder was sent
      by Yeshua to Eritrea and <br /> Ghana, where she preached the Gospel, helped build schools,
      and <br /> provided facilities to the underprivileged population of the region. <br /> These
      projects serve as Shalom Ministry's heritage, which are still <br /> supported! Today and
      tomorrow, we seek to be the answer, the <br /> missing link, and the hands and feet of Yeshua
      on Earth!
    </p>
  );

  const missionStatementText = `Shalom Ministry meets the needs of the lost, broken, and wounded as Yeshua’s extension of holistic help to those in need. We are a non-profit organization whose ambassadors compassionately listen to the individuals we serve to understand their unique needs, leading to their transformation. Our ministry began in 2018, when our founder was sent by Yeshua to Eritrea and Ghana, where she preached the Gospel, helped build schools, and provided facilities to the underprivileged population of the region. These projects serve as Shalom Ministry's heritage, which are still supported! Today and tomorrow, we seek to be the answer, the missing link, and the hands and feet of Yeshua on Earth!`;

  const statement = (
    <span>
      "Shalom Ministry <br /> meets the <br /> needs of the lost, broken,
      <br />& wounded..."
    </span>
  );

  const statementText = 'Shalom Ministry meets the needs of the lost, broken, & wounded...';

  return (
    <div className="h-screen w-screen bg-shalom-watermark bg-cover bg-center bg-no-repeat lg:bg-[length:50%] lg:bg-[-30%_60%]">
      <div className="relative h-full w-full text-center backdrop-blur lg:h-full lg:pb-32 mx-auto">
        <div
          before-dynamic-value={statementText}
          className={`lg:before:[] container mx-auto items-center justify-center before:absolute before:right-0 before:flex before:h-full before:w-full before:items-center before:rounded-md before:border-8 before:border-x-0 before:border-b-0 before:border-violet-900 before:bg-violet-200 before:pl-4 before:pr-3 before:text-center before:text-6xl before:leading-[6rem] before:text-sky-500 before:opacity-10 before:content-[attr(before-dynamic-value)] lg:w-auto lg:before:right-48 lg:before:w-3/4 lg:before:opacity-30 lg:before:content-[""] before:shadow-lg before:shadow-black before:bottom-20`}
        >
          <h2 className="pt-10 text-4xl lg:text-8xl">
            MISSION <span className="">&</span> VISION
          </h2>

          <div className="mx-0 my-4 h-full w-full items-start justify-center px-9 pb-10 lg:my-0 lg:flex lg:h-3/4 lg:p-12">
            <p className="text-justify text-lg lg:text-left lg:text-2xl lg:leading-[3.2rem]">
              {width > 1024 ? uppercaseStatement : missionStatementText}
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
