import React, { FC, useContext, useState } from 'react';
import ButtonBlack from 'components/ButtonBlack';
import { emptyRestaurant, IBooking } from 'types';
import { AppContext } from 'store/store';
import { deleteBooking, getRestaurant } from 'api/api';
import { content } from 'utils/content';

interface BookingItemProps {
    booking: IBooking;
}

const BookingItem: FC<BookingItemProps> = ({ booking }) => {
    const { state, dispatch } = useContext(AppContext);
    const [userRestaurant, setUserRestaurant] = useState(emptyRestaurant);

    const bookingDate = new Date(booking.date).toLocaleString(state.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const hours = new Date(booking.date).getHours().toString().padStart(2, '0');
    const minutes = new Date(booking.date).getMinutes().toString().padStart(2, '0');

    const getUserRestaurant = async () => {
        await getRestaurant(booking.cafeId).then((rest) => {
            rest.parsedTranslation = JSON.parse(rest.translation);
            setUserRestaurant(rest);
        });
    };
    getUserRestaurant();

    const editUserBooking = () => {
        console.log('click');
    };

    const deleteUserBooking = async () => {
        await deleteBooking(booking.id).then(() => {
            console.log('click delete');
            const updatedBookings = state.user.bookings.filter((reserv) => reserv.id !== booking.id);
            const updatedUser = state.user;
            updatedUser.bookings = updatedBookings;
            dispatch({
                type: 'updateUser',
                payload: updatedUser,
            });
            console.log(state.user);
        });
    };

    return (
        <div className='h-72 w-72 sm:w-80 sm:h-80 gap-2 relative drop-shadow-lg'>
            <img
                className='w-full h-full rounded'
                src={`https://restaurants-server-2.onrender.com/${userRestaurant.images[1]}`}
                alt='Restaurant Photo'
            ></img>
            <div className='w-4/5 h-4/5 sm:w-3/4 sm:h-3/4 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 backdrop-blur-sm bg-white/30 rounded'>
                <div className='flex flex-col py-2 px-2.5'>
                    <h2 className='text-xl font-bold leading-5 h-12 text-black drop-shadow-md flex items-center cursor-pointer'>
                        <a>
                            {userRestaurant.parsedTranslation && userRestaurant.parsedTranslation[state.language].name}
                        </a>
                    </h2>
                    <p className='text-sm leading-3 italic font-bold text-black drop-shadow-md'>
                        {userRestaurant.parsedTranslation && userRestaurant.parsedTranslation[state.language].city}
                    </p>
                    <p className='h-6 text-sm leading-3 italic text-black drop-shadow-md'>
                        {userRestaurant.parsedTranslation && userRestaurant.parsedTranslation[state.language].address}
                    </p>
                    <p className='text-3xl mt-1 font-semibold text-black text-end  drop-shadow-md'>
                        {hours}:{minutes}
                    </p>
                    <p className='font-semibold text-end text-black  drop-shadow-md'>
                        {`${content.booking.duration[state.language]}: ${booking.duration} ${
                            content.booking.hours[state.language]
                        }`}
                    </p>
                    <p className='font-semibold text-end text-black  drop-shadow-md'>{bookingDate}</p>
                </div>
                <div className='flex justify-center gap-3 mt-2'>
                    <ButtonBlack width='w-24' height='h-7' buttonText='Edit' onClick={editUserBooking} />
                    <ButtonBlack width='w-24' height='h-7' buttonText='Cancel' onClick={deleteUserBooking} />
                </div>
            </div>
        </div>
    );
};

export default BookingItem;
