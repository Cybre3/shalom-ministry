const Scripture = () => {

    const scriptureText = <>The Spirit of the Sovereign Lord is on me, <br /> because the Lord has anointed me <br /> to proclaim good news to the poor.</>;

    const scriptureSubText = `For individuals, families, communities, and organizations, discover how Shalom Ministry can impact you.`;

    const scriptureReference = [<span>Isaiah 61:1</span>, <span>Luke 4:18</span>]

    return (
        <div className='w-screen h-screen bg-scriptureBlue bg-cover bg-center bg-no-repeat mt-10'>
            <div className='container flex flex-col w-full h-full mx-auto items-center justify-center'>

                <div className='text-white italic mb-10'>
                    <p className='text-[6rem] font-thin w-full leading-[7rem]'>
                        {scriptureText}
                        <span className='ml-3 text-2xl space-x-3'>
                            {scriptureReference.map(text => text)}
                        </span>
                    </p>
                </div>

                <p className='text-blue-800 text-3xl mr-16 italic'>
                    {scriptureSubText}
                </p>
            </div>
        </div>
    );
}

export default Scripture;