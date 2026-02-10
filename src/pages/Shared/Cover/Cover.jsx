
function Cover({ bgImage, title, description }) {
    return (

        <>
            {/* <div
                className="bg-cover bg-center flex items-center justify-center mt-8 md:mt-16 lg:mt-32"
                style={{ backgroundImage: `url(${chefService})` }}
            >
                <div className="bg-white text-center w-85 md:w-160 lg:w-5xl">
                    <div className='text-center py-4 md:my-8 lg:py-16 px-4 md:px-8 lg:px-28'>
                        <h1 className="font-medium text-xl cinzel-font md:text-3xl lg:text-4xl">
                            Bistro Boss
                        </h1>
                        <p className='text-xs md:text-sm lg:text-base mt-1 md:mt-2 lg:mt-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                        </p>
                    </div>
                </div>
            </div> */}

            <div
                className="hero h-100 md:h-150 lg:h-200"
                style={{
                    backgroundImage: `url("${bgImage}")`,
                }}
            >
                <div className="hero-content text-center w-full max-w-none">
                    <div className="bg-black/60 p-6 md:h-64 md:w-150 lg:h-112 lg:w-330
    flex flex-col items-center justify-center text-center">

                        <h1 className="mb-5 text-5xl lg:text-6xl font-bold cinzel-font text-white uppercase">
                            {title}
                        </h1>

                        <p className="mb-5 cinzel-font text-sm md:text-base lg:text-lg text-white">
                            {description}
                        </p>

                    </div>
                </div>
            </div>


        </>

    )
}

export default Cover