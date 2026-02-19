import { useLocation, useNavigate } from "react-router-dom"
import useAuth from "../../../hooks/useAuth"
import Swal from 'sweetalert2'
import useAxiosSecure from "../../../hooks/useAxiosSecure"


function FoodCard({ item }) {

    const { user } = useAuth()
    const { image, name, recipe, price, _id } = item || {}
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()

    const handleAddToCart = (food) => {
        if (user && user.email) {
            // Cart save in database
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price
            }

            axiosSecure.post("/cart", cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })

        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
            }).then((result) => {
                if (result.isConfirmed) {
                    // redirect to log in page
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }

    return (
        <div>
            <div className="card w-full max-w-sm bg-[#F3F3F3] shadow-md rounded-xl transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">

                {/* Image */}
                <figure className="relative">
                    <img
                        className="h-64 w-full object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
                        src={image}  // তোমার image variable
                        alt={name}
                    />
                    <h3 className="absolute bg-stone-900 text-sm md:text-base lg:text-base font-medium text-white px-3 right-4 top-1 py-1 rounded-2xl mt-2 md:mt-3">
                        ${price}
                    </h3>
                </figure>

                {/* Card Body */}
                <div className="card-body items-center text-center px-4 py-4 md:px-5 md:py-5 lg:px-6 lg:py-6">
                    <h2 className="card-title text-xl md:text-xl lg:text-[22px] font-semibold text-gray-800">
                        {name}
                    </h2>

                    <p className="text-sm md:text-base lg:text-base text-gray-600 mt-2 lg:mt-3">
                        {recipe?.split(" ").slice(0, 10).join(" ")}...
                    </p>


                    <div className="card-actions mt-4">
                        <button
                            onClick={() => handleAddToCart(item)}
                            className="btn btn-outline btn-warning uppercase text-xs md:text-sm lg:text-sm px-3 md:px-4 lg:px-5 py-1 md:py-2 lg:py-2 hover:bg-[#D99904] hover:text-white transition-colors duration-300">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard