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
        <div className='w-full flex flex-col mt-6 mb-20'>
            <h2 className='text-2xl font-bold text-zinc-400 mt-8 mb-4'>{content.homePage.titleSec2[lang]}</h2>
            <h3
                className='text-3xl font-semibold dark:text-smoke-gray mb-16
                    after:content-["\2728"] after:ml-2 after:text-4xl dark:after:text-corall'
            >
                {content.homePage.subtitleSec2[lang]}
            </h3>
            <div className='flex gap-10'>
                {content.homePage.advantages.map((el, index) => {
                    return (
                        <div className='flex flex-col w-1/4 h-54' key={el.id}>
                            <div className='w-full h-48 mb-8'>
                                <img src={imgs[index]} className='w-full h-full' alt={el[lang]}></img>
                            </div>
                            <p className='text-lg font-semibold dark:text-smoke-gray'>{el[lang]}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Advantages;
