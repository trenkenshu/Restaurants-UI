import React from 'react';
import { content } from 'utils/content';
import ButtonBlack from 'components/ButtonBlack';

const lang = 'en';

const RegistrationProposal = () => {
    return (
        <div>
            <div className='w-9/12 m-auto flex items-end'>
                <h2 className='font-bold text-6xl w-1/2 dark:text-smoke-gray pr-10'>
                    {content.RegistrationProposal.title[lang]}
                </h2>
                <h3 className='w-1/2 font-semibold text-3xl dark:text-smoke-gray'>
                    {content.RegistrationProposal.subtitle[lang]}
                </h3>
            </div>
            <div className='w-9/12 m-auto flex'>
                <div className='w-1/2'></div>
                <div className='w-1/2 flex justify-center mt-10'>
                    {/* <button className='w-56 h-14 mt-4 mx-auto items-center bg-black text-2xl text-corall hover:bg-smoke-gray hover:text-zinc-800 border border-zinc-800 rounded-full font-semibold'>
                        {content.RegistrationProposal.join[lang]}
                    </button> */}
                    <ButtonBlack
                        width={56}
                        height={14}
                        fontsize={'xl'}
                        buttonText={content.RegistrationProposal.join[lang]}
                    />
                </div>
            </div>
        </div>
    );
};

export default RegistrationProposal;
