import React from 'react';
import {BiSearch} from "react-icons/bi";


const HeadingArea=() => {

      return (
            <div className="flex flex-col justify-center h-52">
                  <div className="flex justify-center p-1 pl-3 h-14">
                        <input className='flex w-full pl-3 border border-[#006097]' placeholder='What are you looking for?' type="text" />
                        <div className='flex h-12 items-center justify-center w-16 bg-[#098ad4]'>
                              <BiSearch size="32" />
                        </div>
                  </div>
                  <div className="flex mt-4 flex-1 bg-blue-100 justify-center items-center">
                        <img src={require('../../assets/advertise.png')} alt="banner" />
                  </div>
            </div>
      )
}

export default HeadingArea