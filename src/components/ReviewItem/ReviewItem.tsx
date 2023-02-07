import ButtonBlack from 'components/ButtonBlack';
import React from 'react';

const ReviewItem = () => {
    return (
        <div className='flex flex-col gap-2 rounded p-2'>
            <div className='flex justify-between'>
                <div className='w-9/12 flex items-center gap-3'>
                    <h3 className='flex flex-nowrap w-max text-xl 2xl:text-3xl font-bold dark:text-smoke-gray drop-shadow-md cursor-pointer'>
                        <a>Restaurant Name</a>
                    </h3>
                    <div className='flex items-center gap-1 px-0.5'>
                        <div className='bg-rating h-4 w-4 bg-no-repeat bg-cover'></div>
                        <div className=''>4.5</div>
                    </div>
                </div>
                <div className='w-15 flex items-center justify-end w-full gap-2'>
                    <button className='w-4 h-4 bg-edit dark:bg-editWhite bg-cover'></button>
                    <button className='w-4 h-4 mt-1 bg-delete dark:bg-deleteWhite bg-cover'></button>
                </div>
            </div>
            <div className='w-full border rounded border-zinc-300 dark:border-zinc-600 p-1.5'>
                <p className='italic'>
                    Food is delicious! It is an experience that we could enjoy as a family. The quality of the
                    ingredients and the taste is second to none. The attention is divine and the chef shared the history
                    of each dish. Delicious and totally recommended.
                </p>
            </div>
        </div>
    );
};

export default ReviewItem;
