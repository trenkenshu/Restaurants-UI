import React from 'react';
import { content } from 'utils/content';
import jpg1 from '../../assets/images/home-page/advantage-1.jpg';
import jpg2 from '../../assets/images/home-page/advantage-2.jpg';
import jpg3 from '../../assets/images/home-page/advantage-3.jpg';
import jpg4 from '../../assets/images/home-page/advantage-4.jpg';

const lang = 'en';

const Advantages = () => {
    const imgs = [jpg1, jpg2, jpg3, jpg4];
    return (
        <div className='w-full flex flex-col md:mt-6 lg:mb-20'>
            <h2 className='text-2xl 2xl:text-3xl font-bold text-zinc-400 mt-8 mb-4'>
                {content.homePage.titleSec2[lang]}
            </h2>
            <h3 className='text-3xl 2xl:text-4xl font-semibold dark:text-smoke-gray mb-16'>
                {content.homePage.subtitleSec2[lang]}
            </h3>
            <div className='flex flex-wrap gap-4 md:gap-10 w-full justify-center lg:justify-between'>
                {content.homePage.advantages.map((el, index) => {
                    return (
                        <div className='flex flex-col w-1/2 md:w-1/3 lg:w-1/5 h-38 md:h-58 mb-2' key={el.id}>
                            <div className='w-full h-32 sm:h-40 md:h-48 mb-2'>
                                <img src={imgs[index]} className='w-full h-full' alt={el[lang]}></img>
                            </div>
                            <p className='text-xs md:text-base lg:text-lg 2xl:text-2xl font-semibold dark:text-smoke-gray'>
                                {el[lang]}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Advantages;
