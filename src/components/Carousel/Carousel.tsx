import React, { FC, useState } from 'react';

interface CarouselProps {
    width: number | string;
    height: number | string;
    imgs: string[];
}

const Carousel: FC<CarouselProps> = ({ width, height, imgs }) => {
    const [count, setCount] = useState(0);
    let ind = count;
    const increase = () => {
        if (ind > imgs.length - 2) ind = 0;
        else ind = count + 1;
        setCount(ind);
    };
    const decrease = () => {
        if (ind < 1) ind = imgs.length - 1;
        else ind = count - 1;
        setCount(ind);
    };
    return (
        <div className={`w-${width} h-${height}`}>
            <img src={imgs[count]} className='w-full h-full transition-all duration-1000' alt='Panel 4'></img>
            <div className='flex justify-center gap-0.5 mt-4'>
                <button onClick={decrease} className='w-6 h-6 bg-arrowBack bg-cover dark:bg-arrowBackWhite'></button>
                <button onClick={increase} className='w-6 h-6 bg-arrowNext bg-cover dark:bg-arrowNextWhite'></button>
            </div>
        </div>
    );
};

export default Carousel;
