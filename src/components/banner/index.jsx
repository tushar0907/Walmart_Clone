import React from 'react';
import Slider from "react-slick";




const Banner=() => {

      let settings={
            className: "",
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
      };
      return (
            <div className='flex flex-col w-full h-80 my-10'>
                  <Slider {...settings}>

                        <div className="flex overflow-hidden flex-col flex-1 justify-center items-center bg-red-100">

                              <img className='flex bg-contain' src="https://i5.walmartimages.com/dfw/8822aef6-3a67/k2-_63759e9a-85e3-4043-b1fb-a5abaaa53b6f.v1.jpg" alt="" />

                        </div>
                        <div className="flex overflow-hidden flex-col flex-1 justify-center items-center bg-red-100">

                              <img className='flex bg-contain' src="https://i5.walmartimages.com/dfw/8822aef6-3a67/k2-_63759e9a-85e3-4043-b1fb-a5abaaa53b6f.v1.jpg" alt="" />

                        </div>
                  </Slider>

                  <div className="flex flex-1 bg-blue-900 flex-col">
                        <div className="flex justify-center font-bold text-white text-xl">Get ready for gathering</div>
                        <div className="flex text-white flex-col w-full items-center justify-center">
                              <p>From beginning to end,Hamilton</p>
                              <p>Beach has your back.</p>
                        </div>
                        <div className="flex w-full items-center h-16 justify-center">
                              <button className='bg-transparent border-4 border-white w-24 h-12 rounded-full font-bold text-white'>Shop</button>
                        </div>
                  </div>
            </div>
      )
}

export default Banner