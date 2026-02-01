import { BsChat } from "react-icons/bs";
import SectionTitle from '../../../components/shared/SectionTitle/SectionTitle'
import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className='mt-8 md:mt-12 lg:mt-25 max-w-7xl mx-auto'>
            <SectionTitle textTop={"---Check it out---"} textBottom={"FROM OUR MENU"}></SectionTitle>

            <div className='mt-6 md:mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 p-2 lg:p-0 space-y-4 md:space-y-6 lg:space-y-10'>
                <div className="flex mx-auto">
                    <BsChat className="text-7xl md:text-7xl lg:text-7xl" />
                    <div className="max-w-110 ml-3 md:ml-4 lg:ml-8">
                        <h1 className="cinzel-font font-medium text-base md:text-lg lg:text-[20px]">ROAST DUCK BREAST ------------------</h1>
                        <p className="text-sm md:text-base font-light mt-1 md:mt-2">Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                    </div>
                    <p className="font-medium text-base md:text-lg lg:text-[20px] text-[#D99904FF] ml-1 md:ml-4">$14.5</p>
                </div>

                <div className="flex mx-auto">
                    <BsChat className="text-7xl md:text-7xl lg:text-7xl" />
                    <div className="max-w-110 ml-3 md:ml-4 lg:ml-8">
                        <h1 className="cinzel-font font-medium text-base md:text-lg lg:text-[20px]">TUNA NIÇOISE ------------------</h1>
                        <p className="text-sm md:text-base font-light mt-1 md:mt-2">Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                    </div>
                    <p className="font-medium text-base md:text-lg lg:text-[20px] text-[#D99904FF] ml-1 md:ml-4">$14.5</p>
                </div>

                <div className="flex mx-auto">
                    <BsChat className="text-7xl md:text-7xl lg:text-7xl" />
                    <div className="max-w-110 ml-3 md:ml-4 lg:ml-8">
                        <h1 className="cinzel-font font-medium text-base md:text-lg lg:text-[20px]">ESCALOPE DE VEAU ------------------</h1>
                        <p className="text-sm md:text-base font-light mt-1 md:mt-2">Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                    </div>
                    <p className="font-medium text-base md:text-lg lg:text-[20px] text-[#D99904FF] ml-1 md:ml-4">$14.5</p>
                </div>

                <div className="flex mx-auto">
                    <BsChat className="text-7xl md:text-7xl lg:text-7xl" />
                    <div className="max-w-110 ml-3 md:ml-4 lg:ml-8">
                        <h1 className="cinzel-font font-medium text-base md:text-lg lg:text-[20px]">CHICKEN AND WALNUT SALAD ---------------</h1>
                        <p className="text-sm md:text-base font-light mt-1 md:mt-2">Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                    </div>
                    <p className="font-medium text-base md:text-lg lg:text-[20px] text-[#D99904FF] ml-1 md:ml-4">$14.5</p>
                </div>

                <div className="flex mx-auto">
                    <BsChat className="text-7xl md:text-7xl lg:text-7xl" />
                    <div className="max-w-110 ml-3 md:ml-4 lg:ml-8">
                        <h1 className="cinzel-font font-medium text-base md:text-lg lg:text-[20px]">FISH PARMENTIER ------------------</h1>
                        <p className="text-sm md:text-base font-light mt-1 md:mt-2">Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                    </div>
                    <p className="font-medium text-base md:text-lg lg:text-[20px] text-[#D99904FF] ml-1 md:ml-4">$14.5</p>
                </div>

                <div className="flex mx-auto">
                    <BsChat className="text-7xl md:text-7xl lg:text-7xl" />
                    <div className="max-w-110 ml-3 md:ml-4 lg:ml-8">
                        <h1 className="cinzel-font font-medium text-base md:text-lg lg:text-[20px]">ROASTED PORK BELLY ------------------</h1>
                        <p className="text-sm md:text-base font-light mt-1 md:mt-2">Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                    </div>
                    <p className="font-medium text-base md:text-lg lg:text-[20px] text-[#D99904FF] ml-1 md:ml-4">$14.5</p>
                </div>

            </div>

            <div className="text-center mt-6 md:mt-10 lg:mt-10">
                <Link className="font-medium text-base md:text-lg lg:text-[20px]" to={"/OurMenu"}>View Full  Menu</Link>
                <div className="divider max-w-28 md:max-w-32 lg:max-w-36 mx-auto mt-0 text-black"></div>
            </div>

            <div className="bg-black text-white mt-8 md:mt-12 lg:mt-25 text-center">
                <h1 className="py-8 md:py-10 lg:py-24 text-xl md:text-3xl lg:text-4xl">Call Us: +88 0192345678910</h1>
            </div>
        </div>
    )
}

export default Menu