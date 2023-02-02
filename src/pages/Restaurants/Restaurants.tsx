import Map from 'components/Map';
import RestaurantItem from 'components/RestaurantItem';
import React from 'react';

const Restaurants = () => {
    return (
        <div className='flex  w-full h-820px gap-2.5'>
            <div className='flex flex-col gap-3 w-2/5 h-full overflow-y-auto'>
                <h1 className='text-4xl'>
                    Restaurants in Minsk <span className='text-corall'>Number</span>
                </h1>
                <div className='flex flex-col gap-2.5'>
                    <RestaurantItem />
                    <RestaurantItem />
                    <RestaurantItem />
                    <RestaurantItem />
                </div>
            </div>
            <Map />
        </div>
    );
};

export default Restaurants;
