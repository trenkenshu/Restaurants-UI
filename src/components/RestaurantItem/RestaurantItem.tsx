import React, { FC, useContext, useState } from 'react';
import ButtonFavorite from 'components/ButtonFavorite';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IRestaurant } from 'types';
import { content } from 'utils/content';
import { AppContext } from 'store/store';
import { Link } from 'react-router-dom';
import checkFavorites from 'utils/functions/checkFavorites';
import checkWorkTime from 'utils/functions/checkWorkTime';
import NewImg from 'components/NewImg';
import Modal from 'components/Modal';

type RestaurantItemType = {
    restaurant: IRestaurant;
};

const RestaurantItem: FC<RestaurantItemType> = ({ restaurant }) => {
    const { state } = useContext(AppContext);
    const [isImgModalOpen, setIsImgModalOpen] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

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

    const openImgModal = (newSrc: string) => {
        setIsImgModalOpen(true);
        setImgSrc(newSrc);
        document.body.classList.add('active');
        document.getElementById('innerScroll')?.classList.add('active');
        console.log('img modal');
    };
    const closeImgModal = () => {
        setIsImgModalOpen(false);
        document.body.classList.remove('active');
        document.getElementById('innerScroll')?.classList.remove('active');
    };

    return (
        <div className='flex flex-col items-center sm:items-stretch gap-1 p-2 bg-white dark:bg-zinc-700 rounded-md'>
            <div className='flex flex-col sm:flex-row gap-2.5 items-center'>
                <Link
                    to={`/restaurants/${restaurant.id}`}
                    className='text-xl text-center sm:text-start font-bold uppercase underline underline-offset-4 hover:text-corall transition duration-300 drop-shadow-lg'
                >
                    {restaurant.name}
                </Link>
                <div className='flex items-center justify-center gap-2 w-full'>
                    <div className='flex items-center gap-1 border rounded px-0.5'>
                        <div className='bg-rating h-4 w-4 bg-no-repeat bg-cover'></div>
                        <div className=''>{restaurant.rating}</div>
                    </div>
                    <div className='flex items-center gap-1 border rounded px-0.5'>
                        <div className='bg-review dark:bg-reviewWhite h-5 w-5 bg-no-repeat bg-cover'></div>
                        <div className=''>{restaurant.reviews.length}</div>
                    </div>
                    <div className='w-8 h-8 sm:w-10 sm:h-10 sm:ml-auto'>
                        <ButtonFavorite restaurant={restaurant} filled={checkFavorites(restaurant.id, state)} />
                    </div>
                </div>
            </div>
            <div className='flex gap-2.5 flex-col sm:flex-row items-center'>
                <div className='text-sm'>
                    {restaurant.parsedTranslation && restaurant.parsedTranslation[state.language].address}
                </div>
                <div className='flex items-center gap-1 text-sm'>
                    <div
                        className={`w-4 h-4 bg-no-repeat bg-cover cursor-pointer ${
                            checkWorkTime(restaurant.workTimeStart, restaurant.workTimeEnd)
                                ? 'bg-workGreen'
                                : 'bg-workRed'
                        }`}
                        title={
                            checkWorkTime(restaurant.workTimeStart, restaurant.workTimeEnd)
                                ? content.restaurantsPage.titleOpen[state.language]
                                : content.restaurantsPage.titleClose[state.language]
                        }
                    ></div>
                    <div className=''>
                        {restaurant.workTimeStart}.00 - {restaurant.workTimeEnd}.00
                    </div>
                </div>
            </div>
            <div className='text-sm'>
                <span className='font-semibold'>{content.restaurantsPage.cuisineType[state.language]}</span>
                {restaurant.parsedTranslation && restaurant.parsedTranslation[state.language].cuisineType.join(' ')}
            </div>
            <div className='text-sm'>
                <span className='font-semibold'>{content.restaurantsPage.averageCheck[state.language]}</span> $
                {restaurant.averageCheck}
            </div>
            <div className='h-40 w-[85%] sm:w-11/12 mx-auto'>
                <Slider {...sliderSetting}>
                    {restaurant.images.map((img) => {
                        return (
                            <NewImg
                                wrapperClasses=''
                                imgClasses='h-40 w-40 object-cover rounded-md'
                                src={`https://restaurants-server-3.onrender.com/${img}`}
                                alt='Restaurant'
                                key={img}
                                openImgModal={openImgModal}
                            />
                        );
                    })}
                </Slider>
            </div>
            <Modal isModalOpen={isImgModalOpen} closeModal={closeImgModal} height='h-10/12' width='w-10/12'>
                <div
                    className='w-full min-h-[600px] lg:min-h-[700px] bg-cover bg-no-repeat bg-center'
                    style={{ backgroundImage: `url('${imgSrc}')` }}
                ></div>
            </Modal>
        </div>
    );
};

export default RestaurantItem;
