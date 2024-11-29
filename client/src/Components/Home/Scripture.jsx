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
    <div className="h-screen w-screen lg:mt-10">
      <div className="mx-auto flex h-full w-full items-center justify-center">
        <div className="m-12 flex h-3/4 w-full flex-col items-center justify-center rounded-lg border-4 border-blue-700/30 bg-scriptureBlue bg-cover bg-center bg-no-repeat text-center italic text-white shadow-xl shadow-blue-500/60 lg:text-left">
          <p className="mb-10 w-full px-3 text-center text-3xl font-thin lg:text-[5rem] lg:leading-[7rem]">
            {scriptureText}
            <span className="ml-3 space-x-3 text-xl lg:text-2xl">
              {scriptureReference.map((text) => text)}
            </span>
          </p>
          <p className="px-3 text-center italic text-blue-800 lg:text-justify lg:text-3xl">
            {scriptureSubText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scripture;
