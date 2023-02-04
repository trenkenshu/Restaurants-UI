import React from 'react';
import { content } from 'utils/content';
import ButtonBlack from 'components/ButtonBlack';

const lang = 'en';

const RegistrationProposal = () => {
    return (
        <div>
            <div className='w-9/12 m-auto flex flex-col lg:flex-row lg:items-end'>
                <h2 className='font-bold text-4xl lg:text-6xl lg:w-1/2 dark:text-smoke-gray pr-10'>
                    {content.RegistrationProposal.title[lang]}
                </h2>
                <h3 className='lg:w-1/2 mt-5 font-semibold text-xl lg:text-3xl dark:text-smoke-gray'>
                    {content.RegistrationProposal.subtitle[lang]}
                </h3>
            </div>
            <div className='w-9/12 m-auto flex'>
                <div className='hidden lg:block w-1/2'></div>
                <div className='lg:w-1/2 flex justify-center mt-10 m-auto'>
                    <div>
                        <ButtonBlack
                            width={56}
                            height={14}
                            fontsize={'xl'}
                            buttonText={content.RegistrationProposal.join[lang]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationProposal;
