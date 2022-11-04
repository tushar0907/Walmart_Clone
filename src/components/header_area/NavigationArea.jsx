import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineShoppingCart} from "react-icons/ai"

const SearchArea=() => {
    return (
        <div className="flex h-14 w-full">
            <div className="flex h-14 w-1/12 items-center">
                <div className="flex smd:flex-1 md:w-72 md:ml-10 smd:ml-0 justify-between">
                    <div className="flex smd:w-80 md:w-64 justify-around font-medium text-sm text-[#93959b] smd:pl-4 md:pl-10 lg:w-56">
                        <GiHamburgerMenu style={{color: "#42aaf5"}} size="28" className="lg:hidden ml-4" onClick={() => {
                            document.querySelector(".sidebar")?.classList.toggle("-translate-x-full")
                        }} />
                    </div>
                </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <img src="https://logos-download.com/wp-content/uploads/2016/02/Walmart_logo_transparent_png.png" alt="walmart logo" width="160px" />
            </div>
            <div className="flex w-1/6 justify-center items-center">
                <AiOutlineShoppingCart style={{color: "#42aaf5"}} size="28" />
            </div>
        </div>
    )
}

export default SearchArea