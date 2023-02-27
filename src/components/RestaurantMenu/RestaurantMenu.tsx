import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './RestaurantMenu.css';
import { IRestaurant } from 'types';
import NewImg from 'components/NewImg';
import { baseURL } from 'utils/constants';

type RestaurantMenuPropsType = {
    restaurant: IRestaurant;
    openImgModal: (newSrc: string) => void;
};

const RestaurantMenu: FC<RestaurantMenuPropsType> = ({ restaurant, openImgModal }) => {
    const sliderSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        swipeToSlide: false,
        swipe: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='map flex items-center justify-center w-full h-full overflow-hidden'>
            <div className='h-full w-full'>
                <Slider {...sliderSetting}>
                    {restaurant.menuImg.map((img) => {
                        return (
                            <NewImg
                                wrapperClasses='h-[600px]'
                                imgClasses='h-full w-full rounded-md min-[540px]:px-1'
                                src={`${baseURL}/${img}`}
                                alt='Restaurant'
                                key={img}
                                openImgModal={openImgModal}
                            />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default RestaurantMenu;
