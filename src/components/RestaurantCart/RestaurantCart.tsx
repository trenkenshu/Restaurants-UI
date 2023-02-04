import ButtonBlack from 'components/ButtonBlack';
import ButtonFavorite from 'components/ButtonFavorite';
import React from 'react';
import { content } from 'utils/content';

const lang = 'en';

const RestaurantCart = () => {
    return (
        <div className='flex flex-col w-full h-80 lg:h-96 px-5'>
            <div className='w-full h-full bg-randomRest bg-cover bg-no-repeat bg-bottom overflow-y-hidden relative'>
                <ButtonFavorite size={8} filled={false} />
                <div className='flex flex-col w-full h-4/5 bg-smoke-gray  dark:bg-zinc-800 transition-all translate-y-64 lg:translate-y-80 duration-1000 hover:translate-y-24 py-4 px-2 cursor-pointer'>
                    <h4 className='text-xl text-center font-bold pb-6 dark:text-smoke-gray'>Restaurant Name</h4>
                    <p className='text-xs mb-2 italic leading-3 dark:text-smoke-gray hidden h-12 overflow-y-auto lg:block'>
                        Bar-restaurant Luna in Minsk is a stylish space where you can spend time in pleasure in the
                        company of loved ones, delicious dishes and live music. For guests - a relaxing atmosphere,
                        friendly staff, friendly service, versatile cuisine and signature drinks.
                    </p>
                    <p className='dark:text-smoke-gray'>
                        <span className='font-semibold'>{content.restaurantCart.adress[lang]}: </span>Minsk, Gagarin
                        str., 1961
                    </p>
                    <p className='dark:text-smoke-gray'>
                        <span className='font-semibold'>{content.restaurantCart.cuisine[lang]}: </span>european, italian
                    </p>
                    <p className='dark:text-smoke-gray mb-4'>
                        <span className='font-semibold'>{content.restaurantCart.averageCheck[lang]}: </span> 35
                    </p>
                    <ButtonBlack width={'1/2'} height={'10'} buttonText={content.common.learnMore[lang]} />
                </div>
            </div>
        </div>
    );
};

export default RestaurantCart;
