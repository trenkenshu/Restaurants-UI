import React, { useContext, useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RestaurantItem from 'components/RestaurantItem';
import { getRestaurant, getRestaurants } from 'api/api';
import { IRestaurant } from 'types';
import BookingItem from 'components/BookingItem';
import ReviewItem from 'components/ReviewItem';
import { content } from 'utils/content';
import { AppContext } from 'store/store';

const UserPage = () => {
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
    }, []);

    return (
        <div className='flex flex-col w-full md:w-9/12 2xl:w-9/12 mx-auto pb-10 md:py-5 gap-5'>
            <div className='flex flex-col p-5 gap-3 bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-userIcon bg-cover dark:bg-userIconCorall'></div>
                    <h1 className='text-2xl 2xl:text-3xl font-semibold dark:text-corall items-center drop-shadow-md'>
                        User Name
                    </h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-2'>
                        <p className='text-sm md:text-base'>
                            <span className='font-semibold'>{content.userPage.phone[state.language]}:</span> +19999999995
                        </p>
                        <button className='w-4 h-4 bg-edit dark:bg-editWhite bg-cover bg-center'></button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-sm md:text-base'>
                            <span className='font-semibold'>E-mail:</span> someemail@gmail.com
                        </p>
                        <button className='w-4 h-4 bg-edit dark:bg-editWhite bg-cover bg-center'></button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col p-5 gap-3 bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                <h2 className='text-2xl 2xl:text-3xl font-semibold dark:text-corall items-center w-full drop-shadow-md'>
                    {content.userPage.bookings[state.language]}
                </h2>
                <div className='flex flex-col flex-wrap sm:flex-row gap-5'>
                    <BookingItem />
                    <BookingItem />
                    <BookingItem />
                </div>
            </div>
            <div className='flex flex-col p-5 gap-3 bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                <h2 className='text-2xl 2xl:text-3xl font-semibold dark:text-corall items-center w-full drop-shadow-md'>
                    {content.userPage.reviews[state.language]}
                </h2>
                <div className='flex flex-col gap-5'>
                    <ReviewItem />
                    <ReviewItem />
                    <ReviewItem />
                </div>
            </div>
            <div className='flex flex-col p-5 gap-3 bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                <h2 className='text-2xl 2xl:text-3xl font-semibold dark:text-corall items-center w-full drop-shadow-md'>
                    {content.userPage.favorite[state.language]}
                </h2>
                <div className='flex flex-col gap-5'>
                    {restaurants.map((el, index) => {
                        if (index < 3) {
                            return (
                                <div className='w-full' key={index}>
                                    <RestaurantItem restaurant={el} />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
            <div className='flex p-5 gap-3 items-center justify-end bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                <h3>{content.userPage.logout[state.language]}</h3>
                <div className='w-8 h-8 bg-logout dark:bg-logoutWhite bg-cover cursor-pointer hover:shadow-red-600'></div>
            </div>
        </div>
    );
};

export default UserPage;
