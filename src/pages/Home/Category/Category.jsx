import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import Heading from '../../../components/shared/Heading/Heading';

function Category() {
    return (
        <div className='mt-8 md:mt-12 lg:mt-25 max-w-7xl mx-auto'>
            <Heading textTop={"---From 11:00am to 10:00pm---"} textBottom={"ORDER ONLINE"}></Heading>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="slider image" />
                    <h1 className='text-base md:text-2xl lg:text-3xl font-light drop-shadow-2xl text-center text-white -mt-7 md:-mt-11 lg:-mt-15'>SALADS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="slider image" />
                    <h1 className='text-base md:text-2xl lg:text-3xl drop-shadow-2xl font-light text-center text-white -mt-7 md:-mt-11 lg:-mt-15'>PIZZAS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="slider image" />
                    <h1 className='text-base md:text-2xl lg:text-3xl font-light drop-shadow-2xl text-center text-white -mt-7 md:-mt-11 lg:-mt-15'>SOUPS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="slider image" />
                    <h1 className='text-base md:text-2xl lg:text-3xl font-light drop-shadow-2xl text-center text-white -mt-7 md:-mt-11 lg:-mt-15'>DESSERTS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="slider image" />
                    <h1 className='text-base md:text-2xl lg:text-3xl font-light drop-shadow-2xl text-center text-white -mt-7 md:-mt-11 lg:-mt-15'>SALADS</h1>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Category