import ButtonBlack from 'components/ButtonBlack';
import ButtonFavorite from 'components/ButtonFavorite';
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

const RestaurantItem = () => {
    const imgs = [jpg1, jpg2, jpg3, jpg4, jpg5, jpg6, jpg7];

    const sliderSetting = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        swipeToSlide: true,
        swipe: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='flex flex-col gap-1 p-2 bg-white dark:bg-zinc-200 dark:text-zinc-800 rounded-md'>
            <div className='flex gap-2.5'>
                <div className='font-bold uppercase'>RestName</div>
                <div className='flex items-center  gap-1 border rounded px-0.5'>
                    <div className='bg-rating h-4 w-4 bg-no-repeat bg-cover'></div>
                    <div className=''>4.5</div>
                </div>
                <div className=''>N of Reviews</div>
            </div>
            <div className='text-sm'>CuisineType</div>
            <div className='flex gap-2.5'>
                <div className='text-sm'>Adress</div>
                <div className='text-sm'>End of work</div>
            </div>
            <div className='h-40 w-[85%] sm:w-11/12 mx-auto'>
                <Slider {...sliderSetting}>
                    {imgs.map((el) => {
                        return <img key={el} src={el} className='h-40 w-40 px-1 rounded-md' alt='Restaurant' />;
                    })}
                </Slider>
            </div>
            <div className='text-sm'>Average check: </div>
            <div className='flex gap-2.5 w-full'>
                <ButtonBlack width={'w-40'} height={'h-10'} buttonText={'Details'} />
                <div className='w-10 h-10'>
                    <ButtonFavorite />
                </div>
            </div>
        </div>
    );
};

export default RestaurantItem;
