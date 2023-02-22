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
import { useContext } from 'react';
import { AppContext } from 'store/store';
import NewImg from 'components/NewImg';

const MainSection = () => {
    const { state } = useContext(AppContext);
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
        className: 'main-slider h-full',
    };

    const reviewsCount = state.restaurants.reduce((acc, el) => acc + el.reviews.length, 0);

    return (
        <div className='flex flex-col w-full md:pb-14'>
            <div className='flex flex-col md:flex-row mt-8 mb-5'>
                <div className='flex flex-col md:w-5/12 md:mt-14 md:pr-10'>
                    <h1 className='text-2xl lg:text-3xl 2xl:text-4xl leading-6 sm:leading-8 font-bold mb-5 dark:text-smoke-gray'>
                        {content.homePage.title[state.language]}
                    </h1>
                    <h3 className='text-xs lg:text-sm 2xl:text-xl dark:text-smoke-gray mb-10 md:mb-0'>
                        {content.homePage.subtitle[state.language]}
                    </h3>
                </div>
                <div className='md:w-7/12 h-60 md:h-96 2xl:h-136'>
                    <Slider {...sliderSetting}>
                        {imgs.map((el) => {
                            // return <img key={el} src={el} className='h-60 md:h-96 2xl:h-136' alt='Restaurant' />;
                            return (
                                <NewImg
                                    key={el}
                                    src={el}
                                    wrapperClasses='h-60 md:h-96 2xl:h-136'
                                    imgClasses='h-full w-full object-cover'
                                    alt='Restaurant'
                                />
                            );
                        })}
                    </Slider>
                </div>
            </div>
            <p className='2xl:text-xl mt-5 md:mt-0 before:content-["\2605\2605\2605\2605\2605"] before:mr-1.5 uppercase dark:before:text-corall'>
                {reviewsCount} {content.homePage.reviews[state.language]}
            </p>
        </div>
    );
};

export default MainSection;
