import { content } from 'utils/content';
import jpg1 from '../../assets/images/home-page/carousel/1.jpg';
import jpg2 from '../../assets/images/home-page/carousel/2.jpg';
import jpg3 from '../../assets/images/home-page/carousel/3.jpg';
import jpg4 from '../../assets/images/home-page/carousel/4.jpg';
import jpg5 from '../../assets/images/home-page/carousel/5.jpg';
import jpg6 from '../../assets/images/home-page/carousel/6.jpg';
import jpg7 from '../../assets/images/home-page/carousel/7.jpg';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const lang = 'en';

const MainSection = () => {
    const star = '\\2605';
    const imgs = [jpg1, jpg2, jpg3, jpg4, jpg5, jpg6, jpg7];

    const sliderSetting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        swipeToSlide: true,
        swipe: true,
        className: 'h-full',
    };

    return (
        <div className='flex w-full justify-end mb-14'>
            <div className='flex flex-col w-11/12'>
                <div className='flex flex-col md:flex-row mt-8 mb-5'>
                    <div className='flex flex-col md:w-5/12 md:mt-14 pr-10'>
                        <h1 className='md:text-2xl lg:text-3xl font-bold mb-5 dark:text-smoke-gray'>
                            {content.homePage.title[lang]}
                        </h1>
                        <h3 className='md:text-xs lg:text-sm dark:text-smoke-gray mb-10 md:mb-0'>
                            {content.homePage.subtitle[lang]}
                        </h3>
                    </div>
                    <div className='md:w-7/12 h-96'>
                        <Slider {...sliderSetting}>
                            {imgs.map((el) => {
                                return <img key={el} src={el} className='h-96' alt='Restaurant' />;
                            })}
                        </Slider>
                    </div>
                </div>
                <p
                    className={`mt-5 md:mt-0 before:content-["${star.repeat(5)}"]
              before:mr-1.5 uppercase dark:before:text-corall`}
                >
                    176 {content.homePage.reviews[lang]}
                </p>
            </div>
        </div>
    );
};

export default MainSection;
