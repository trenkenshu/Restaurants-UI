import React, { FC, useContext } from 'react';
import ButtonBlack from 'components/ButtonBlack';
import ButtonFavorite from 'components/ButtonFavorite';
import { content } from 'utils/content';
import { AppContext } from 'store/store';
import { IRestaurant } from 'types';
import { useNavigate } from 'react-router-dom';
import { baseURL } from 'utils/constants';
import NewImg from 'components/NewImg';

interface RestaurantItemProps {
    restaurant: IRestaurant;
    isInUserFavotites: boolean;
}

const RestaurantCard: FC<RestaurantItemProps> = ({ restaurant, isInUserFavotites }) => {
    const { state } = useContext(AppContext);
    const navigate = useNavigate();
    const goToRestaurantPage = (id: number) => {
        navigate(`/restaurants/${id}`);
        window.scrollTo(0, 0);
    };
    return (
        <div className='flex flex-col w-full h-96 border-b border-zinc-800 dark:border-corall'>
            <div className='w-full h-full overflow-y-hidden relative'>
                {/* <div
                    className='w-full h-full absolute top-0 left-0'
                    style={{ backgroundImage: `url(${baseURL}/${restaurant.images[0]})`, backgroundSize: 'cover' }}
                ></div> */}
                <NewImg
                    src={`${baseURL}/${restaurant.images[0]}`}
                    wrapperClasses='w-full h-full'
                    imgClasses={'h-full w-full'}
                    alt='restaurant image'
                    key={String(restaurant.id)}
                />
                <div className='w-8 h-8 absolute right-2 top-2'>
                    <ButtonFavorite filled={isInUserFavotites} restaurant={restaurant} />
                </div>
                <div className='flex flex-col w-full absolute top-16 left-0 h-4/5 bg-smoke-gray dark:bg-zinc-800 transition-all translate-y-64 duration-1000 hover:translate-y-10 py-4 px-2 cursor-pointer'>
                    <h4 className='text-xl text-center font-bold pb-6 dark:text-smoke-gray'>{restaurant.name}</h4>
                    <p className='text-xs mb-2 italic leading-3 dark:text-smoke-gray hidden h-12 overflow-y-hidden lg:block'>
                        {restaurant.parsedTranslation && restaurant.parsedTranslation[state.language].description}
                    </p>
                    <p className='dark:text-smoke-gray'>
                        <span className='font-semibold'>{content.restaurantCart.adress[state.language]}: </span>
                        {restaurant.parsedTranslation && restaurant.parsedTranslation[state.language].address}
                    </p>
                    <p className='dark:text-smoke-gray h-6 overflow-hidden'>
                        <span className='font-semibold'>{content.restaurantCart.cuisine[state.language]}: </span>
                        {restaurant.parsedTranslation &&
                            restaurant.parsedTranslation[state.language].cuisineType.join(', ')}
                    </p>
                    <p className='dark:text-smoke-gray mb-4'>
                        <span className='font-semibold'>{content.restaurantCart.averageCheck[state.language]}: </span>$
                        {restaurant.averageCheck}
                    </p>
                    <div className='flex justify-center'>
                        <ButtonBlack
                            width={'w-1/2'}
                            height={'h-10'}
                            buttonText={content.common.details[state.language]}
                            onClick={() => goToRestaurantPage(restaurant.id)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
