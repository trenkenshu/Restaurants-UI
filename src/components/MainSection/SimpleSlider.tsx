import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SimpleSliderProps {
    width: number | string;
    height: number | string;
    imgs: string[];
}

const SimpleSlider: FC<SimpleSliderProps> = ({ width, height, imgs }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };

    return (
        <Slider {...settings}>
            {imgs.map((el) => {
                return (
                    <div key={el}>
                        <img src={el} className={`w-${width} h-${height}`} alt='Restaurant'></img>
                    </div>
                );
            })}
        </Slider>
    );
};

export default SimpleSlider;
