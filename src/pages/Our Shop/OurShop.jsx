import salad from "../../assets/home/slide1.jpg"

function OurShop() {
    return (
        <div>

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
        </div>
    )
}

export default OurShop