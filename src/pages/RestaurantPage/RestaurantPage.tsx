import React, { useContext, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AppContext } from 'store/store';
import { getRestaurant } from 'api/api';
import ButtonFavorite from 'components/ButtonFavorite';
import { useParams } from 'react-router-dom';
import { cities } from 'components/Header/Header';

const RestaurantPage = () => {
    const { state, dispatch } = useContext(AppContext);
    const { id } = useParams();
    console.log('id', id);

    const saveRestaurant = async () => {
        const restaurant = await getRestaurant(Number(id));
        restaurant.parsedTranslation = JSON.parse(restaurant.translation);
        console.log('rest', restaurant);
        const updatedCity = cities.find((el) => el.city['en'] === restaurant.city);
        console.log('upd', updatedCity);
        updatedCity && dispatch({ type: 'changeCity', payload: updatedCity.city });
        dispatch({ type: 'getRestaurant', payload: restaurant });
    };

    useEffect(() => {
        console.log('UE');
        // const saveRestaurant = async () => {
        //     const restaurant = await getRestaurant(Number(id));
        //     restaurant.parsedTranslation = JSON.parse(restaurant.translation);
        //     console.log('rest', restaurant);
        //     dispatch({ type: 'getRestaurant', payload: restaurant });
        // };
        // saveRestaurant();
        saveRestaurant();
    }, []);

    const sliderSetting = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
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
        state.currentRestaurant && (
            <div className='restaurant flex flex-col-reverse lg:flex-row w-full h-full select-none'>
                <div className='flex flex-col items-center w-full gap-3 p-2.5 lg:w-[55%] lg:overflow-y-auto '>
                    <h1 className='text-4xl'>{state.currentRestaurant.name}</h1>
                    <div className='flex items-center px-2.5 py-1 border border-gray-400 rounded-full cursor-pointer'>
                        <div className='bg-location w-6 h-6 bg-cover bg-no-repeat bg-center'></div>
                        <div className=''>
                            {state.currentRestaurant.parsedTranslation &&
                                state.currentRestaurant.parsedTranslation[state.language].address}
                        </div>
                    </div>
                    <div className='flex items-center gap-2.5'>
                        <div className='px-2 py-1 border border-gray-400 rounded-full cursor-pointer'>
                            {state.currentRestaurant.workTimeStart}.00 - {state.currentRestaurant.workTimeEnd}.00
                        </div>
                        <div className='flex gap-1.5 px-2 py-1 border border-gray-400 rounded-full cursor-pointer'>
                            <div className='flex items-center gap-1 border-r pr-1 border-gray-400'>
                                <div className='bg-review w-6 h-6 bg-cover bg-no-repeat bg-center'></div>
                                <div className=''>review</div>
                            </div>
                            <div className='flex gap-1'>
                                <div className='bg-rating w-6 h-6 bg-cover bg-no-repeat bg-center'></div>
                                <div className=''>{state.currentRestaurant.rating}</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-2.5'>
                        <div className=''>Book</div>
                        <div className='w-8 h-8'>
                            <ButtonFavorite />
                        </div>
                        <div className='bg-review w-8 h-8 bg-cover bg-no-repeat bg-center'></div>
                    </div>
                </div>
                <div className='flex w-full h-60 lg:w-[45%] lg:h-[calc(100vh-130px)]'>
                    <div className='h-full w-full'>
                        <Slider {...sliderSetting}>
                            {state.currentRestaurant.images.map((img) => {
                                return (
                                    <div key={img} className='min-[480px]:px-0.5'>
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
        )
    );
};

export default RestaurantPage;
