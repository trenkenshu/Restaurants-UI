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
        <div className='w-full flex flex-col sm:flex-row items-center h-fit gap-5 p-5'>
            <img className='w-36 h-48 md:w-60 md:h-full rounded' src={photo} alt={`${name}`}></img>
            <div className='w-54 h-full rounded h-fit'>
                <h2 className='sm:text-lg md:text-xl lg:text-3xl 2xl:text-4xl leading-6 sm:leading-8 text-center sm:text-start font-bold mb-1 dark:text-smoke-gray'>
                    <a href={link} target='_blank' rel='noreferrer'>
                        {name}
                    </a>
                </h2>
                <h3 className='text-base sm:text-lg lg:text-xl 2xl:text-2xl leading-6 sm:leading-8  text-center sm:text-start font-semibold mb-4 sm:md-2 md:mb-4 dark:text-smoke-gray'>
                    {title}
                </h3>
                <ul className='text-xs md:text-sm lg:text-base xl:text-xl dark:text-smoke-gray flex flex-col gap-2'>
                    {description.split('\n').map((el) => {
                        return <li key={el.slice(0, 30)}>{el}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ParticipantCard;
