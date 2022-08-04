import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-5">
        <div className="card-body">
        <div className='text-center'>
        <h2 className="card-title text-secondary"><p>{name}</p></h2>
          <p>
            {
            slots.length ? 
                <span>{slots[0]}</span>: <span className='text-red-500'>Try another date.</span>
            }
          </p>
          <p>{slots.length}  {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
        </div>
          <div className="card-actions justify-center">
            <label
            onClick={() => setTreatment(service)} disabled={slots.length === 0}
            htmlFor="booking-modal" className="btn modal-button btn bg-gradient-to-r from-secondary to-primary border-none text-white uppercase">Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default Service;