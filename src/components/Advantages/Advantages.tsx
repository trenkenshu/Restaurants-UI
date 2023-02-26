import React, { useContext } from 'react';
import { content } from 'utils/content';
import { AppContext } from '../../store/store';

const Advantages = () => {
    const { state } = useContext(AppContext);

    // const imgs = [jpg1, jpg2, jpg3, jpg4];
    const imgs = ['bg-adv1', 'bg-adv2', 'bg-adv3', 'bg-adv4'];

    return (
        <div className='w-full flex flex-col md:pt-6 lg:pb-20'>
            <h2 className='text-2xl 2xl:text-3xl font-bold text-zinc-400 pt-8 pb-4'>
                {content.homePage.titleSec2[state.language]}
            </h2>
            <h3 className='text-3xl 2xl:text-4xl font-semibold dark:text-smoke-gray mb-16'>
                {content.homePage.subtitleSec2[state.language]}
            </h3>
            <div className='flex flex-wrap gap-4 md:gap-10 w-full justify-center lg:justify-between'>
                {content.homePage.advantages.map((el, index) => {
                    return (
                        <div className='flex flex-col w-1/2 md:w-1/3 lg:w-1/5 h-38 md:h-58 mb-2' key={el.id}>
                            <div className={`w-full h-32 sm:h-40 md:h-48 mb-2 ${imgs[index]} bg-center bg-cover`}></div>
                            <p className='text-xs md:text-base lg:text-lg 2xl:text-2xl font-semibold dark:text-smoke-gray'>
                                {el[state.language]}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Advantages;
