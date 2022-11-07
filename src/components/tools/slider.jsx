import React from 'react';
import {MdArrowBackIos, MdArrowForwardIos} from "react-icons/md";

const Slider=() => {
      // const slides=[""]
      // const [next, setNext]=React.useState(0);
      // React.useEffect(() => {
      //       const next=(next+1)%slides.length;
      //       const id=setTimeout(() => setNext(next), 2000);
      //       return () => clearTimeout(id);
      // }, [next]);
      return (
            <div className='flex w-full justify-center h-80 bg-gray-500'>
                  <p className='flex items-center'><MdArrowBackIos /></p>
                  <div className='flex justify-center w-96'>
                        <img src="" alt="" />

                  </div>
                  <p className='flex items-center justify-end'><MdArrowForwardIos /></p>

            </div>
      )
}

export default Slider