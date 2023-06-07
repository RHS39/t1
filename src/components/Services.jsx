import React from 'react'
import "../styles/Services.scss"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import img3 from "../assets/images/3.jpg"
import img4 from "../assets/images/4.jpg"
import img5 from "../assets/images/5.jpg"
import img6 from "../assets/images/6.jpg"
import img7 from "../assets/images/7.jpg"

const Services = () => {
  return (
    <div>
        <Carousel 
        infiniteLoop 
        showStatus={false}
         autoPlay
         showArrows={false}
         showThumbs={false}
         showIndicators={false}
         interval={2500}
         width={1900}
         
          >
        <div >
                <img  src={img3} alt="Service1" />
                <p className='p'> Manpower managemet </p>
        </div>
        <div>
                <img  src={img4} alt="Service1" />
                <p className='p'>Metal cutting and salwaging work. </p>
            </div>
            <div>
                <img src={img5} alt="Service1" />
                <p className='p'> Penciling.</p>
            </div>
            <div>
                <img src={img6} alt="Service1" />
                <p className='p'> Granding. </p>
            </div>
            <div>
                <img width="" src={img4} alt="Service1" />
                <p className='p'>Metal casting work. </p>
            </div>
       
         </Carousel>
    </div>
  )
}

export default Services