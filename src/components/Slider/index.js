import React from 'react'
import Slider from 'react-slick'
import './slider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../../assets/slider-1.png'
import Slider2 from '../../assets/slider-2.png'


const Sliders = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className='p-5'>
                <Slider className='relative rounded-[20px]' {...settings}>
                    <img src={Slider1} className='w-full h-[45rem]' alt="" />
                    <img src={Slider2} className='w-full h-[45rem]' alt="" />
                </Slider>
                <h1 className='absolute top-[28%] left-[10%] text-[3rem] text-black/80 font-bold'>Dont miss amazing <br /> grocery deals</h1>
            </div>
        </>
    )
}

export default Sliders