const Scripture = () => {
    return (
    <div className='h-screen bg-gradient-to-b from-transparent from-5% via-blue-500 via-40% to-transparent to-95% mt-10'>
        <div className='flex flex-col w-3/4 h-full mx-auto items-center justify-center p-32'>

            <div className='relative text-white italic mb-10'>
                <p className='text-7xl font-thin w-full leading-[6rem]'>The Spirit of the Sovereign Lord is on me, because the Lord has anointed me <br /> to proclaim good news to the poor.
                    <span className='ml-3 text-lg space-x-3'>
                        <span>Isaiah 61:1</span>
                        <span>Luke 4:18</span>
                    </span>
                </p>
            </div>

            <p className='text-blue-800 text-xl italic'>For individuals, families, communities, and organizations, discover how Shalom Ministry can impact you.</p>
        </div>
    </div>
    );
}

export default Scripture;