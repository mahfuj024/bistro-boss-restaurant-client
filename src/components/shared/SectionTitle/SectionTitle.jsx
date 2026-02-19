

function SectionTitle({ textTop, textBottom }) {
    return (
        <div>
            <p className='text-center text-base md:text-lg lg:text-xl pb-1 md:pb-2 lg:pb-3 text-[#D99904FF]'>{textTop}</p>
            <div className="divider max-w-106 mx-auto my-1 h-1"></div>

            <h1 className='text-center font-medium text-xl md:text-3xl lg:text-4xl py-2 md:py-3 lg:py-5 leading-none my-0'>
                {textBottom}
            </h1>

            <div className="divider max-w-106 mx-auto my-1 h-1"></div>


        </div>
    )
}

export default SectionTitle