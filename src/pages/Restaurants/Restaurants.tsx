import React, { useContext, useEffect } from 'react';
import Map from 'components/Map';
import RestaurantItem from 'components/RestaurantItem';
import { content } from 'utils/content';
import { IRestaurant } from 'types';
import { AppContext } from 'store/store';
import getAndUpdateRestaurants from 'utils/functions/getAndUpdateRestaurants';
import Loader from 'components/Loader';

const Restaurants = () => {
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        getAndUpdateRestaurants(state, dispatch);
    }, [state.currentCity]);

    return (
        <>
            <Loader />
            <div className='flex flex-col w-full gap-2.5 select-none py-2.5 px-5'>
                {/* in upper div items-center */}
                <h1 id='mainTitle' className='text-4xl text-center drop-shadow-lg'>
                    {content.restaurantsPage.title[state.language]}
                    {<span className='text-corall'> {state.currentCity[state.language]}</span>}
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
                            {state.restaurants.map((restaurant: IRestaurant) => {
                                return <RestaurantItem restaurant={restaurant} key={restaurant.id} />;
                            })}
                        </div>
                    </div>
                    <Map />
                </div>
            </div>
        </>
    );
};

export default Restaurants;
