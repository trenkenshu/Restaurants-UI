import SimpleSlider from './SimpleSlider';
import React from 'react';
import { content } from 'utils/content';
import jpg1 from '../../assets/images/home-page/carousel/1.jpg';
import jpg2 from '../../assets/images/home-page/carousel/2.jpg';
import jpg3 from '../../assets/images/home-page/carousel/3.jpg';
import jpg4 from '../../assets/images/home-page/carousel/4.jpg';
import jpg5 from '../../assets/images/home-page/carousel/5.jpg';
import jpg6 from '../../assets/images/home-page/carousel/6.jpg';
import jpg7 from '../../assets/images/home-page/carousel/7.jpg';

const lang = 'en';

const MainSection = () => {
    const star = '\\2605';
    const imgs = [jpg1, jpg2, jpg3, jpg4, jpg5, jpg6, jpg7];
    return (
        <div className='flex w-full justify-end mb-14'>
            <div className='flex flex-col w-11/12'>
                <div className='flex mt-8 mb-5'>
                    <div className='flex flex-col w-5/12 mt-14 pr-10'>
                        <h1 className='text-3xl font-bold mb-5 dark:text-smoke-gray'>{content.homePage.title[lang]}</h1>
                        <h3 className='text-sm dark:text-smoke-gray'>{content.homePage.subtitle[lang]}</h3>
                    </div>
                    <div className='w-7/12 h-96'>
                        <SimpleSlider imgs={imgs} />
                    </div>
                </div>
                <p
                    className={`before:content-["${star.repeat(5)}"]
              before:mr-1.5 uppercase dark:before:text-corall`}
                >
                    176 {content.homePage.reviews[lang]}
                </p>
                {/* <p className='before:content-["\2605\2605\2605\2605\2605"] before:mr-0.5 uppercase dark:text-smoke-gray'>
              176 {content.homePage.reviews[lang]}
          </p> */}
            </div>
        </div>
    );
};

export default MainSection;

// bg-HPmainSection bg-cover bg-no-repeat bg-center
