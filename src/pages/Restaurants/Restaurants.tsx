import Map from 'components/Map';
import RestaurantItem from 'components/RestaurantItem';
import { content } from 'utils/content';

const lang = 'en';

const Restaurants = () => {
    return (
        <div className='flex flex-col w-full gap-2.5'>
            {/* in upper div items-center */}
            <h1 id='mainTitle' className='text-4xl text-center'>
                {content.restaurantsPage.title[lang]} Minsk {<span className='text-corall'>Number</span>}
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
