import React from 'react';
import { content } from 'utils/content';
import RestaurantCart from 'components/RestaurantCart';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './RestaurantRecs.css';

const lang = 'en';

const RestaurantRecs = () => {
    const somearr = [0, 0, 0, 0, 0, 0];
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
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
                {content.homePage.titleSec3[lang]}
            </h2>
            <h3 className='text-3xl 2xl:text-4xl font-semibold dark:text-smoke-gray mb-16'>
                {content.homePage.subtitleSec3[lang]}
            </h3>
            <div className='w-full h-80 lg:h-96 -pr-3'>
                <Slider {...sliderSetting}>
                    {somearr.map((el, index) => {
                        return <RestaurantCart key={index} />;
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default RestaurantRecs;
