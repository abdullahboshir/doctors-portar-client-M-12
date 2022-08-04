import { format } from 'date-fns';
import React, { useState } from 'react';
import  Loading  from "../Shared/Loading";
import Service from './Service';
import { useQuery } from 'react-query'
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date, setDate }) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://secret-dusk-46242.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='my-10'>
            <h4 className='text-xl text-secondary text-center my-12'>Available Appointments on {format(date, 'PP')}</h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>

            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch = {refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;