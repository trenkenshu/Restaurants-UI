import React, { FC, useContext, useEffect } from 'react';
import ButtonBlack from 'components/ButtonBlack';
import randomrest from '../../assets/images/home-page/carousel/2.jpg';
import { IBooking, IRestaurant } from 'types';
import { AppContext } from 'store/store';
import { deleteBooking, getRestaurant } from 'api/api';

interface BookingItemProps {
    booking: IBooking;
}

const BookingItem: FC<BookingItemProps> = ({ booking }) => {
    const { state, dispatch } = useContext(AppContext);

    const getUserRestaurant = async () => {
        const restaurant = await getRestaurant(booking.cafeId);
        restaurant.parsedTranslation = JSON.parse(restaurant.translation);
        console.log('restaurant in getUserRestaurant func:::', restaurant);
        return restaurant;
    };

    useEffect(() => {
        getUserRestaurant();
    }, []);

    // console.log('restaurant from booking Item:::', rest);
    // 2023-02-09T20:33:25.698Z
    const bookingDate = booking.date.toLocaleString(state.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    // console.log('bookingDate:::', bookingDate);
    // toDateString()
    // const mounth = bookingDate.slice(5, 7);
    // const day = bookingDate.slice(8, 10);
    // const year = bookingDate.slice(0, 4);
    // const hours = bookingDate.slice(11, 13);
    // const minutes = bookingDate.slice(17, 19);
    // console.log('bookingDate:::', `${day}.${mounth}.${year}, ${hours}:${minutes}`);

    return (
        <div className='w-60 h-60 gap-2 shadow-md relative shadow-md'>
            <img className='w-full h-full rounded' src={randomrest} alt='Restaurant Photo'></img>
            <div className='w-3/4 h-3/4 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 backdrop-blur-sm bg-white/30 rounded'>
                <div className='flex flex-col py-2 px-2.5'>
                    <h2 className='text-xl font-bold leading-5 h-12 text-black drop-shadow-md flex items-center cursor-pointer'>
                        <a>u</a>
                    </h2>
                    <p className='text-3xl -mt-1 font-semibold text-black text-end  drop-shadow-md'>
                        {/* {hours}:{minutes} */}
                    </p>
                    <p className='font-semibold text-end text-black  drop-shadow-md'>
                        13 марта
                        {/* {booking.date.getDate()} {booking.date.getMonth()} {booking.date.getFullYear()} */}
                    </p>
                    <p className='text-sm leading-3 italic text-black text-center drop-shadow-md'>
                        Minsk, Gagrrin str, 1961
                    </p>
                </div>
                <div className='flex justify-center'>
                    <ButtonBlack
                        width='w-24'
                        height='h-7'
                        buttonText='Cancel'
                        onClick={() => deleteBooking(booking.id)}
                    />
                </div>
            </div>
        </div>
    );
};

export default BookingItem;
