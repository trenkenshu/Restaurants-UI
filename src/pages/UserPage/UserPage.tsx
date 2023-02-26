import setParsedTranslation from 'utils/functions/setParsedTranslation';
import UserPageModalReview from 'components/UserPageModalReview';
import React, { useContext, useEffect, useState } from 'react';
import { emptyReview, emptyUser } from 'utils/constants';
import RestaurantCard from 'components/RestaurantCard';
import ModalUserData from 'components/ModalUserData';
import BookingItem from 'components/BookingItem';
import BonusPoints from 'components/BonusPoints';
import { deleteReview, getUser } from 'api/api';
import { useNavigate } from 'react-router-dom';
import ReviewItem from 'components/ReviewItem';
import { AppContext } from 'store/store';
import { content } from 'utils/content';
import Error404 from 'pages/Error404';

const UserPage = () => {
    const { state, dispatch } = useContext(AppContext);
    const [isModalUserInfoOpen, setIsModalUserInfoOpen] = useState(false);
    const [isModalReviewOpen, setIsModalReviewOpen] = useState(false);
    const [currentReview, setCurrentReview] = useState(emptyReview);
    const navigate = useNavigate();
    // console.log('state:::', state);

    useEffect(() => {
        getUser(state.user.id).then((updatedUser) => {
            setParsedTranslation(updatedUser);
            dispatch({
                type: 'updateUser',
                payload: updatedUser,
            });
        });
    }, []);

    const openModalUserInfo = () => {
        setIsModalUserInfoOpen(true);
        document.body.classList.add('active');
    };

    const openModalReview = async (reviewId: number) => {
        const newCurrentReview = state.user.reviews.find((rev) => rev.id === reviewId);
        console.log('newCurrentReview', newCurrentReview);
        newCurrentReview && setCurrentReview(newCurrentReview);
        setIsModalReviewOpen(true);
        document.body.classList.add('active');
    };
    const closeModalReview = () => {
        setIsModalReviewOpen(false);
        document.body.classList.remove('active');
        setCurrentReview(emptyReview);
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

    const deleteUserReview = (id: number) => {
        deleteReview(id, state.user.id).then(() => {
            const updatedUser = state.user;
            updatedUser.reviews = state.user.reviews.filter((rev) => rev.id !== id);
            updatedUser.bonusPoints = updatedUser.bonusPoints - 1;
            setParsedTranslation(updatedUser);
            dispatch({
                type: 'updateUser',
                payload: updatedUser,
            });
        });
    };

    return (
        <>
            {state.user.id === 0 && <Error404 />}
            {state.user.id > 0 && (
                <>
                    <div className='flex flex-col w-full md:w-9/12 2xl:w-9/12 mx-auto pb-10 md:py-5 gap-5 select-none'>
                        <div className='flex flex-col p-5 gap-8 sm:gap-0 bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg relative'>
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
                                            <span className='font-semibold'>
                                                {content.userPage.phone[state.language]}:{' '}
                                            </span>
                                            {state.user.phone}
                                        </p>
                                        <p className='text-sm md:text-base'>
                                            <span className='font-semibold'>E-mail: </span> {state.user.email}
                                        </p>
                                    </div>
                                </div>
                                <BonusPoints bonusPoints={state.user.bonusPoints} />
                            </div>
                            <div className='flex justify-center sm:justify-start'>
                                <button
                                    title={content.userPage.settings[state.language]}
                                    className='h-8 sm:w-8 w-24 sm:bg-sets bg-cover sm:dark:bg-setsWhite sm:text-transparent border-2 sm:border-none border-gray-800 rounded-full sm:opacity-30 hover:opacity-100 transition'
                                    onClick={openModalUserInfo}
                                >
                                    Settings
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col p-5 gap-3 bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                            <h2 className='text-2xl 2xl:text-3xl font-semibold dark:text-corall items-center w-full drop-shadow-md text-center sm:text-start py-2'>
                                {content.userPage.bookings[state.language]}
                            </h2>
                            <div className='flex flex-col flex-wrap sm:flex-row items-center sm:items-start gap-5'>
                                {state.user.bookings.length > 0
                                    ? state.user.bookings.map((booking) => {
                                          if (new Date(booking.date) >= new Date()) {
                                              return <BookingItem booking={booking} key={booking.id} />;
                                          }
                                      })
                                    : `${content.userPage.nobookings[state.language]}`}
                            </div>
                        </div>
                        <div className='flex flex-col p-5 gap-3 bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                            <h2 className='text-2xl 2xl:text-3xl font-semibold dark:text-corall items-center w-full drop-shadow-md text-center sm:text-start py-2'>
                                {content.userPage.reviews[state.language]}
                            </h2>
                            <div className='flex flex-col gap-5 justify-center text-center sm:justify-start sm:text-start'>
                                {state.user.reviews.length > 0
                                    ? state.user.reviews.map((review) => {
                                          return (
                                              <div className='' key={review.id}>
                                                  <div className='-mb-8 w-15 flex items-center justify-end w-full gap-2 z-index-50'>
                                                      <button
                                                          title={content.common.edit[state.language]}
                                                          className='w-4 h-4 bg-edit dark:bg-editWhite bg-cover'
                                                          onClick={() => openModalReview(review.id)}
                                                      ></button>
                                                      <button
                                                          title={content.common.delete[state.language]}
                                                          className='w-4 h-4 mt-1 bg-delete dark:bg-deleteWhite bg-cover'
                                                          onClick={() => deleteUserReview(review.id)}
                                                      ></button>
                                                  </div>
                                                  <ReviewItem review={review} isOnRestaurantPage={false} />
                                              </div>
                                          );
                                      })
                                    : `${content.userPage.noreviews[state.language]}`}
                            </div>
                        </div>
                        <div className='flex flex-col p-5 gap-3 bg-zinc-200 dark:bg-zinc-700 rounded drop-shadow-lg'>
                            <h2 className='text-2xl 2xl:text-3xl font-semibold dark:text-corall items-center w-full drop-shadow-md text-center sm:text-start py-2'>
                                {content.userPage.favorites[state.language]}
                            </h2>
                            <div className='flex flex-wrap sm:flex-row gap-2 min-h-fit justify-center sm:justify-start'>
                                {state.user.favourites.length > 0
                                    ? state.user.favourites.map((restaurant) => {
                                          return (
                                              <div className='w-64 h-96' key={restaurant.id}>
                                                  <RestaurantCard
                                                      restaurant={restaurant}
                                                      isInUserFavotites={checkRestaurant(restaurant.id)}
                                                  />
                                              </div>
                                          );
                                      })
                                    : `${content.userPage.nofavourites[state.language]}`}
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

                    <ModalUserData
                        setIsModalUserInfoOpen={setIsModalUserInfoOpen}
                        isModalUserInfoOpen={isModalUserInfoOpen}
                    />
                    <UserPageModalReview
                        closeModalReview={closeModalReview}
                        isModalReviewOpen={isModalReviewOpen}
                        userReview={currentReview}
                        setUserReview={setCurrentReview}
                    />
                </>
            )}
        </>
    );
};

export default UserPage;
