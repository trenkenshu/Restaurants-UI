import React, { useContext } from 'react';
import { content } from 'utils/content';
import ButtonBlack from 'components/ButtonBlack';
import { AppContext } from 'store/store';
import { useNavigate } from 'react-router-dom';

const RegistrationProposal = () => {
    const { state } = useContext(AppContext);
    const navigate = useNavigate();

    const redirect = () => {
        state.user.id > 0 ? navigate('/restaurants') : navigate('/registration');
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <div className='w-9/12 mx-auto flex flex-col lg:flex-row lg:items-end'>
                <h2 className='font-bold lg:text-end text-4xl lg:text-6xl lg:w-1/2 dark:text-smoke-gray pr-10'>
                    {content.RegistrationProposal.title[state.language]}
                </h2>
                <h3 className='lg:w-1/2 mt-5 font-semibold text-xl lg:text-3xl dark:text-smoke-gray'>
                    {content.RegistrationProposal.subtitle[state.language]}
                </h3>
            </div>
            <div className='w-9/12 mx-auto flex justify-center mt-12'>
                <ButtonBlack
                    width={'w-56'}
                    height={'h-14'}
                    fontsize={'text-xl'}
                    buttonText={content.RegistrationProposal.join[state.language]}
                    onClick={() => redirect()}
                />
            </div>
        </div>
    );
};

export default RegistrationProposal;
