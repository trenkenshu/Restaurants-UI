import { createUser } from 'api/api';
import React, { useContext, useState } from 'react';
import { AppContext } from 'store/store';
import { content } from 'utils/content';
import logo from '../../assets/icons/favicon.png';

const Registration = () => {
    const { state } = useContext(AppContext);
    const [login, setLogin] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setLogin(value);
    };
    const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPhone(value);
    };
    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setEmail(value);
    };
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPassword(value);
    };

    const CreateNewUser = () => {
        if (login && phone && email && password) {
            const body = {
                login,
                password,
                email,
                phone,
            };
            createUser(body);
        }
        console.log('click');
    };

    return (
        <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mx-auto'>
            <div className='w-full max-w-md space-y-8'>
                <div>
                    <img className='mx-auto h-12 w-auto' src={logo} alt='Your Company'></img>
                    <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
                        {content.registration.register[state.language]}
                    </h2>
                    <p className='mt-2 text-center text-sm text-gray-600'>
                        {content.registration.or[state.language]}
                        <a href='#' className='font-medium text-bold text-corall underline hover:text-extrabold'>
                            {content.registration.signin[state.language]}
                        </a>
                    </p>
                </div>
                <form className='mt-8 space-y-6' action='#' method='POST'>
                    <input type='hidden' name='remember' value='true'></input>
                    <div className='-space-y-px rounded-md shadow-sm'>
                        <div>
                            <label htmlFor='login' className='sr-only'>
                                {content.registration.login[state.language]}
                            </label>
                            <input
                                id='login'
                                name='login'
                                type='login'
                                autoComplete='login'
                                required
                                onChange={(event) => onChangeLogin(event)}
                                className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                                placeholder={content.registration.login[state.language]}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor='phone' className='sr-only'>
                                {content.registration.phone[state.language]}
                            </label>
                            <input
                                id='phone'
                                name='phone'
                                type='number'
                                autoComplete='phone'
                                required
                                onChange={(event) => onChangePhone(event)}
                                className='relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                                placeholder={content.registration.phone[state.language]}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor='email-address' className='sr-only'>
                                {content.registration.emailadress[state.language]}
                            </label>
                            <input
                                id='email-address'
                                name='email'
                                type='email'
                                autoComplete='email'
                                required
                                className='relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                                placeholder={content.registration.emailadress[state.language]}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor='password' className='sr-only'>
                                {content.registration.password[state.language]}
                            </label>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                autoComplete='current-password'
                                required
                                className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                                placeholder={content.registration.password[state.language]}
                            ></input>
                        </div>
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='group relative flex w-full justify-center rounded-full items-center bg-black text-corall hover:bg-transparent hover:text-black border border-black rounded-full font-semibold py-2 px-4 focus:outline-none focus:ring-2 focus:ring-corall focus:ring-corall'
                            onClick={CreateNewUser}
                        >
                            {content.registration.submit[state.language]}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
