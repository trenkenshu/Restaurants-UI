import React, { useContext } from 'react';
import ButtonBlack from 'components/ButtonBlack';
import ButtonFavorite from 'components/ButtonFavorite';
import { content } from 'utils/content';
import { AppContext } from 'store/store';

const RestaurantCard = () => {
    const { state } = useContext(AppContext);
    return (
        <div className='flex flex-col w-full h-80 lg:h-96 border-b border-zinc-800 dark:border-corall'>
            <div className='w-full h-full bg-randomRest bg-cover bg-no-repeat bg-bottom overflow-y-hidden relative'>
                <div className='w-8 h-8 absolute right-2 top-2'>
                    <ButtonFavorite />
                </div>
                <div className='flex flex-col w-full h-4/5 bg-smoke-gray  dark:bg-zinc-800 transition-all translate-y-64 lg:translate-y-80 duration-1000 hover:translate-y-24 py-4 px-2 cursor-pointer'>
                    <h4 className='text-xl text-center font-bold pb-6 dark:text-smoke-gray'>Restaurant Name</h4>
                    <p className='text-xs mb-2 italic leading-3 dark:text-smoke-gray hidden h-12 overflow-y-auto lg:block'>
                        Bar-restaurant Luna in Minsk is a stylish space where you can spend time in pleasure in the
                        company of loved ones, delicious dishes and live music. For guests - a relaxing atmosphere,
                        friendly staff, friendly service, versatile cuisine and signature drinks.
                    </p>
                    <p className='dark:text-smoke-gray'>
                        <span className='font-semibold'>{content.restaurantCart.adress[state.language]}: </span>Minsk,
                        Gagarin str., 1961
                    </p>
                    <p className='dark:text-smoke-gray'>
                        <span className='font-semibold'>{content.restaurantCart.cuisine[state.language]}: </span>
                        european, italian
                    </p>
                    <p className='dark:text-smoke-gray mb-4'>
                        <span className='font-semibold'>{content.restaurantCart.averageCheck[state.language]}: </span>{' '}
                        35
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
