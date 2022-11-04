import React from 'react';
import {footer} from '../../data/footerData';
import {TbBrandMeta} from "react-icons/tb";
import {GrInstagram, GrPinterest} from "react-icons/gr";
import {BsTwitter} from "react-icons/bs";
import {BiChevronRight} from "react-icons/bi";

const Footer=() => {
      return (
            <div className='flex flex-col'>
                  {footer.map(item => (
                        <React.Fragment>
                              <div className="flex flex-col">
                                    <div className="flex text-lg font-medium text-blue-500 w-full p-3">{item.firstHead}
                                    </div>
                                    <div className="flex p-3 text-sm w-11/12">{item.firstQuote}</div>
                                    <div className="flex p-3">
                                          <input className='border border-gray-400 rounded-lg p-3 w-3/4 bg-white text-black' type="email" name="email" placeholder="Enter Email Address" />
                                    </div>
                                    <div className="flex p-3">
                                          <button className='bg-orange-600 w-3/5 h-12 rounded-lg text-white font-bold'>
                                                Subscribe
                                          </button>
                                    </div>
                              </div>
                              <div className="flex flex-col">
                                    <div className="flex text-sm p-3">
                                          {item.buttonQuote}
                                    </div>
                                    <div className="flex p-3 font-medium text-lg text-blue-500">Connect with us</div>
                                    <div className="flex p-3 text-sm w-11/12">
                                          {item.secondQuote}
                                    </div>
                                    <div className="flex pt-6 justify-around">
                                          <div className="flex w-10 h-10 justify-center items-center rounded-lg bg-blue-500 text-white"><TbBrandMeta size={30} /></div>
                                          <div className="flex w-10 h-10 justify-center items-center rounded-lg bg-blue-500 text-white"><GrInstagram size={30} /></div>
                                          <div className="flex w-10 h-10 justify-center items-center rounded-lg bg-blue-500 text-white"><BsTwitter size={30} /></div>
                                          <div className="flex w-10 h-10 justify-center items-center rounded-lg bg-blue-500 text-white"><GrPinterest size={30} /></div>
                                    </div>
                              </div>
                        </React.Fragment>
                  ))}

                  <div className="flex justify-around flex-col w-full mt-12 bg-blue-600 h-20">
                        <div className="flex text-white justify-around">
                              <div className="flex items-center"><BiChevronRight />Francias</div>
                              <div className="flex items-center"><BiChevronRight />Help</div>
                              <div className="flex items-center"><BiChevronRight />Terms of Use</div>
                              <div className="flex items-center"><BiChevronRight />Privacy Center</div>
                        </div>
                        <div className="flex text-white justify-center">Copyright@Walmart 2022</div>
                  </div>

            </div>
      )
}

export default Footer