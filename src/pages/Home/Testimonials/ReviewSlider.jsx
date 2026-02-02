import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaQuoteLeft } from "react-icons/fa";

const reviews = [
    "The food was delicious and fresh. Staff were very friendly and attentive. The environment felt warm and welcoming. I really enjoyed my dinner and will definitely visit again with my family.",
    "Great service and beautiful interior design. Every dish was full of flavor, nicely presented, and cooked perfectly. This is the perfect place for family gatherings and special celebrations with friends.",
    "I loved the calm atmosphere and quick service. The menu offered many choices, and everything we ordered tasted amazing. Highly recommended restaurant for anyone who enjoys fresh, flavorful, and well-prepared meals.",
    "Clean tables, polite staff, and tasty food made our visit memorable. Prices were reasonable for the quality provided. The overall experience was excellent and definitely worth another visit.",
    "A wonderful dining experience overall. The desserts were especially impressive, fresh, and delicious. The staff ensured we were comfortable throughout the evening. I highly recommend this restaurant for both lunch and dinner.",
    "Fresh ingredients and balanced flavors in every dish. The restaurant felt cozy and modern. I will bring my friends next time to enjoy the food and experience the welcoming atmosphere.",
    "Excellent customer service and quick food delivery. The ambiance was peaceful and relaxing, making it a perfect place to enjoy a meal. The staff went above and beyond to make us feel welcome.",
    "The restaurant decoration was elegant, modern, and inviting. Food quality was top-notch, with every dish freshly prepared. The staff handled everything professionally from start to finish, making it a flawless dining experience.",
    "We celebrated a birthday here and everything went perfectly. Delicious meals, friendly service, and a comfortable seating arrangement made the night special. I will definitely come back for future celebrations.",
    "Affordable prices with premium taste. The dishes were served hot, fresh, and full of flavor. I truly appreciate the effort they put into customer satisfaction, and I highly recommend this restaurant."
];

export default function ReviewSlider() {
    const [index, setIndex] = useState(0);

    const nextReview = () => {
        setIndex((index + 1) % reviews.length);
    };

    const prevReview = () => {
        setIndex((index - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="relative max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 h-40 lg:h-48">

            {/* Review Text */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-justify px-6 mt-6 md:mt-4 lg:mt-9 sm:px-12 lg:px-20">
                {reviews[index]}
            </p>

            {/* Left Arrow */}
            <SlArrowLeft
                onClick={prevReview}
                className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 cursor-pointer text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-500 hover:text-blue-700 transition"
            />

            {/* Right Arrow */}
            <SlArrowRight
                onClick={nextReview}
                className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 cursor-pointer text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-500 hover:text-blue-700 transition"
            />

        </div>
    );
}
