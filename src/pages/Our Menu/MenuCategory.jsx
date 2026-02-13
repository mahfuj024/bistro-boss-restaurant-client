import { Link } from "react-router-dom"


function MenuCategory({ items, btnTitle, btnLocation }) {
  return (
    <div className='mt-6 md:mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 p-2 lg:p-0 space-y-4 md:space-y-6 lg:space-y-10 max-w-7xl mx-auto'>

      {
        items.map((item) => (
          <div key={item._id} className="flex mt-1 lg:mt-0 mx-auto items-center">
            <img src={item.image} alt="food image" className="h-15 w-15 md:h-18 md:w-18 lg:h-20 lg:w-20 rounded-b-3xl rounded-tr-3xl md:rounded-b-4xl md:rounded-tr-4xl" />
            <div className="max-w-110 ml-3 md:ml-4 lg:ml-8">
              <h1 className="cinzel-font font-medium text-base md:text-lg lg:text-[20px]">{item.name} ------------------</h1>
              <p className="text-sm md:text-base font-light mt-1 md:mt-2">{item.recipe}</p>
            </div>
            <p className="font-medium text-base md:text-lg lg:text-[20px] text-[#D99904FF] ml-1 md:ml-4">{item.price}</p>
          </div>
        ))
      }

      <div className="lg:col-span-2 flex justify-center mt-6 md:mt-10 lg:mt-10">
        <Link
          // to={`/${btnLocation}`}
          className="font-medium inline-block border-0 border-b-2 border-black
         text-base md:text-lg lg:text-[20px]
         -mb-1"
        >
          {btnTitle}
        </Link>
      </div>

    </div>
  )
}

export default MenuCategory