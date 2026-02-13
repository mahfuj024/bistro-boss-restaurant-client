
function Cover({ bgImage, title, description }) {
    return (

        <>
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