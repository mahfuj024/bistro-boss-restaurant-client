

function SectionTitle({ textTop, textBottom }) {
    return (
        <div>
            <p className='text-center text-base md:text-lg lg:text-xl text-[#D99904FF]'>{textTop}</p>
            <div className="divider max-w-106 mx-auto"></div>
            <h1 className='text-center font-medium text-xl md:text-3xl lg:text-4xl py-0 md:py-1'>{textBottom}</h1>
            <div className="divider max-w-106 mx-auto mb-6 md:mb-10 lg:mb-12"></div>
        </div>
    )
}

export default SectionTitle