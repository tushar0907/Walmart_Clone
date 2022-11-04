import React from 'react';
import {grocery} from "../../data/grocery";

const Grocery=() => {
      return (
            grocery.map(item => (
                  <div className='flex flex-wrap my-8 w-full'>
                        <div className='flex h-10 text-xl my-3 justify-around items-center font-bold w-full'>
                              <div className='flex h-1 border-gray-700 border-t w-10'></div>
                              {item.heading}
                              <div className='flex h-1 border-gray-700 border-t w-10'></div>
                        </div>

                        <div className="flex justify-around flex-wrap w-full">
                              {item.category.map(cat => (
                                    <div className='flex flex-col px-2'>
                                          <div className="flex h-28 w-28 overflow-hidden bg-cover justify-center items-center bg-blue-100 rounded-full">
                                                <img src={cat.img} alt="" />
                                          </div>
                                          <div key={cat._id} className="flex w-28 font-medium text-center text-sm h-10 items-center justify-center">{cat.title}</div>
                                    </div>
                              ))}
                        </div>

                  </div>
            ))


      )
}

export default Grocery