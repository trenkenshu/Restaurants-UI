import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AppContext } from 'store/store';

const RestaurantPage = () => {
    const { state } = useContext(AppContext);

    const sliderSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        swipeToSlide: true,
        swipe: true,
        className: 'h-full w-full',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    fade: false,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    fade: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: false,
                },
            },
        ],
    };
    return (
        <div className='restaurant flex flex-col-reverse lg:flex-row w-full h-full'>
            <div className='flex flex-col items-center w-[55%]'>
                <h1>Restaurant Name</h1>
                <div className='flex'>
                    <div className=''>adress</div>
                    <div className=''>Work Time</div>
                    <div className='flex'>
                        <div className=''>review</div>
                        <div className=''>rating</div>
                    </div>
                </div>
            </div>
            <div className='flex w-full h-60 lg:w-[45%] lg:h-[calc(100vh-130px)]'>
                <div className='h-full w-full'>
                    <Slider {...sliderSetting}>
                        {state.restaurants[0].images.map((img) => {
                            return (
                                <div key={img} className='px-0.5'>
                                    <div
                                        className='bg-cover bg-center h-60 lg:h-[calc(100vh-130px)] w-full'
                                        style={{
                                            backgroundImage: `url(https://restaurants-server-2.onrender.com/${img})`,
                                        }}
                                    ></div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default RestaurantPage;
