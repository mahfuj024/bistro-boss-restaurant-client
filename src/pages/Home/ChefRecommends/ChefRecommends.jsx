import SectionTitle from '../../../components/shared/SectionTitle/SectionTitle'
import salad from "../../../assets/home/slide1.jpg"
import featured from "../../../assets/home/featured.jpg"
import Swal from 'sweetalert2'


function ChefRecommends() {
    return (
        <div className='mt-8 md:mt-12 lg:mt-25 max-w-7xl mx-auto'>
            <SectionTitle textTop={"---Should Try---"} textBottom={"CHEF RECOMMENDS"}></SectionTitle>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center mt-10">

                {/* Card 1 */}
                <div className="card bg-[#F3F3F3] w-full max-w-sm shadow-md">
                    <figure>
                        <img
                            className="h-64 w-full object-cover"
                            src={salad}
                            alt="salad image"
                        />
                    </figure>

                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl font-semibold">
                            Caeser Salad
                        </h2>

                        <p className="text-base text-gray-600">
                            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                        </p>

                        <div className="card-actions mt-3">
                            <button className="btn btn-outline btn-warning uppercase">
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card bg-[#F3F3F3] w-full max-w-sm shadow-md">
                    <figure>
                        <img
                            className="h-64 w-full object-cover"
                            src={salad}
                            alt="salad image"
                        />
                    </figure>

                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl font-semibold">
                            Caeser Salad
                        </h2>

                        <p className="text-base text-gray-600">
                            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                        </p>

                        <div className="card-actions mt-3">
                            <button className="btn btn-outline btn-warning uppercase">
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card bg-[#F3F3F3] w-full max-w-sm shadow-md">
                    <figure>
                        <img
                            className="h-64 w-full object-cover"
                            src={salad}
                            alt="salad image"
                        />
                    </figure>

                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl font-semibold">
                            Caeser Salad
                        </h2>

                        <p className="text-base text-gray-600">
                            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                        </p>

                        <div className="card-actions mt-3">
                            <button className="btn btn-outline btn-warning uppercase">
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div
                className="hero mt-8 md:mt-12 lg:mt-25"
                style={{ backgroundImage: `url(${featured})` }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-white text-center p-10 md:py-16 lg:py-28">
                    <div className="max-w-md">
                        <h1 className="font-medium text-2xl md:text-4xl lg:text-5xl">FROM OUR MENU</h1>
                        <p className='text-base md:text-lg lg:text-xl mt-2 md:mt-5 lg:mt-6 font-light'> March 20, 2023
                            WHERE CAN I GET SOME?</p>
                        <p className='text-sm md:text-base lg:text-lg mt-1 md:mt-3 lg:mt-4 font-light text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>

                        <button className="btn mt-2 md:mt-5 lg:mt-6 text-sm lg:text-base" onClick={() => document.getElementById('my_modal_5').showModal()}>Read More</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <p className="py-4 px-4 text-justify text-black">Food is more than mere sustenance; it is a universal language that connects cultures and creates memories. Our menu is designed to take you on a journey through these flavors.
                                    The secret lies in the balance of ingredients. We source fresh, local produce to ensure that every bite of our signature Roasted Herb Chicken or Zesty Garden Salad bursts with natural vibrance. Our chefs believe that a dish should appeal to all senses—from the golden sear on a steak to the aromatic blend of rosemary and garlic that greets you at the table.
                                    In a world that often moves too fast, the act of sharing a meal offers a rare moment of connection. Whether it is a quick lunch or a celebratory dinner, our offerings are crafted to be the centerpiece of your best stories. Quality is our baseline, but your satisfaction is our mission. As you browse our selections, remember that each dish is prepared with passion and precision. We invite you to sit back, savor the details, and enjoy the experience we have prepared just for you.
                                    Would you like me to rewrite this for a specific dish on your menu, or perhaps focus on a different theme like "Our Story" or "Healthy Choices"?</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ChefRecommends