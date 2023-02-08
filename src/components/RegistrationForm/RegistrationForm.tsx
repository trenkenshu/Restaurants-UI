import { createUser } from 'api/api';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from 'store/store';
import { IUser } from 'types';
import { content } from 'utils/content';

const RegistrationForm = () => {
    const { state, dispatch } = useContext(AppContext);
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

    const navigate = useNavigate();

    const CreateNewUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (login && phone && email && password) {
            const body = {
                login,
                password,
                email,
                phone,
            };
            createUser(body).then((user) => {
                console.log(user);
                if (typeof user.data.error === 'undefined') {
                    setLogin('');
                    setPhone('');
                    setEmail('');
                    setPassword('');
                    dispatch({
                        type: 'updateUser',
                        payload: user.data,
                    });
                    navigate('/userpage');
                }
            });
        }
    };

    return (
        <div>
            <form className='mt-8 space-y-6' onSubmit={CreateNewUser}>
                {/* <input type='hidden' name='remember' value='true'></input> */}
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
                            value={login}
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
                            value={phone}
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
                            value={email}
                            onChange={(event) => onChangeEmail(event)}
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
                            value={password}
                            onChange={(event) => onChangePassword(event)}
                            className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                            placeholder={content.registration.password[state.language]}
                        ></input>
                    </div>
                </div>
                <div>
                    <button
                        type='submit'
                        className='group relative flex w-full justify-center rounded-full items-center bg-black text-corall hover:bg-transparent hover:text-black border border-black rounded-full font-semibold py-2 px-4 focus:outline-none focus:ring-2 focus:ring-corall focus:ring-corall'
                    >
                        {content.registration.registerBtn[state.language]}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
