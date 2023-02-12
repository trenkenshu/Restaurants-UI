import React, { useContext, useState } from 'react';
import { createBooking, createReview, getUser } from 'api/api';
import { ICreateBooking, emptyUser, ICreateReview } from 'types';
import BookingItem from 'components/BookingItem';
import ReviewItem from 'components/ReviewItem';
import { content } from 'utils/content';
import { AppContext } from 'store/store';
import { useNavigate } from 'react-router-dom';
import RestaurantCard from 'components/RestaurantCard';
import ModalUserData from 'components/ModalUserData';

const UserPage = () => {
    const { state, dispatch } = useContext(AppContext);
    const [isModalUserInfoOpen, setIsModalUserInfoOpen] = useState(false);
    const navigate = useNavigate();
    console.log('user.state:::', state.user);

    const openModal = () => {
        setIsModalUserInfoOpen(true);
        document.body.classList.add('active');
    };

    const logOut = () => {
        dispatch({
            type: 'updateUser',
            payload: emptyUser,
        });
        navigate('/');
        window.scrollTo(0, 0);
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
        cafeId: 13,
        tableId: 1,
        date: new Date(),
        duration: 7.5,
    };

    const makeReservation = () => {
        createBooking(bodyForReservation).then(() => {
            getUser(state.user.id).then((updatedUser) => {
                dispatch({
                    type: 'updateUser',
                    payload: updatedUser,
                });
            });
        });
    };

    const bodyForReview: ICreateReview = {
        clientId: state.user.id,
        cafeId: 7,
        text: 'The service was impeccable and the food was phenomenal. Bruno, the owner, went out of his way to make us feel welcome and taken care of. We’ll be adding Club A to the rotation for our upcoming visits',
        rating: 4.7,
    };

    const makeReview = () => {
        createReview(bodyForReview).then(() => {
            getUser(state.user.id).then((updatedUser) => {
                dispatch({
                    type: 'updateUser',
                    payload: updatedUser,
                });
            });
        });
    };

    return (
        <>
            <div className='flex flex-col w-full md:w-9/12 2xl:w-9/12 mx-auto pb-10 md:py-5 gap-5 select-none'>
                <div className='flex flex-col p-5 gap-3 bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg relative'>
                    <div className='flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between gap-5'>
                        <div className='w-full sm:w-6/12 flex flex-col items-center sm:items-start gap-5'>
                            <div className='flex items-center gap-3'>
                                <div className='w-10 h-10 bg-userIcon bg-cover dark:bg-userIconCorall'></div>
                                <h1 className='text-2xl 2xl:text-3xl font-semibold dark:text-corall items-center drop-shadow-md'>
                                    {state.user.login}
                                </h1>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p className='text-sm md:text-base'>
                                    <span className='font-semibold'>{content.userPage.phone[state.language]}: </span>
                                    {state.user.phone}
                                </p>
                                <p className='text-sm md:text-base'>
                                    <span className='font-semibold'>E-mail: </span> {state.user.email}
                                </p>
                            </div>
                        </div>
                        <div className='w-9/12 sm:w-5/12 flex flex-col items-center'>
                            <div className='w-16 h-16 bg-medalBronze bg-cover drop-shadow-md shadow-gray-900'></div>
                            <h3 className='p-1'>25 бонусов</h3>
                            <h2 className='text-xl 2xl:text-2xl text-center font-semibold dark:text-smoke-gray items-center drop-shadow-md'>
                                Ваш уровень: <b>любитель</b>
                            </h2>
                            <div className='w-full'>
                                <div className='flex items-center gap-1 w-full h-4 my-5 bg-gradient-to-r from-lime-600 via-yellow-400 to-red-500 rounded'>
                                    <div className='w-1/4 h-8 border-r-4 border-black'></div>
                                </div>
                                <p className='w-4/12 flex justify-end text-sm font-bold -pr-4'>25 / 100</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center sm:justify-start'>
                        <button
                            className='h-8 sm:w-8 w-24 sm:bg-sets bg-cover sm:dark:bg-setsWhite sm:text-transparent border-2 sm:border-none border-gray-800 rounded-full opacity-50 hover:opacity-100 transition'
                            onClick={openModal}
                        >
                            Settings
                        </button>
                    </div>
                    <button className='mt-10 border' onClick={() => makeReservation()}>
                        Button for test: Make a reservation
                    </button>
                    <button className='mt-10 border' onClick={() => makeReview()}>
                        Button for test: Create a review
                    </button>
                </div>
                <div className='flex flex-col p-5 gap-3 bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                    <h2 className='text-2xl 2xl:text-3xl font-semibold dark:text-corall items-center w-full drop-shadow-md text-center sm:text-start py-2'>
                        {content.userPage.bookings[state.language]}
                    </h2>
                    <div className='flex flex-col flex-wrap sm:flex-row items-center sm:items-start gap-5'>
                        {state.user.bookings.map((booking) => {
                            return <BookingItem booking={booking} key={booking.id} />;
                        })}
                    </div>
                </div>
                <div className='flex flex-col p-5 gap-3 bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                    <h2 className='text-2xl 2xl:text-3xl font-semibold dark:text-corall items-center w-full drop-shadow-md text-center sm:text-start py-2'>
                        {content.userPage.reviews[state.language]}
                    </h2>
                    <div className='flex flex-col gap-5'>
                        <ReviewItem />
                        <ReviewItem />
                        <ReviewItem />
                    </div>
                </div>
                <div className='flex flex-col p-5 gap-3 bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                    <h2 className='text-2xl 2xl:text-3xl font-semibold dark:text-corall items-center w-full drop-shadow-md text-center sm:text-start py-2'>
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
            </div>
            {isModalUserInfoOpen && (
                <ModalUserData
                    setIsModalUserInfoOpen={setIsModalUserInfoOpen}
                    isModalUserInfoOpen={isModalUserInfoOpen}
                />
            )}
        </>
    );
};

export default UserPage;
