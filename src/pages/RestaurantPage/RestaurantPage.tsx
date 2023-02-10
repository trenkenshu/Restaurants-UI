import React, { useContext, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AppContext } from 'store/store';
import { getRestaurant } from 'api/api';
import ButtonFavorite from 'components/ButtonFavorite';
import { useNavigate, useParams } from 'react-router-dom';
import { cities } from 'components/Header/Header';
import RestaurantAbout from 'components/RestaurantAbout';
import RestaurantMenu from 'components/RestaurantMenu';
import RestaurantMap from 'components/RestaurantMap';
import ReviewItem from 'components/ReviewItem';
import { content } from 'utils/content';

const RestaurantPage = () => {
    const { state, dispatch } = useContext(AppContext);
    const { id } = useParams();
    const navigate = useNavigate();
    console.log('id', id);
    console.log(state.restaurants);

    const saveRestaurant = async () => {
        const restaurant = await getRestaurant(Number(id));
        // console.log(JSON.parse(restaurant));
        // if (restaurant) {
        //     console.log('12412', JSON.parse(restaurant.error));
        //     navigate('/404');
        // }
        restaurant.parsedTranslation = JSON.parse(restaurant.translation);
        // console.log('rest', restaurant);
        const updatedCity = cities.find((el) => el.city['en'] === restaurant.city);
        // console.log('upd', updatedCity);
        updatedCity && dispatch({ type: 'changeCity', payload: updatedCity.city });
        dispatch({ type: 'getRestaurant', payload: restaurant });
    };

    useEffect(() => {
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
    // !! Если ID > существующего то сдеать переход на ERROR page
    return (
        state.currentRestaurant && (
            <div className='restaurant flex flex-col-reverse w-full h-full gap-2 lg:gap-0 lg:flex-row lg:h-[calc(100vh-130px)] select-none'>
                <div
                    className='lg:w-[55%] lg:overflow-y-auto scrollbar scrollbar-thumb-zinc-500 
                scrollbar-track-transparent hover:scrollbar-thumb-zinc-700 dark:scrollbar-thumb-zinc-200 dark:hover:scrollbar-thumb-zinc-400'
                >
                    <div className='flex flex-col items-center w-full h-full gap-2 pr-0.5'>
                        <h1 className='text-4xl text-corall font-semibold drop-shadow-lg uppercase py-5'>
                            {state.currentRestaurant.name}
                        </h1>
                        <a
                            href='#restMap'
                            className='flex items-center gap-1 px-2.5 py-1 border border-gray-400 rounded-full cursor-pointer'
                        >
                            <div className='bg-location dark:bg-locationWhite w-6 h-6 bg-cover bg-no-repeat bg-center'></div>
                            <div className=''>
                                {state.currentRestaurant.parsedTranslation &&
                                    state.currentRestaurant.parsedTranslation[state.language].address}
                            </div>
                        </a>
                        <div className='flex items-center gap-2.5'>
                            <div className='px-2 py-1 border border-gray-400 rounded-full'>
                                {state.currentRestaurant.workTimeStart}.00 - {state.currentRestaurant.workTimeEnd}.00
                            </div>
                            <div className='flex gap-1.5 px-2 py-1 border border-gray-400 rounded-full cursor-pointer'>
                                <a
                                    href='#restReviews'
                                    className='flex items-center gap-1 border-r pr-1 border-gray-400'
                                >
                                    <div className='bg-review dark:bg-reviewWhite w-6 h-6 bg-cover bg-no-repeat bg-center'></div>
                                    <div className=''>reviews</div>
                                </a>
                                <div className='flex gap-1'>
                                    <div className='bg-rating w-6 h-6 bg-cover bg-no-repeat bg-center'></div>
                                    <div className=''>{state.currentRestaurant.rating}</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-2.5'>
                            <div className='flex flex-col items-center min-w-[100px]'>
                                <div className='w-9 h-9 bg-cover bg-no-repeat bg-center bg-booking dark:bg-bookingWhite'></div>
                                <div className=''>{content.restaurantsPage.book[state.language]}</div>
                            </div>
                            <div className='flex flex-col items-center min-w-[100px]'>
                                <div className='w-9 h-9'>
                                    <ButtonFavorite />
                                </div>
                                <div className=''>{content.restaurantsPage.favorites[state.language]}</div>
                            </div>
                            <div className='flex flex-col items-center min-w-[100px]'>
                                <div className='bg-review dark:bg-reviewWhite w-9 h-9 bg-cover bg-no-repeat bg-center'></div>
                                <div className=''>{content.restaurantsPage.review[state.language]}</div>
                            </div>
                        </div>
                        <div id='about' className='flex flex-col w-full h-full gap-2'>
                            <div className='rounded-md text-smoke-gray bg-zinc-800 dark:bg-zinc-700 text-xl text-center py-0.5'>
                                {content.restaurantsPage.about[state.language]}
                            </div>
                            <RestaurantAbout />
                        </div>
                        <div id='menu' className='flex flex-col w-full h-full gap-2'>
                            <div className='rounded-md text-smoke-gray bg-zinc-800 dark:bg-zinc-700 text-xl text-center py-0.5'>
                                {content.restaurantsPage.menu[state.language]}
                            </div>
                            <RestaurantMenu />
                        </div>
                        <div id='restMap' className='flex flex-col w-full h-full gap-2'>
                            <div className='rounded-md text-smoke-gray bg-zinc-800 dark:bg-zinc-700 text-xl text-center py-0.5'>
                                {content.restaurantsPage.location[state.language]}
                            </div>
                            <RestaurantMap />
                        </div>
                        <div id='restReviews' className='flex flex-col w-full h-full gap-2'>
                            <div className='rounded-md text-smoke-gray bg-zinc-800 dark:bg-zinc-700 text-xl text-center py-0.5'>
                                {content.restaurantsPage.reviews[state.language]}
                            </div>
                            <div className='pb-5'>
                                <ReviewItem />
                                <ReviewItem />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full h-44 lg:w-[45%] lg:h-[calc(100vh-130px)]'>
                    <div className='h-full w-full'>
                        <Slider {...sliderSetting}>
                            {state.currentRestaurant.images.map((img) => {
                                return (
                                    <div key={img} className='min-[480px]:px-0.5 lg:px-0'>
                                        <div
                                            className='bg-cover bg-center h-44 lg:h-[calc(100vh-130px)] w-full'
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
