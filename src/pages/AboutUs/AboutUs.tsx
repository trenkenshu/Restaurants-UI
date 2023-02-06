import React from 'react';
import { content } from 'utils/content';
import ParticipantCard from '../../components/ParticipantCard';
import participants from '../../utils/participants';

const lang = 'en';

const AboutUs = () => {
    return (
        <div className='flex flex-col w-11/12 2xl:w-9/12 mx-auto pb-10 md:pb-20'>
            <h1 className='text-2xl lg:text-3xl 2xl:text-4xl font-bold text-center w-full py-4 dark:text-smoke-gray'>
                {content.header.about[lang]}
            </h1>
            {participants.map((el) => {
                return (
                    <div className='w-full py-3 my-3 drop-shadow-md bg-zinc-200 dark:bg-zinc-700 rounded' key={el.id}>
                        <ParticipantCard
                            name={el.name}
                            title={el.title}
                            photo={el.photo}
                            link={el.link}
                            description={el.description}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default AboutUs;