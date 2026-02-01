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
import chefService from "../../../assets/home/chef-service.jpg"
import SectionTitle from '../../../components/shared/SectionTitle/SectionTitle';

function Category() {
    return (
        <div className='mt-8 md:mt-12 lg:mt-25 max-w-7xl mx-auto'>
            <SectionTitle textTop={"---From 11:00am to 10:00pm---"} textBottom={"ORDER ONLINE"}></SectionTitle>

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

            <div
                className="h-60 md:h-90 lg:h-143 bg-cover bg-center flex items-center justify-center mt-8 md:mt-16 lg:mt-32"
                style={{ backgroundImage: `url(${chefService})` }}
            >
                <div className="bg-white text-center w-85 md:w-160 lg:w-5xl">
                    <div className='text-center py-4 md:my-8 lg:py-16 px-4 md:px-8 lg:px-28'>
                        <h1 className="font-medium text-xl cinzel-font md:text-3xl lg:text-4xl">
                            Bistro Boss
                        </h1>
                        <p className='text-xs md:text-sm lg:text-base mt-1 md:mt-2 lg:mt-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Category