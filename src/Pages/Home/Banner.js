import React from 'react';
import chair from '../../assets/images/chair.png';
import MainButton from '../Shared/MainButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-none">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm max-w-lg rounded-lg shadow-2xl"/>
          <div>
            <h1 className="text-5xl font-bold">Your new smile starts here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
           <MainButton>GET STARTED</MainButton>
          </div>
        </div>
      </div>
    );
};

export default Banner;