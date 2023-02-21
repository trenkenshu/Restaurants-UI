import Loader from 'components/Loader';
import React, { useContext } from 'react';
import { AppContext } from 'store/store';
import { content } from 'utils/content';
import ParticipantCard from '../../components/ParticipantCard';
import participants from '../../utils/participants';

const AboutUs = () => {
    const { state } = useContext(AppContext);
    return (
        <>
            <div className='flex flex-col w-11/12 2xl:w-9/12 mx-auto pb-10 md:pb-20'>
                <h1 className='text-2xl lg:text-3xl 2xl:text-4xl font-bold text-center w-full py-4 dark:text-smoke-gray'>
                    {content.header.about[state.language]}
                </h1>
                {participants.map((el) => {
                    return (
                        <div
                            className='w-full py-3 my-3 drop-shadow-md bg-zinc-200 dark:bg-zinc-700 rounded'
                            key={el.id}
                        >
                            <ParticipantCard
                                name={el.name[state.language]}
                                title={el.title[state.language]}
                                photo={el.photo}
                                link={el.link}
                                description={el.description[state.language]}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default AboutUs;
