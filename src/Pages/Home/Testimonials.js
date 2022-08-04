import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            review: '',
            img: people1
        },
        {
            id: 2,
            name: 'Winson Herry',
            review: '',
            img: people2
        },
        {
            id: 3,
            name: 'Winson Herry',
            review: '',
            img: people3
        },
    ]
    return (
        <section>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl'>Whate our Partients say</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review.id} review={review}/>)
                }
            </div>
        </section>
    );
};

export default Testimonials;