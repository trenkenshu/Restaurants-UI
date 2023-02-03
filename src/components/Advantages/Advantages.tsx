import React from 'react';
import { content } from 'utils/content';

const lang = 'en';

const Advantages = () => {
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
                {content.homePage.advantages.map((el) => {
                    return (
                        <div className='flex flex-col w-1/4 h-54' key={el.id}>
                            <div
                                className={`w-full h-48 mb-8 bg-advantage${el.id} bg-cover bg-no-repeat bg-center`}
                                // className='w-full h-48 mb-8 bg-advantage1 bg-cover bg-no-repeat bg-center'
                            ></div>
                            <p className='text-lg font-semibold dark:text-smoke-gray'>{el[lang]}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Advantages;
