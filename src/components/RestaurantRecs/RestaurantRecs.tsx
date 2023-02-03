import React from 'react';
import { content } from 'utils/content';
import RestaurantCart from 'components/RestaurantCart';

const lang = 'en';

const RestaurantRecs = () => {
    return (
        <div className='w-full flex flex-col mt-6 mb-20'>
            <h2 className='text-2xl font-bold text-zinc-400 mt-8 mb-4'>{content.homePage.titleSec3[lang]}</h2>
            <h3 className='text-3xl font-semibold dark:text-smoke-gray mb-16'>{content.homePage.subtitleSec3[lang]}</h3>
            <div className='flex gap-10'>
                <RestaurantCart />
                <RestaurantCart />
                <RestaurantCart />
                <RestaurantCart />
            </div>
        </div>
    );
};

export default RestaurantRecs;
