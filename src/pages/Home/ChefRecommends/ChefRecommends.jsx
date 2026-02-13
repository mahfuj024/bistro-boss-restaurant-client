import SectionTitle from '../../../components/shared/SectionTitle/SectionTitle'
import featured from "../../../assets/home/featured.jpg"
import { useEffect, useState } from 'react'

function ChefRecommends() {

    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch("/menu.json")
            .then(res => res.json())
            .then(data => {
                const salad = data.filter(item => item.category === "salad");
                setItem(salad);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className='mt-8 md:mt-12 lg:mt-25 max-w-7xl mx-auto'>

            {/* Call Us Banner */}
            <div className="bg-black text-white mb-8 md:mb-12 lg:mb-25 text-center">
                <h1 className="py-8 md:py-10 lg:py-24 text-xl md:text-3xl lg:text-4xl">
                    Call Us: +88 0192345678910
                </h1>
            </div>

            <SectionTitle textTop={"---Should Try---"} textBottom={"CHEF RECOMMENDS"} />

            {/* Menu Items */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center mt-10">
                {item.slice(0, 3).map((salad, index) => (
                    <div key={index} className="card w-full max-w-sm bg-[#F3F3F3] shadow-md rounded-xl transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">

                        {/* Image */}
                        <figure>
                            <img
                                className="h-64 w-full object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
                                src={salad.image}
                                alt={salad.name}
                            />
                        </figure>

                        {/* Card Body */}
                        <div className="card-body items-center text-center px-4 py-4 md:px-5 md:py-5 lg:px-6 lg:py-6">
                            <h2 className="card-title text-xl md:text-xl lg:text-2xl font-semibold text-gray-800">
                                {salad.name}
                            </h2>

                            <p className="text-sm md:text-base lg:text-lg text-gray-600 mt-2 md:mt-3">
                                {salad.recipe}
                            </p>

                            <div className="card-actions mt-4">
                                <button className="btn btn-outline btn-warning uppercase text-xs md:text-sm lg:text-sm px-3 md:px-4 lg:px-5 py-1 md:py-2 lg:py-2 hover:bg-[#D99904] hover:text-white transition-colors duration-300">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {/* Featured Section */}
            <div
                className="hero mt-8 md:mt-12 lg:mt-25"
                style={{ backgroundImage: `url(${featured})` }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-white text-center p-10 md:py-16 lg:py-28">
                    <div className="max-w-md">
                        <h1 className="font-medium text-2xl md:text-4xl lg:text-5xl">FROM OUR MENU</h1>
                        <p className='text-base md:text-lg lg:text-xl mt-2 md:mt-5 lg:mt-6 font-light'>March 20, 2023 WHERE CAN I GET SOME?</p>
                        <p className='text-sm md:text-base lg:text-lg mt-1 md:mt-3 lg:mt-4 font-light text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>

                        <button className="btn mt-2 md:mt-5 lg:mt-6 text-sm lg:text-base" onClick={() => document.getElementById('my_modal_5').showModal()}>Read More</button>

                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <p className="py-4 px-4 text-justify text-black">
                                    Food is more than mere sustenance; it is a universal language that connects cultures and creates memories. Our menu is designed to take you on a journey through these flavors...
                                </p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChefRecommends;
