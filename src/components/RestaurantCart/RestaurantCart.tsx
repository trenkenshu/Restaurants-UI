import ButtonBlack from 'components/ButtonBlack';
import React from 'react';
import { content } from 'utils/content';

const lang = 'en';

const RestaurantCart = () => {
    return (
        <div className='flex flex-col w-1/4 h-96'>
            <div className='w-full h-full bg-randomRest bg-cover bg-no-repeat bg-bottom overflow-y-hidden'>
                <div className='flex flex-col w-full h-3/4 bg-smoke-gray  dark:bg-zinc-800 transition-all translate-y-80 duration-1000 hover:translate-y-24 py-4 px-2 cursor-pointer'>
                    <h4 className='text-xl text-center font-bold pb-4 dark:text-smoke-gray'>Restaurant Name</h4>
                    <p className='text-xs mb-2 italic dark:text-smoke-gray'>
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
                    {/* <ButtonBlack width={44} height={10} buttonText={content.common.learnMore[lang]} /> */}
                    <ButtonBlack
                        width={'1/2'}
                        height={10}
                        fontsize={'inherit'}
                        buttonText={content.common.learnMore[lang]}
                    />
                </div>
            </div>
        </div>
    );
};

export default RestaurantCart;
