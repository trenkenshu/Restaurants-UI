import Map from 'components/Map';
import RestaurantItem from 'components/RestaurantItem';

const Restaurants = () => {
    return (
        <div className='flex flex-col w-full gap-2.5'>
            <h1 id='mainTitle' className='text-4xl text-center'>
                Restaurants in Minsk <span className='text-corall'>Number</span>
            </h1>
            <div
                id='wrapperInMain'
                className='flex flex-col-reverse gap-2.5 lg:flex-row h-full lg:h-[calc(100vh-200px)]'
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
