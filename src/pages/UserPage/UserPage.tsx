import RestaurantCart from 'components/RestaurantCart';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RestaurantItem from 'components/RestaurantItem';

const UserPage = () => {
    return (
        <div className='flex flex-col w-11/12 2xl:w-9/12 mx-auto pb-10 md:py-5 gap-5'>
            <div className='flex flex-col p-5 gap-3 bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-userIcon bg-cover dark:bg-userIconWhite'></div>
                    <h1 className='text-2xl 2xl:text-3xl font-semibold dark:text-smoke-gray items-center '>
                        User Name
                    </h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <p>
                        <span className='font-semibold'>Phone:</span> +19999999995
                    </p>
                    <p>
                        <span className='font-semibold'>E-mail:</span> ddfvdf@hhhut.te
                    </p>
                </div>
            </div>
            <div className='flex flex-col p-5 gap-3 bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                <h2 className='text-2xl 2xl:text-3xl font-semibold dark:text-smoke-gray items-center w-full'>
                    My bookings
                </h2>
            </div>
            <div className='flex flex-col p-5 gap-3 bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                <h2 className='text-2xl 2xl:text-3xl font-semibold dark:text-smoke-gray items-center w-full'>
                    My reviews
                </h2>
            </div>
            <div className='flex flex-col p-5 gap-3 bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                <h2 className='text-2xl 2xl:text-3xl font-semibold dark:text-smoke-gray items-center w-full'>
                    My favorites
                </h2>
                <div className='flex flex-col gap-5'>
                    <div className='w-full'>
                        <RestaurantItem />
                    </div>
                    <div className='w-full'>
                        <RestaurantItem />
                    </div>
                    <div className='w-full'>
                        <RestaurantItem />
                    </div>
                </div>
            </div>
            <div className='flex p-5 gap-3 items-center justify-end bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                <h3>Log out</h3>
                <div className='w-8 h-8 bg-logout dark:bg-logoutWhite bg-cover cursor-pointer'></div>
            </div>
        </div>
    );
};

export default UserPage;
