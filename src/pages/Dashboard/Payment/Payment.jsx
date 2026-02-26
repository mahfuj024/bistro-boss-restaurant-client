// import { loadStripe } from '@stripe/stripe-js'
import { FaCreditCard } from 'react-icons/fa'

// TODO: add publishable key
// const stripePromise = loadStripe('') 

function Payment() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">

                <h1 className="cinzel-font text-3xl md:text-4xl font-bold text-center mb-6">
                    Payment
                </h1>

                <div className="flex flex-col gap-4 mb-6">

                    {/* Card Number */}
                    <div className="relative">
                        <FaCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder='Card number'
                            className='border rounded-lg border-gray-400 px-10 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    {/* Card Holder Name */}
                    <input
                        type="text"
                        placeholder='Card holder name'
                        className='border rounded-lg border-gray-400 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />

                </div>

                <button className='w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition'>
                    Pay
                </button>

            </div>
        </div>
    )
}

export default Payment