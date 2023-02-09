import React, { useContext, useState } from 'react';
import LoginForm from 'components/LoginForm';
import RegistrationForm from 'components/RegistrationForm';
import { AppContext } from 'store/store';
import { content } from 'utils/content';
import logoBlack from '../../assets/icons/favicon.png';
import logoCorall from '../../assets/icons/favicon_corall.png';
import logoGray from '../../assets/icons/favicon_gray.png';

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
        <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mx-auto'>
            <div className='w-full max-w-md space-y-8'>
                <img className='mx-auto h-12 w-auto rounded-full shadow-lg shadow-gray-100/30' src={logoBlack}></img>
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
    );
};

export default Registration;
