const Scripture = () => {
  const scriptureText = (
    <>
      The Spirit of the Sovereign Lord is on me, <br /> because the Lord has anointed me <br /> to
      proclaim good news to the poor.
    </>
  );

  const scriptureSubText = `For individuals, families, communities, and organizations, discover how Shalom Ministry can impact you.`;

  const scriptureReference = [<span>Isaiah 61:1</span>, <span>Luke 4:18</span>];

  return (
    <div className="h-screen w-screen bg-scriptureBlue bg-cover bg-center bg-no-repeat lg:mt-10 shadow-lg">
      <div className="container mx-auto flex h-full w-full flex-col items-center justify-center">
        <div className="mb-[-40px] flex h-1/2 flex-col italic text-white justify-center text-center lg:text-left">
          <p className="mb-10 w-full px-3 text-3xl font-thin lg:text-[5rem] lg:leading-[7rem]">
            {scriptureText}
            <span className="ml-3 space-x-3 text-xl lg:text-2xl">
              {scriptureReference.map((text) => text)}
            </span>
          </p>
          <p className="px-3 lg:text-justify italic text-blue-800 lg:text-3xl text-center">    
          {scriptureSubText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scripture;
