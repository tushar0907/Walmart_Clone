import React from 'react';
import {offer} from "../../data/offers";

const Offer=() => {
      return (
            <div className='flex flex-wrap my-8 w-full'>
                  <div className='flex h-10 text-xl my-3 justify-around items-center font-bold w-full'>
                        <div className='flex h-1 border-gray-700 border-t w-10'></div>
                        Get Spooky Low Prices
                        <div className='flex h-1 border-gray-700 border-t w-10'></div>
                  </div>
                  <div className="flex justify-around items-center flex-wrap w-full">
                        {offer.map(item => (
                              <div className='flex flex-col px-2'>
                                    <div className="flex h-28 w-28 overflow-hidden bg-cover justify-center items-center bg-blue-100 rounded-full">
                                          <img src={item.link} alt="" />
                                    </div>
                                    <div key={item.id} className="flex w-28 font-medium text-center text-sm h-10 items-center justify-center">{item.title}</div>
                              </div>
                        ))}
                  </div>
            </div>
      )
}

export default Offer