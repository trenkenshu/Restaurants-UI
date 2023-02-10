import React, { useContext } from 'react';
import { AppContext } from 'store/store';
import { content } from 'utils/content';

const RestaurantAbout = () => {
    const { state } = useContext(AppContext);

    return (
        <div className='flex flex-col w-full gap-2 text-lg p-2.5'>
            <div className=''>
                {state.currentRestaurant.parsedTranslation &&
                    state.currentRestaurant.parsedTranslation[state.language].description}
            </div>
            <div className=''>
                {<span className='font-bold'>{content.restaurantsPage.cuisineType[state.language]}</span>}
                {state.currentRestaurant.parsedTranslation &&
                    state.currentRestaurant.parsedTranslation[state.language].cuisineType.join(' ')}
            </div>
            <div className=''>
                {<span className='font-bold'>{content.restaurantsPage.averageCheck[state.language]}</span>}$
                {state.currentRestaurant.averageCheck}
            </div>
        </div>
    );
};

export default RestaurantAbout;
