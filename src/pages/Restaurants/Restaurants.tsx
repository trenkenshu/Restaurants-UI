import React, { useEffect, useState } from 'react';
import Map from 'components/Map';
import RestaurantItem from 'components/RestaurantItem';
import { content } from 'utils/content';
import { getRestaurant, getRestaurants } from 'api/api';
import { IRestaurant } from 'types';

const lang = 'en';

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants('Minsk').then((resp) => {
            console.log(resp.data);
            resp.data.forEach((el: IRestaurant) => {
                el.parsedTranslation = JSON.parse(el.translation);
            });
            setRestaurants(resp.data);
        });
        // getRestaurant(3).then((resp) => console.log('cafe', resp));
    }, []);

    return (
        <div className='flex flex-col w-full gap-2.5'>
            {/* in upper div items-center */}
            <h1 id='mainTitle' className='text-4xl text-center'>
                {content.restaurantsPage.title[lang]} {<span className='text-corall'>Minsk</span>}
            </h1>
            <div
                id='wrapperInMain'
                className='flex flex-col-reverse h-full gap-2.5 lg:flex-row lg:h-[calc(100vh-200px)]'
            >
                {/* in upper div w-11/12(или 90%) */}
                {/* <div className='flex flex-col gap-3 w-full h-fit lg:min-w-[600px] lg:w-2/5 lg:h-full lg:overflow-y-auto'> */}
                <div
                    className='flex flex-col gap-3 w-full h-fit lg:min-w-[520px] lg:w-2/5 lg:h-full lg:overflow-y-auto 
                scrollbar scrollbar-thumb-zinc-500 scrollbar-track-transparent hover:scrollbar-thumb-zinc-700 dark:scrollbar-thumb-zinc-200 dark:hover:scrollbar-thumb-zinc-400'
                >
                    <div className='flex  flex-col gap-2.5 lg:mr-2'>
                        {restaurants.map((restaurant: IRestaurant) => {
                            return <RestaurantItem restaurant={restaurant} key={restaurant.id} />;
                        })}
                    </div>
                </div>
                <Map restaurants={restaurants} />
            </div>
        </div>
    );
};

export default Restaurants;
