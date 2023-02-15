import React, { FC, useContext } from 'react';
import { AppContext } from 'store/store';
import { IRestaurant } from 'types';
import { content } from 'utils/content';

type RestaurantAboutPropsType = {
    restaurant: IRestaurant;
};

const RestaurantAbout: FC<RestaurantAboutPropsType> = ({ restaurant }) => {
    const { state } = useContext(AppContext);

    return (
        <div className='flex flex-col w-full gap-2 text-lg p-2.5'>
            <div className=''>
                {restaurant.parsedTranslation && restaurant.parsedTranslation[state.language].description}
            </div>
            <div className=''>
                {<span className='font-bold'>{content.restaurantsPage.cuisineType[state.language]}</span>}
                {restaurant.parsedTranslation && restaurant.parsedTranslation[state.language].cuisineType.join(' ')}
            </div>
            <div className=''>
                {<span className='font-bold'>{content.restaurantsPage.averageCheck[state.language]}</span>}$
                {restaurant.averageCheck}
            </div>
        </div>
    );
};

export default RestaurantAbout;
