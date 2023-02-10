import React, { useContext } from 'react';
import { content } from 'utils/content';
import RestaurantCard from 'components/RestaurantCard';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './RestaurantRecs.css';
import { AppContext } from 'store/store';

const RestaurantRecs = () => {
    const { state } = useContext(AppContext);
    const somearr = [0, 1, 2, 3];

    const checkRestaurant = (id: number) => {
        let isInFavourites = false;
        state.user.favourites &&
            state.user.favourites.forEach((rest) => {
                if (rest.id === id) isInFavourites = true;
            });
        return isInFavourites;
    };

    const count = state.restaurants.filter((el) => el.rating >= 4.5).length;
    console.log('кол-во рест с рейтингом 4,5:::', count);

    const sliderSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        swipeToSlide: true,
        swipe: true,
        className: 'h-full',
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className='w-full flex flex-col mt-6 mb-20 -pr-3'>
            <h2 className='text-2xl 2xl:text-3xl font-bold text-zinc-400 mt-8 mb-4'>
                {content.homePage.titleSec3[state.language]}
            </h2>
            <h3 className='text-3xl 2xl:text-4xl font-semibold dark:text-smoke-gray mb-16'>
                {content.homePage.subtitleSec3[state.language]}
            </h3>
            <div className='w-full h-80 lg:h-96 -pr-3'>
                <Slider {...sliderSetting}>
                    {state.restaurants.map((restaurant) => {
                        if (restaurant.rating >= 4.5) {
                            return (
                                <div className='w-64 h-80 lg:h-96' key={restaurant.id}>
                                    <RestaurantCard
                                        restaurant={restaurant}
                                        isInUserFavotites={checkRestaurant(restaurant.id)}
                                    />
                                </div>
                            );
                        }
                    })}
                    {/* {somearr.map((el, index) => {
                        return <RestaurantCard restaurant={state.restaurants[0]} key={index} />;
                    })} */}
                </Slider>
            </div>
        </div>
    );
};

export default RestaurantRecs;
