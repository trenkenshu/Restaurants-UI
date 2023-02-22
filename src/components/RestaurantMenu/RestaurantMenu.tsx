import { FC, useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AppContext } from 'store/store';
import './RestaurantMenu.css';
import { IRestaurant } from 'types';
import NewImg from 'components/NewImg';

type RestaurantMenuPropsType = {
    restaurant: IRestaurant;
    openImgModal: (newSrc: string) => void;
};

const RestaurantMenu: FC<RestaurantMenuPropsType> = ({ restaurant, openImgModal }) => {
    // const { state } = useContext(AppContext);

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
                            // <img
                            //     key={img}
                            //     src={`https://restaurants-server-3.onrender.com/${img}`}
                            //     className='h-[600px] w-[400px] rounded-md min-[640px]:px-0.5'
                            //     alt='Restaurant'
                            // />
                            <NewImg
                                wrapperClasses='h-[600px]'
                                imgClasses='h-full w-full rounded-md min-[540px]:px-1'
                                src={`https://restaurants-server-3.onrender.com/${img}`}
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
