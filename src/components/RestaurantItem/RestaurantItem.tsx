import React, { FC, useContext } from 'react';
import ButtonBlack from 'components/ButtonBlack';
import ButtonFavorite from 'components/ButtonFavorite';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IRestaurant } from 'types';
import { content } from 'utils/content';
import { AppContext } from 'store/store';
import { useNavigate } from 'react-router-dom';

type RestaurantItemType = {
    restaurant: IRestaurant;
};

const RestaurantItem: FC<RestaurantItemType> = ({ restaurant }) => {
    const { state } = useContext(AppContext);
    const navigate = useNavigate();

    const sliderSetting = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        swipeToSlide: true,
        swipe: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='flex flex-col gap-1 p-2 bg-white dark:bg-zinc-200 dark:text-zinc-800 rounded-md'>
            <div className='flex gap-2.5'>
                <div className='font-bold uppercase'>{restaurant.name.toUpperCase()}</div>
                <div className='flex items-center  gap-1 border rounded px-0.5'>
                    <div className='bg-rating h-4 w-4 bg-no-repeat bg-cover'></div>
                    <div className=''>{restaurant.rating}</div>
                </div>
                <div className=''>N of Reviews</div>
            </div>
            <div className='text-sm'>
                {content.restaurantsPage.cuisineType[state.language]}
                {restaurant.parsedTranslation && restaurant.parsedTranslation[state.language].cuisineType.join(' ')}
            </div>
            <div className='flex gap-2.5'>
                <div className='text-sm'>
                    {restaurant.parsedTranslation && restaurant.parsedTranslation[state.language].address}
                </div>
                <div className='text-sm'>
                    {restaurant.workTimeStart}.00 - {restaurant.workTimeEnd}.00
                </div>
            </div>
            <div className='h-40 w-[85%] sm:w-11/12 mx-auto'>
                <Slider {...sliderSetting}>
                    {restaurant.images.map((img) => {
                        return (
                            <img
                                key={img}
                                src={`https://restaurants-server-3.onrender.com/${img}`}
                                className='h-40 w-40 object-cover rounded-md'
                                alt='Restaurant'
                            />
                        );
                    })}
                </Slider>
            </div>
            <div className='text-sm'>
                {content.restaurantsPage.averageCheck[state.language]} ${restaurant.averageCheck}
            </div>
            <div className='flex gap-2.5 w-full'>
                <ButtonBlack
                    width={'w-40'}
                    height={'h-10'}
                    buttonText={content.common.details[state.language]}
                    onClick={() => navigate(`/restaurants/${restaurant.id}`)}
                />
                <div className='w-10 h-10'>
                    <ButtonFavorite />
                </div>
            </div>
        </div>
    );
};

export default RestaurantItem;
