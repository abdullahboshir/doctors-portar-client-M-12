import React from 'react';
import doctorSmall from '../../assets/images/doctor-small.png';
import AppointmentBg from '../../assets/images/appointment.png';
import MainButton from '../Shared/MainButton';

const MakeAppointment = () => {
    return (
        <section style={{background: `url(${AppointmentBg})`}} className='flex justify-center items-center mt-20'>
        <div className='flex-1 hidden lg:block'>
            <img className='mt-[-60px]' src={doctorSmall} alt="" />
        </div>
        <div className='flex-1 px-5'>
            <h3 className='text-xl text-primary font-bold py-1'>Appointment</h3>
            <h2 className='text-3xl text-white py-5'>Make an Appintment Today</h2>
            <p className='text-white mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquam culpa nesciunt voluptatem blanditiis eveniet, quasi inventore recusandae veniam voluptates exercitationem perferendis minima ullam esse expedita delectus nam veritatis quo eos illum eius libero odio debitis dicta. Delectus, sint nihil.</p>
            <MainButton>GET STARTED</MainButton>
        </div>
       </section>
    );
};

export default MakeAppointment;