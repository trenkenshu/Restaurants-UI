import { FC } from 'react';
import './Loader.css';

type LoaderType = {
    imageLoaded: boolean;
};

export const Loader: FC<LoaderType> = ({ imageLoaded }) => {
    return (
        <div
            className={`absolute w-full h-full bg-zinc-200 transition-opacity duration-300 ${
                !imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className='absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4'>
                <div className='lds-grid'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
