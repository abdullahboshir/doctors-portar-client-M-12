import React from 'react';
import contactBg from '../../assets/images/bg.png';
import MainButton from '../Shared/MainButton';

const Contact = () => {
    return (
        <div style={{background: `url(${contactBg})`, backgroundSize: 'cover'}} className='my-20 flex flex-col justify-center items-center py-10'>
            <h3 className='text-xl text-primary font-bold py-1'>Contact Us</h3>
            <h2 className='text-4xl mb-5'>Stay connected with us</h2>
          <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-sm" />
          <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-sm my-3"  />
          <textarea className="textarea textarea-bordered h-24  w-full max-w-sm mb-5" placeholder="Your message"></textarea>
          <MainButton>Submit</MainButton>
        </div>
    );
};

export default Contact;