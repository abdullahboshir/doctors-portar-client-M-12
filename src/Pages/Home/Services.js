import React from 'react';
import Service from './Service';
import icon1 from '../../assets/images/fluoride.png';
import icon2 from '../../assets/images/cavity.png';
import icon3 from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {id: 1, icon: icon1, name: 'Fluoride Treatment', des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'},
        {id: 2, icon: icon2, name: 'Cavity Filling', des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'},
        {id: 3, icon: icon3, name: 'Teeth Whitening', des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'},
    ]
    return (
        <div className='my-28'>
           <div className='text-center'>
           <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
            <h2 className='text-4xl'>Services We Provide</h2>
           </div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12'>
           { 
           services.map(service => <Service key={service.id} service={service}/>)
           }
          </div>
        </div>
    );
};

export default Services;