const RestaurantItem = () => {
    return (
        <div className='flex flex-col gap-1 p-2 bg-white rounded-md'>
            <div className='flex gap-2.5'>
                <div className='font-bold uppercase'>RestName</div>
                <div className='flex items-center  gap-1 border rounded px-0.5'>
                    <div className='bg-rating h-4 w-4 bg-no-repeat bg-cover'></div>
                    <div className=''>4.5</div>
                </div>
                <div className=''>Number of Reviews</div>
            </div>
            <div className='text-sm'>CuisineType</div>
            <div className='flex gap-2.5'>
                <div className='text-sm'>Adress</div>
                <div className='text-sm'>End of work</div>
            </div>
            <div className='flex justify-around'>
                <div className='h-40 w-40 rounded-md bg-cyan-300'>Image</div>
                <div className='h-40 w-40 rounded-md bg-cyan-300'>Image</div>
                <div className='h-40 w-40 rounded-md bg-cyan-300'>Image</div>
            </div>
            {/* <div className=''>Description</div> */}
            <div className='text-sm'>Average check: </div>
            <div className='flex gap-2.5'>
                {/* <button className='py-1.5 px-3.5 bg-corall rounded-md hover:bg-smoke-gray hover:text-corall'>
                    Book
                </button> */}
                <button className='py-1.5 px-3.5 bg-smoke-gray rounded-md hover:bg-corall hover:text-black'>
                    Book
                </button>
                <button className='py-1.5 px-3.5 bg-corall rounded-md'>Menu</button>
                <button className='py-1.5 px-3.5 bg-smoke-gray rounded-md'>Be favourite</button>
                <button className='py-1.5 px-3.5 bg-smoke-gray rounded-md'>
                    Reviews <sup>100</sup>
                </button>
            </div>
        </div>
    );
};

export default RestaurantItem;
