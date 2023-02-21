import React, { useContext, useState } from 'react';
import LoginForm from 'components/LoginForm';
import RegistrationForm from 'components/RegistrationForm';
import { AppContext } from 'store/store';
import { content } from 'utils/content';
import logoBlack from '../../assets/icons/favicon.png';
import logoWhite from '../../assets/icons/favicon_white3.png';
import Loader from 'components/Loader';

const Registration = () => {
    const { state, dispatch } = useContext(AppContext);
    const [registration, setForm] = useState(true);
    const [registrationTitle, setTitle] = useState(true);
    const [registrationText, setButtonText] = useState(true);

    const changeForm = () => {
        setForm((prev) => !prev);
        setTitle((prev) => !prev);
        setButtonText((prev) => !prev);
    };

    return (
        <>
            <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mx-auto'>
                <div className='w-full max-w-md space-y-8'>
                    <img className='dark:hidden mx-auto h-12 w-auto rounded-full shadow-lg' src={logoBlack}></img>
                    <img className='hidden dark:block mx-auto h-12 w-auto rounded-full shadow-lg' src={logoWhite}></img>
                    <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-smoke-gray'>
                        {registrationTitle
                            ? content.registration.registerForm[state.language]
                            : content.registration.signin[state.language]}
                    </h2>
                    <p className='mt-2 text-center text-sm text-zinc-800 dark:text-smoke-gray'>
                        {content.registration.or[state.language]}
                        <button
                            className='font-medium text-bold text-corall underline hover:text-extrabold'
                            onClick={changeForm}
                        >
                            {registrationText
                                ? content.registration.signin[state.language]
                                : content.registration.registerForm[state.language]}
                        </button>
                    </p>
                    {registration ? <RegistrationForm /> : <LoginForm />}
                </div>
            </div>
        </>
    );
};

export default Registration;
