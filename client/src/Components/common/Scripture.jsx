const Scripture = () => {
    return (
    <div className='h-screen bg-scriptureBlue bg-cover bg-center bg-no-repeat mt-10'>
        <div className='flex flex-col w-full h-full mx-auto items-center justify-center p-32 ml-10'>

            <div className='relative text-white italic mb-10'>
                <p className='text-8xl font-thin w-full leading-[7rem]'>The Spirit of the Sovereign Lord is on me, because the Lord has anointed me <br /> to proclaim good news to the poor.
                    <span className='ml-3 text-2xl space-x-3'>
                        <span>Isaiah 61:1</span>
                        <span>Luke 4:18</span>
                    </span>
                </p>
            </div>

            <p className='text-blue-800 text-3xl mr-16 italic'>For individuals, families, communities, and organizations, discover how Shalom Ministry can impact you.</p>
        </div>
    </div>
    );
}

export default Scripture;