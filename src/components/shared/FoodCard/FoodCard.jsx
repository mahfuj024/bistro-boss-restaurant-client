import React from 'react'

function FoodCard({item}) {

    const {image, name, recipe, category, price} = item

    return (
        <div>
            <div className="card w-full max-w-sm bg-[#F3F3F3] shadow-md rounded-xl transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">

                {/* Image */}
                <figure>
                    <img
                        className="h-64 w-full object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
                        src={image}  // তোমার image variable
                        alt="Salad"
                    />
                </figure>

                {/* Card Body */}
                <div className="card-body items-center text-center px-4 py-4 md:px-5 md:py-5 lg:px-6 lg:py-6">
                    <h2 className="card-title text-xl md:text-xl lg:text-2xl font-semibold text-gray-800">
                       {name}
                    </h2>

                    <p className="text-sm md:text-base lg:text-lg text-gray-600 mt-2 md:mt-3">
                        {recipe}
                    </p>

                    <div className="card-actions mt-4">
                        <button className="btn btn-outline btn-warning uppercase text-xs md:text-sm lg:text-sm px-3 md:px-4 lg:px-5 py-1 md:py-2 lg:py-2 hover:bg-[#D99904] hover:text-white transition-colors duration-300">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard