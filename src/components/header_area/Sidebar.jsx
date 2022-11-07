import React from 'react';
import {MdArrowBackIos} from "react-icons/md";
import {HiShoppingBag} from "react-icons/hi";
import {AiOutlineUser} from "react-icons/ai";
import {SiMapbox} from "react-icons/si";
import {TbWorld} from "react-icons/tb";
import {BsJournalText} from "react-icons/bs";
import {GiShoppingBag} from "react-icons/gi";


const Sidebar=() => {

    return (
        <div className="flex flex-col absolute z-5 bg-white lg:relative top-0 left-0 z-10 h-full duration-300 sidebar w-full transition-all ease-in-out -translate-x-full lg:-translate-x-0">
            <div className="flex h-14 bg-blue-500 items-center w-full">
                <div className="flex pl-4 cursor-pointer text-white flex-1 h-10 items-center">
                    <MdArrowBackIos size="22" onClick={() => {
                        document.querySelector(".sidebar").classList.toggle("-translate-x-full")
                    }} className="lg:hidden" />
                </div>
                <div className="flex cursor-pointer flex-1 text-white font-medium justify-end pr-4">
                    Sign In/ Join Now
                </div>
            </div>
            <div className="flex w-full p-4 h-14 border-b border-blue-500 text-blue-500 items-center font-bold text-md">
                <HiShoppingBag size={30} />
                <p>
                    Departments
                </p>
            </div>
            <div className="flex flex-col font-medium h-80 justify-around pt-5 border-b border-blue-500 text-blue-500">
                <p className='w-full h-10 items-center justify-start pl-3'><p className='w-32 cursor-pointer'>Singles Week</p></p>
                <p className='w-full h-10 items-center justify-start pl-3'><p className='w-32 cursor-pointer'>Christmas</p></p>
                <p className='w-full h-10 items-center justify-start pl-3'><p className='w-32 cursor-pointer'>Electronics</p></p>
                <p className='w-full h-10 items-center justify-start pl-3'><p className='w-32 cursor-pointer'>Toys</p></p>
                <p className='w-full h-10 items-center justify-start pl-3'><p className='w-32 cursor-pointer'>Clothing</p></p>
                <p className='w-full h-10 items-center justify-start pl-3'><p className='w-32 cursor-pointer'>Deals</p></p>


            </div>
            <div className="flex h-5/6 border-b border-blue-500 p-3 flex-col text-blue-500 font-bold text-lg justify-start">
                <div className="flex items-center"><AiOutlineUser size={30} /><p className='pl-2 w-32 cursor-pointer'>My account</p></div>
                <div className="flex items-center pt-5"><SiMapbox size={30} /><p className='pl-2 w-32 cursor-pointer'>Store finder</p></div>
                <div className="flex items-center pt-5"><BsJournalText size={30} /><p className='pl-2 w-32 cursor-pointer'>Flyers</p></div>
                <div className="flex items-center pt-5"><TbWorld size={30} /><p className='pl-2 w-32 cursor-pointer'>Francias</p></div>
            </div>

            <div className="flex text-blue-500 h-14 items-center">
                <GiShoppingBag size={30} /><p>Shop Grocery</p>
            </div>
        </div>
    )
}

export default Sidebar