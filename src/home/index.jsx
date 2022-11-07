import React from 'react';
import NavigationArea from '../components/header_area/NavigationArea';
import Sidebar from '../components/header_area/Sidebar';
import HeadingArea from "../components/header_area/HeadingArea";
import Banner from '../components/banner';
import Offer from "../components/offers_section";
import Department from '../components/shop_departments';
import Grocery from '../components/grocery_section';
import Category from '../components/categories';
import Footer from '../components/footer';
import Slider from '../components/tools/slider';


const Home=() => {
      return (
            <div className='flex flex-col w-full'>
                  <Sidebar />
                  <NavigationArea />
                  <HeadingArea />
                  <Banner />
                  <Offer />
                  <Department />
                  <Grocery />
                  <Category />
                  <Footer />

            </div>
      );
}

export default Home;
