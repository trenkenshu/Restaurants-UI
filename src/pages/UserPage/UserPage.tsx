import React, { useContext, useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RestaurantItem from 'components/RestaurantItem';
import { createBooking, getRestaurant, getRestaurants } from 'api/api';
import { IRestaurant, ICreateBooking, IUser } from 'types';
import BookingItem from 'components/BookingItem';
import ReviewItem from 'components/ReviewItem';
import { content } from 'utils/content';
import { AppContext } from 'store/store';
import { useNavigate } from 'react-router-dom';
import RestaurantCard from 'components/RestaurantCard';
import ButtonBlack from 'components/ButtonBlack';

const UserPage = () => {
    const { state, dispatch } = useContext(AppContext);
    const navigate = useNavigate();
    console.log(state.user);

    const logOut = () => {
        const user: IUser = {
            id: 0,
            login: '',
            email: '',
            phone: '',
            favourites: [],
            bookings: [],
            reviews: [],
        };
        dispatch({
            type: 'updateUser',
            payload: user,
        });
        navigate('/');
        console.log(state.user);
    };

    const checkRestaurant = (id: number) => {
        let isInFavourites = false;
        state.user.favourites.forEach((rest) => {
            if (rest.id === id) isInFavourites = true;
        });
        return isInFavourites;
    };

    const bodyForReservation: ICreateBooking = {
        clientId: state.user.id,
        cafeId: 3,
        tabelId: 3,
        date: new Date(),
        duration: 3,
    };

    return (
        <div className='flex flex-col w-full md:w-9/12 2xl:w-9/12 mx-auto pb-10 md:py-5 gap-5'>
            <div className='flex flex-col p-5 gap-3 bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-userIcon bg-cover dark:bg-userIconCorall'></div>
                    <h1 className='text-2xl 2xl:text-3xl font-semibold dark:text-corall items-center drop-shadow-md'>
                        {state.user.login}
                    </h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-2'>
                        <p className='text-sm md:text-base'>
                            <span className='font-semibold'>{content.userPage.phone[state.language]}: </span>
                            {state.user.phone}
                        </p>
                        <button className='w-4 h-4 bg-edit dark:bg-editWhite bg-cover bg-center'></button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-sm md:text-base'>
                            <span className='font-semibold'>E-mail: </span> {state.user.email}
                        </p>
                        <button className='w-4 h-4 bg-edit dark:bg-editWhite bg-cover bg-center'></button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-sm md:text-base'>{content.userPage.changePassword[state.language]}</p>
                        <button className='w-4 h-4 bg-edit dark:bg-editWhite bg-cover bg-center'></button>
                    </div>
                    <button
                        onClick={() => {
                            createBooking(bodyForReservation);
                        }}
                    >
                        Make a reservation
                    </button>
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
                    {content.userPage.favorites[state.language]}
                </h2>
                <div className='flex flex-wrap sm:flex-row gap-2 min-h-fit justify-center lg:justify-start'>
                    {state.user.favourites.map((restaurant) => {
                        return (
                            <div className='w-64 h-80 lg:h-96' key={restaurant.id}>
                                <RestaurantCard
                                    restaurant={restaurant}
                                    isInUserFavotites={checkRestaurant(restaurant.id)}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='flex p-5 gap-3 items-center justify-end bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                <h3>{content.userPage.logout[state.language]}</h3>
                <button
                    className='w-8 h-8 bg-logout dark:bg-logoutWhite bg-cover cursor-pointer hover:shadow-red-600'
                    onClick={() => logOut()}
                ></button>
            </div>
            <div className='fixed w-full h-full bg-transparent z-90'>
                <div className='z-100 flex justify-center items-center gap-5 flex-col rounded fixed top-1/2 left-1/2 w-96 min-h-max p-8 bg-smoke-gray dark:bg-zinc-800 -translate-x-2/4 -translate-y-1/2 opacity-100 shadow-gray-300 shadow-2xl'>
                    <h4>Modal window</h4>
                    <input className='w-9/12' type='text'></input>
                    <div className='flex flex-col sm:flex-row w-full gap-5 justify-center items-center'>
                        <ButtonBlack
                            width={'w-36'}
                            height={'h-8'}
                            fontsize={'text-xl'}
                            buttonText={content.userPage.cancel[state.language]}
                        />
                        <ButtonBlack
                            width={'w-36'}
                            height={'h-8'}
                            fontsize={'text-xl'}
                            buttonText={content.userPage.edit[state.language]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
