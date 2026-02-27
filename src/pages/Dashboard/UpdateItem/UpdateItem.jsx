import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UpdateItem() {

    const { id } = useParams()

    const [item, setItem] = useState(null)

    useEffect(() => {

        fetch(`https://bistro-boss-restaurant-server-phi.vercel.app/menu/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItem(data)
            })
            .catch(error => {
                console.log("Error:", error)
            })

    }, [id])

    console.log("id :", id)

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="cinzel-font text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-3">
                Update Items
            </h1>

            <div className="bg-white p-4 md:p-8 lg:p-12 rounded-sm mt-4 lg:mt-6">
                <form
                    // onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6">

                    {/* Recipe */}
                    <div>
                        <label className="block font-semibold mb-2 cursor-pointer">Recipe name</label>
                        <input
                            // {...register("recipe", { required: true })}
                            placeholder="Recipe name" className="w-full px-4 py-4 rounded-md outline-1 outline-stone-300 bg-gray-50" />
                        {/* {errors.recipe && <span className="text-red-500">Recipe name required</span>} */}
                    </div>

                    {/* Category + Price */}
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1">
                            <label className="block font-semibold mb-2 cursor-pointer">Category</label>
                            <select
                                // {...register("category", { required: true })}
                                className="w-full px-4 py-4 rounded-md outline-1 outline-stone-300 bg-gray-50">
                                <option value="">Category</option>
                                <option value="dessert">dessert</option>
                                <option value="pizza">pizza</option>
                                <option value="salad">salad</option>
                                <option value="soup">soup</option>
                                <option value="drinks">drinks</option>
                            </select>
                            {/* {errors.category && <span className="text-red-500">Category required</span>} */}
                        </div>

                        <div className="flex-1">
                            <label className="block font-semibold mb-2 cursor-pointer">Price</label>
                            <input
                                // {...register("price", { required: true })}
                                placeholder="Price" className="w-full px-4 py-4 rounded-md outline-1 outline-stone-300 bg-gray-50" />
                            {/* {errors.price && <span className="text-red-500">Price required</span>} */}
                        </div>
                    </div>

                    {/* Recipe Details */}
                    <div>
                        <label className="block font-semibold mb-2 cursor-pointer">Recipe details</label>
                        <textarea
                            // {...register("recipeDetails", { required: true })}
                            rows="5" placeholder="Recipe details" className="w-full px-4 py-4 rounded-md outline-1 outline-stone-300 bg-gray-50" />
                        {/* {errors.recipeDetails && <span className="text-red-500">Recipe details required</span>} */}
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block font-semibold mb-2 cursor-pointer">Upload Image</label>
                        <input
                            // {...register("image", { required: true })}
                            type="file" className="file:px-5 file:py-4 file:rounded-md file:bg-gray-100 cursor-pointer" />
                        {/* {errors.image && <span className="text-red-500">Image required</span>} */}
                    </div>

                    <button type="submit" className="block w-full p-3 bg-[#D1A05A] hover:bg-[#c89245] text-white rounded-sm font-bold transition-all duration-300 cursor-pointer">
                        Update Item
                    </button>

                </form>
            </div>
        </div>
    )
}

export default UpdateItem