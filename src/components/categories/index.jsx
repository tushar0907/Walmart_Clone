import React from 'react';
import {categories} from "../../data/category";
// import Slider from "react-slick";

const Category=() => {
      return (
            <div className='flex my-10 h-auto'>
                  {categories.map(item => (
                        <div className='flex flex-1 justify-between flex-col'>
                              <div className='flex flex-col border mx-2 flex-wrap '>
                                    <div className="flex justify-center items-center h-44 flex-col">
                                          <img src={item.img} alt="img1" />
                                    </div>
                                    <div className="flex flex-col w-full py-2 items-center">
                                          <p className='bg-gray-300 backdrop-blur-sm bg-white/30 -mt-7 text-green-900'>{item.cat}</p>
                                          <div className="flex text-lg">{item.name}</div>
                                          <div className="flex text-sm text-center">{item.type}</div>
                                          <div className="flex">{item.star}</div>
                                          <div className="flex font-medium text-lg">{item.price}</div>
                                    </div>
                              </div>
                        </div>
                  ))}
            </div>
      )
}

export default Category