import React from 'react';
import {MdAlbum, MdFavorite, MdOutlineRefresh, MdOutlineTravelExplore} from "react-icons/md";
import {GiSoundOn} from "react-icons/gi";
import {RiAlbumLine} from "react-icons/ri";
import {FaFolder, FaMicrophoneAlt} from "react-icons/fa";
import {BiBookAdd, BiRadio} from "react-icons/bi";
import {MdOutlineClose} from "react-icons/md";




const Sidebar=() => {

    return (
        <div className="flex absolute z-5 lg:relative top-0 left-0 z-10 h-full duration-300 sidebar w-56 bg-[#e8ecef] lg:w-56 transition-all ease-in-out -translate-x-full lg:-translate-x-0">

            <div className=" flex flex-col h-auto w-full xl:ml-0">

                <div className="flex h-24 justify-center">
                    <div className="flex mt-3 w-40 ml-4 font-medium text-lg">
                        <img className="flex h-12 w-12" src="https://icon-library.com/images/eagle-icon-png/eagle-icon-png-21.jpg" alt="" />
                        <p className="flex h-12 items-center">Groovy</p>
                        <div className="flex w-full justify-end h-10 items-center">
                            <MdOutlineClose size="22" onClick={() => {
                                document.querySelector(".sidebar").classList.toggle("-translate-x-full")
                            }} className="lg:hidden" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col justify-center">
                    <div className="flex w-full justify-center">
                        <p className="flex pl-4 h-12 items-center w-32 font-medium text-sm text-[#b8bbc0]">MENU</p>
                    </div>
                    <div className="flex flex-col flex-1 justify-center">
                        <div className="flex w-full h-full justify-center text-[#70747e]">
                            <div className="flex flex-col h-full w-32 justify-between">
                                <div className="flex justify-between items-start hover:text-[#5675f9] cursor-pointer">
                                    <div className="flex w-16 justify-center h-6 items-center">
                                        <p className="flex cursor-pointer"><MdOutlineTravelExplore size="20" />
                                        </p>
                                    </div>
                                    <div className="flex w-full">Explore</div>
                                </div>
                                <div className="flex justify-between items-start hover:text-[#5675f9] cursor-pointer">
                                    <div className="flex w-16 justify-center h-6 items-center">
                                        <p className="flex cursor-pointer"><GiSoundOn size="20" />
                                        </p>
                                    </div>
                                    <div className="flex w-full">Genres</div>
                                </div>
                                <div className="flex justify-between items-start hover:text-[#5675f9] cursor-pointer">
                                    <div className="flex w-16 justify-center h-6 items-center">
                                        <p className="flex cursor-pointer"><RiAlbumLine size="20" />
                                        </p>
                                    </div>
                                    <div className="flex w-full">Albums</div>
                                </div>
                                <div className="flex justify-between items-start hover:text-[#5675f9] cursor-pointer">
                                    <div className="flex w-16 justify-center h-6 items-center">
                                        <p className="flex cursor-pointer"><FaMicrophoneAlt size="20" />
                                        </p>
                                    </div>
                                    <div className="flex w-full">Artists</div>
                                </div>
                                <div className="flex justify-between items-start hover:text-[#5675f9] cursor-pointer">
                                    <div className="flex w-16 justify-center h-6 items-center">
                                        <p className="flex cursor-pointer"><BiRadio size="20" />
                                        </p>
                                    </div>
                                    <div className="flex w-full">Radio</div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col justify-center mt-8">

                    <div className="flex w-full justify-center">
                        <p className="flex pl-4 h-12 items-center w-32 font-medium text-sm text-[#b8bbc0]">LIBRARY</p>
                    </div>
                    <div className="flex flex-col flex-1 justify-center">
                        <div className="flex w-full h-full justify-center text-[#70747e]">
                            <div className="flex flex-col h-full w-32 justify-around">
                                <div className="flex justify-between items-start hover:text-[#5675f9] cursor-pointer">
                                    <div className="flex w-16 justify-center h-6 items-center">
                                        <p className="flex cursor-pointer"><MdOutlineRefresh size="20" />
                                        </p>
                                    </div>
                                    <div className="flex w-full">Recent</div>
                                </div>
                                <div className="flex justify-between items-start hover:text-[#5675f9] cursor-pointer">
                                    <div className="flex w-16 justify-center h-6 items-center">
                                        <p className="flex cursor-pointer"><MdAlbum size="20" />
                                        </p>
                                    </div>
                                    <div className="flex w-full">Album</div>
                                </div>
                                <div className="flex justify-between items-start hover:text-[#5675f9] cursor-pointer">
                                    <div className="flex w-16 justify-center h-6 items-center">
                                        <p className="flex cursor-pointer"><MdFavorite size="20" />
                                        </p>
                                    </div>
                                    <div className="flex w-full">Favourite</div>
                                </div>
                                <div className="flex justify-between items-start hover:text-[#5675f9] cursor-pointer">
                                    <div className="flex w-16 justify-center h-6 items-center">
                                        <p className="flex cursor-pointer"><FaFolder size="17" />
                                        </p>
                                    </div>
                                    <div className="flex w-full">Local</div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
                <div className="flex flex-1 flex-col justify-center mt-8">

                    <div className="flex w-full justify-center">
                        <p className="flex pl-4 h-12 items-center w-32 font-medium text-sm text-[#b8bbc0]">PLAYLIST</p>
                    </div>
                    <div className="flex flex-col flex-1 justify-center">
                        <div className="flex w-full h-full justify-center text-[#70747e]">
                            <div className="flex flex-col h-full w-32 justify-around">
                                <div className="flex justify-between items-start hover:text-[#5675f9] cursor-pointer">
                                    <div className="flex w-16 justify-center h-6 items-center">
                                        <p className="flex cursor-pointer"><BiBookAdd size="20" />
                                        </p>
                                    </div>
                                    <div className="flex w-full ">Create New</div>
                                </div>
                                <div className="flex justify-between items-start hover:text-[#5675f9] cursor-pointer">
                                    <div className="flex w-16 justify-center h-6 items-center">
                                        <p className="flex cursor-pointer"><RiAlbumLine size="20" />
                                        </p>
                                    </div>
                                    <div className="flex w-full text-sm h-6 items-center">Best of 2022</div>
                                </div>
                                <div className="flex justify-between items-start hover:text-[#5675f9] cursor-pointer">
                                    <div className="flex w-16 justify-center h-6 items-center">
                                        <p className="flex cursor-pointer"><RiAlbumLine size="20" />
                                        </p>
                                    </div>
                                    <div className="flex w-full text-sm h-6 items-center">Design Flow</div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="flex h-10"></div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar