import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firbase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ date, setTreatment, treatment, refetch }) => {
    const { _id, name, slots, price } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');


    const handleBooking = e => {
        e.preventDefault()
        const slot = e.target.slot.value;
        const phone = e.target.phone.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: phone
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json' 
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
              if(data.success){
                toast(`Appointment is set ${formattedDate} at ${slot}`)
              }
              else{
                toast.error(`Already you have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
              }
               refetch()
                setTreatment(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input  type="text" disabled  value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />

                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    value={slot}
                                    key={index}
                                >{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" readOnly value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />

                        <input name='email' type="email" readOnly value={user?.email || ''} className="input input-bordered w-full max-w-xs" />

                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value='Submit' className="btn btn-secondary w-full max-w-xs" />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;