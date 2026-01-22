import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../../assets/home/01.jpg"
import banner2 from "../../../assets/home/02.jpg"
import banner3 from "../../../assets/home/03.png"
import banner4 from "../../../assets/home/04.jpg"
import banner5 from "../../../assets/home/05.png"
import banner6 from "../../../assets/home/06.png"

function Banner() {
  return (
    <Carousel autoPlay showArrows={false} showStatus={false} showThumbs={false} stopOnHover showIndicators={false}>
      <div>
        <img src={banner1} alt="banner Image" />
      </div>
      <div>
        <img src={banner2} alt="banner Image" />
      </div>
      <div>
        <img src={banner3} alt="banner Image" />
      </div>
      <div>
        <img src={banner4} alt="banner Image" />
      </div>
      <div>
        <img src={banner5} alt="banner Image" />
      </div>
      <div>
        <img src={banner6} alt="banner Image" />
      </div>
    </Carousel>
  )
}

export default Banner