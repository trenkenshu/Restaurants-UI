import React, { FC } from 'react';

interface ParticipantCardProps {
    name: string;
    title: string;
    photo: string;
    link: string;
    description: string;
}

const ParticipantCard: FC<ParticipantCardProps> = ({ name, title, photo, link, description }) => {
    return (
        <div className='w-full flex flex-col sm:flex-row items-center h-max md:h-70 lg:h-80 gap-5 p-5'>
            <img className='w-36 h-48 md:w-60 md:h-full rounded' src={photo}></img>
            <div className='w-54 h-full rounded'>
                <h2 className='sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl leading-6 sm:leading-8 text-center sm:text-start font-bold mb-0.5 dark:text-smoke-gray'>
                    <a href={link} target='_blank' rel='noreferrer'>
                        {name}
                    </a>
                </h2>
                <h3 className='text-base sm:text-lg lg:text-xl 2xl:text-2xl leading-6 sm:leading-8  text-center sm:text-start font-semibold mb-4 sm:md-2 md:mb-4 dark:text-smoke-gray'>
                    {title}
                </h3>
                <p className='text-xs md:text-sm lg:text-base xl:text-xl dark:text-smoke-gray'>{description}</p>
            </div>
        </div>
    );
};

export default ParticipantCard;
