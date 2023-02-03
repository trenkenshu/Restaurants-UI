import Map from 'components/Map';
import RestaurantItem from 'components/RestaurantItem';
import React, { useEffect, useState } from 'react';
import getMapHeight from 'utils/getMapHeight';

const Restaurants = () => {
    const [mapHeight, setMapHeight] = useState(getMapHeight());
    console.log(mapHeight);
    // window.addEventListener('load ', () => {
    //     setMapHeight(getMapHeight());
    // });
    window.addEventListener('resize', () => {
        setMapHeight(getMapHeight());
        console.log('resize', mapHeight);
    });

    useEffect(() => {
        setMapHeight(getMapHeight());
    }, []);

    return (
        // <div className='flex  w-full gap-2.5' style={{ height: mapHeight }}>
        //     <div className='flex flex-col gap-3 w-2/5 h-full overflow-y-auto'>
        //         <h1 className='text-4xl'>
        //             Restaurants in Minsk <span className='text-corall'>Number</span>
        //         </h1>
        //         <div className='flex flex-col gap-2.5'>
        //             <RestaurantItem />
        //             <RestaurantItem />
        //             <RestaurantItem />
        //             <RestaurantItem />
        //         </div>
        //     </div>
        //     <Map />
        // </div>
        <div className='flex flex-col w-full gap-2.5'>
            <h1 id='mainTitle' className='text-4xl text-center'>
                Restaurants in Minsk <span className='text-corall'>Number</span>
            </h1>
            <div id='wrapperInMain' className='flex gap-2.5' style={{ height: mapHeight }}>
                <div className='flex flex-col gap-3 w-2/5 h-full overflow-y-auto'>
                    <div className='flex flex-col gap-2.5'>
                        <RestaurantItem />
                        <RestaurantItem />
                        <RestaurantItem />
                        <RestaurantItem />
                    </div>
                </div>
                <Map />
            </div>
        </div>
        // <div className='flex flex-col w-full gap-2.5'>
        //     <h1 id='mainTitle' className='text-4xl text-center'>
        //         Restaurants in Minsk <span className='text-corall'>Number</span>
        //     </h1>
        //     <Map />
        //     <div className='flex flex-col gap-3 w-full h-full'>
        //         <div className='flex flex-col gap-2.5'>
        //             <RestaurantItem />
        //             <RestaurantItem />
        //             <RestaurantItem />
        //             <RestaurantItem />
        //         </div>
        //     </div>
        //     {/* <Map /> */}
        // </div>
    );
};

export default Restaurants;
