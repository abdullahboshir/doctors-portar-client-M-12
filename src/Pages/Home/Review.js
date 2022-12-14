import React from 'react';


const Review = ({ review }) => {
    const { name, img, nationality } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div className='flex items-center mt-10'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className='mx-5'>
                        <p className='font-bold text-xl'>{name}</p>
                        <p className='text-lg'>California</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;