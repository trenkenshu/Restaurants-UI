import ButtonBlack from 'components/ButtonBlack';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from 'store/store';
import { content } from '../../utils/content';

const Error404 = () => {
    const { state } = useContext(AppContext);
    return (
        <div className='flex flex-col items-center justify-center w-full h-[calc(100vh-150px)]'>
            <h1 className='text-5xl sm:text-8xl font-extrabold mb-10 drop-shadow-lg text-center'>
                {content.errorPage.title[state.language]} <span className='text-corall'>404</span>
            </h1>
            <h2 className='text-xl sm:text-3xl mb-20 font-bold text-center'>
                {content.errorPage.subtitle[state.language]}
            </h2>
            <Link to='/'>
                <ButtonBlack
                    width='w-56'
                    height='h-14'
                    fontsize={'3xl'}
                    buttonText={content.header.home[state.language]}
                />
            </Link>
        </div>
    );
};

export default Error404;
