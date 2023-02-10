import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AppContext } from 'store/store';
import './RestaurantMenu.css';

const RestaurantMenu = () => {
    const { state } = useContext(AppContext);

    const sliderSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        swipeToSlide: true,
        swipe: true,
        responsive: [
            {
                breakpoint: 1024,
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
        <div className='map flex items-center justify-center w-full h-full overflow-hidden'>
            <div className='h-full w-full'>
                <Slider {...sliderSetting}>
                    {state.currentRestaurant.menuImg.map((img) => {
                        return (
                            // <div key={img} className='min-[480px]:px-1'>
                            //     <div
                            //         className='h-80 w-full bg-cover bg-center bg-no-repeat rounded-md'
                            //         style={{
                            //             backgroundImage: `url(https://restaurants-server-2.onrender.com/${img})`,
                            //         }}
                            //     ></div>
                            // </div>
                            <img
                                key={img}
                                src={`https://restaurants-server-2.onrender.com/${img}`}
                                className='h-[600px] w-[400px] rounded-md min-[640px]:px-0.5'
                                alt='Restaurant'
                            />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default RestaurantMenu;
