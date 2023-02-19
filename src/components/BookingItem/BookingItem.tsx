import React, { FC, useContext } from 'react';
import ButtonBlack from 'components/ButtonBlack';
import { IBooking } from 'types';
import { AppContext } from 'store/store';
import { deleteBooking } from 'api/api';
import { content } from 'utils/content';
import { useNavigate } from 'react-router-dom';
import getCalendarDate from 'utils/functions/getCalendarDate';
import { baseURL } from 'utils/constants';

interface BookingItemProps {
    booking: IBooking;
}

const BookingItem: FC<BookingItemProps> = ({ booking }) => {
    const { state, dispatch } = useContext(AppContext);

    const bookingDate = getCalendarDate(new Date(booking.date), state.language);
    const hours = new Date(booking.date).getHours().toString().padStart(2, '0');
    const minutes = new Date(booking.date).getMinutes().toString().padStart(2, '0');

    const deleteUserBooking = async () => {
        console.log(booking.id, typeof booking.id);
        await deleteBooking(booking.id, state.user.id).then(() => {
            console.log('click delete');
            const updatedUser = state.user;
            updatedUser.bookings = state.user.bookings.filter((reserv) => reserv.id !== booking.id);
            dispatch({
                type: 'updateUser',
                payload: updatedUser,
            });
            console.log(state.user);
        });
    };

    const navigate = useNavigate();
    const goToRestaurantPage = (id: number) => {
        navigate(`/restaurants/${id}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className='h-72 w-72 gap-2 relative drop-shadow-lg'>
            <img
                className='w-full h-full rounded'
                src={`${baseURL}/${booking.cafe.images[0]}`}
                alt='Restaurant Photo'
            ></img>
            <div className='w-4/5 h-4/5 sm:w-3/4 sm:h-3/4 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 backdrop-blur-sm bg-white/30 rounded'>
                <div className='flex flex-col py-2 px-2.5'>
                    <button
                        className='text-xl font-bold leading-5 h-12 text-black drop-shadow-md flex text-start items-center cursor-pointer'
                        onClick={() => goToRestaurantPage(booking.cafeId)}
                    >
                        {booking.cafe.name}
                    </button>
                    <p className='text-sm leading-3 italic font-bold text-black drop-shadow-md py-0.5'>
                        {booking.cafe.parsedTranslation && booking.cafe.parsedTranslation[state.language].city}
                    </p>
                    <p className='h-6 text-sm leading-3 italic text-black drop-shadow-md'>
                        {booking.cafe.parsedTranslation && booking.cafe.parsedTranslation[state.language].address}
                    </p>
                    <p className='text-3xl -mt-3 font-semibold text-black text-end drop-shadow-md'>
                        {hours}:{minutes}
                    </p>
                    <div className='font-bold text-end text-black -mt-1 drop-shadow-md'>
                        {bookingDate.split(', ')[1]}
                    </div>
                    <p className='text-sm text-end text-black leading-4'>{`${content.booking.guest[state.language]}${
                        booking.guestName
                    }`}</p>
                    <p className='text-sm text-end text-black leading-4'>
                        {`${content.booking.table[state.language]} №${booking.tableId}
                        ${content.booking.forDuration[state.language]}
                        ${booking.duration} ${content.booking.hours[state.language]}`}
                    </p>
                    {/* <p className='text-sm text-end text-black leading-4'>
                        {`${content.booking.table[state.language]} №${booking.tableId}
                        ${content.booking.forPersons[state.language]} ${booking.guestsAmount}
                        ${content.booking.person[state.language]}
                        ${content.booking.forDuration[state.language]}
                        ${booking.duration} ${content.booking.hours[state.language]}`}
                    </p> */}
                </div>
                <div className='flex justify-center gap-3'>
                    <ButtonBlack
                        width='w-24'
                        height='h-7'
                        buttonText={content.common.cancel[state.language]}
                        onClick={deleteUserBooking}
                    />
                </div>
            </div>
        </div>
    );
};

export default BookingItem;
