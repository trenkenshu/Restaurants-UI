import React from 'react';
import ButtonBlack from 'components/ButtonBlack';
import randomrest from '../../assets/images/home-page/carousel/2.jpg';

const BookingItem = () => {
    return (
        <div className='w-60 h-60 gap-2 shadow-md relative shadow-md'>
            <img className='w-full h-full rounded' src={randomrest} alt='Restaurant Photo'></img>
            <div className='w-3/4 h-3/4 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 backdrop-blur-sm bg-white/30 rounded'>
                <div className='flex flex-col py-2 px-2.5'>
                    <h2 className='text-xl font-bold leading-5 h-12 text-black drop-shadow-md flex items-center cursor-pointer'>
                        <a>Restaurant name</a>
                    </h2>
                    <p className='text-3xl -mt-1 font-semibold text-black text-end  drop-shadow-md'>22:00</p>
                    <p className='font-semibold text-end text-black  drop-shadow-md'>30 December 2023</p>
                    <p className='text-sm leading-3 italic text-black text-center drop-shadow-md'>
                        Minsk, Gagrrin str, 1961
                    </p>
                </div>
                <div className='flex justify-center'>
                    <ButtonBlack width='w-24' height='h-7' buttonText='Cancel' />
                </div>
            </div>
        </div>
    );
};

export default BookingItem;
