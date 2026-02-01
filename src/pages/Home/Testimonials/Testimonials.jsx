import SectionTitle from '../../../components/shared/SectionTitle/SectionTitle'
import { CiStar } from "react-icons/ci";

function Testimonials() {
    return (
        <div className='mt-8 md:mt-12 lg:mt-25 max-w-7xl mx-auto'>
            <SectionTitle textTop={"---What Our Clients Say---"} textBottom={"TESTIMONIALS"}></SectionTitle>

            <div className="flex justify-center mt-6 md:mt-10 lg:mt-12">
                <CiStar className="text-[#CD9003] text-2xl sm:text-3xl md:text-4xl lg:text-5xl"/>
                <CiStar className="text-[#CD9003] text-2xl sm:text-3xl md:text-4xl lg:text-5xl"/>
                <CiStar className="text-[#CD9003] text-2xl sm:text-3xl md:text-4xl lg:text-5xl"/>
                <CiStar className="text-[#CD9003] text-2xl sm:text-3xl md:text-4xl lg:text-5xl"/>
                <CiStar className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"/>
            </div>

            

        </div>
    )
}

export default Testimonials