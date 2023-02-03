import Map from 'components/Map';
import RestaurantItem from 'components/RestaurantItem';
import React, { useEffect, useState } from 'react';
import getMapHeight from 'utils/getMapHeight';

const Restaurants = () => {
    const [mapHeight, setMapHeight] = useState(getMapHeight());
    const [largeScreen, setLargeScreen] = useState(false);
    // const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    console.log(mapHeight);
    // window.addEventListener('load ', () => {
    //     setMapHeight(getMapHeight());
    // });
    const innerWidth = window.innerWidth;

    const getScreenWidth = () => {
        // setInnerWidth(window.innerWidth);
        console.log(innerWidth);
        if (innerWidth > 1024) {
            setLargeScreen(true);
        } else {
            setLargeScreen(false);
        }
    };

    window.addEventListener('resize', () => {
        setMapHeight(getMapHeight());
        console.log('resize', mapHeight);
        // const innerWidth = window.innerWidth;
        getScreenWidth();
    });

    useEffect(() => {
        setMapHeight(getMapHeight());
        getScreenWidth();
    }, []);

    // const mapHeightClass = `lg:h-[${mapHeight}px]`;

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
        //     <Map />[${mapHeight}px]
        // </div>
        <div className='flex flex-col w-full gap-2.5'>
            <h1 id='mainTitle' className='text-4xl text-center'>
                Restaurants in Minsk <span className='text-corall'>Number</span>
            </h1>
            <div
                id='wrapperInMain'
                className={'flex flex-col-reverse gap-2.5 lg:flex-row'}
                style={{ height: largeScreen ? `${mapHeight}px` : '100%' }}
            >
                <div className='flex flex-col gap-3 w-full h-fit lg:min-w-[600px] lg:w-2/5 lg:h-full lg:overflow-y-auto'>
                    <div className='flex  flex-col gap-2.5'>
                        <RestaurantItem />
                        <RestaurantItem />
                        <RestaurantItem />
                        <RestaurantItem />
                    </div>
                </div>
                <Map />
            </div>
        </div>
    );
};

export default Restaurants;
