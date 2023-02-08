import React, { FC, useContext } from 'react';
import ButtonBlack from 'components/ButtonBlack';
import ButtonFavorite from 'components/ButtonFavorite';
import { content } from 'utils/content';
import { AppContext } from 'store/store';
import { IRestaurant } from 'types';

interface RestaurantItemProps {
    restaurant: IRestaurant;
    isInUserFavotites: boolean;
}

const RestaurantCard: FC<RestaurantItemProps> = ({ restaurant, isInUserFavotites }) => {
    const { state } = useContext(AppContext);
    return (
        <div className='flex flex-col w-full h-80 lg:h-96 border-b border-zinc-800 dark:border-corall'>
            <div className='w-full h-full overflow-y-hidden relative'>
                <img
                    className='w-full h-full absolute top-0 left-0'
                    src={`https://restaurants-server-2.onrender.com/${restaurant.images[0]}`}
                    alt={`${restaurant.name} restaurant photo`}
                ></img>
                <div className='w-8 h-8 absolute right-2 top-2'>
                    <ButtonFavorite filled={isInUserFavotites} />
                </div>
                <div className='flex flex-col w-full h-4/5 bg-smoke-gray dark:bg-zinc-800 transition-all translate-y-64 lg:translate-y-80 duration-1000 hover:translate-y-24 py-4 px-2 cursor-pointer'>
                    <h4 className='text-xl text-center font-bold pb-6 dark:text-smoke-gray'>
                        {restaurant.parsedTranslation && restaurant.parsedTranslation[state.language].name}
                    </h4>
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
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
