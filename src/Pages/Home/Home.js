import React from 'react';
import Banner from './Banner';
import Care from './Care';
import Contact from './Contact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
           <div className='px-12'>
           <Banner/>
           <Info/>
           <Services/>
           <Care/>
           <MakeAppointment/>
           <Testimonials/>
           </div>
           <Contact/>
        </div>
    );
};

export default Home;