import { createUser, loginUser } from 'api/api';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from 'store/store';
import { content } from 'utils/content';
import spinner from '../../assets/icons/spinner_corall.png';

const LoginForm = () => {
    const { state, dispatch } = useContext(AppContext);

    const [loginSingIn, setLoginSingIn] = useState('');
    const [passwordSingIn, setPasswordSingIn] = useState('');

    const onChangeLoginSingIn = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setLoginSingIn(value);
    };
    const onChangePasswordSingIn = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPasswordSingIn(value);
    };

    const navigate = useNavigate();

    const SetUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (loginSingIn && passwordSingIn) {
            const body = {
                login: loginSingIn,
                password: passwordSingIn,
            };
            loginUser(body).then((user) => {
                setLoginSingIn('');
                setPasswordSingIn('');
                console.log(user);

                if (typeof user.error === 'undefined') {
                    user.favourites.forEach((rest) => {
                        rest.parsedTranslation = JSON.parse(rest.translation);
                    });
                    dispatch({
                        type: 'updateUser',
                        payload: user,
                    });
                    navigate('/userpage');
                }
            });
        }
    };

    return (
        <div>
            <form className='mt-8 space-y-6' onSubmit={SetUser}>
                {/* <input type='hidden' name='remember' value='true'></input> */}
                <div className='-space-y-px rounded-md shadow-sm'>
                    <div>
                        <label htmlFor='login' className='sr-only'>
                            {content.registration.login[state.language]}
                        </label>
                        <input
                            id='loginSingIn'
                            name='login'
                            type='login'
                            autoComplete='login'
                            required
                            value={loginSingIn}
                            onChange={(event) => onChangeLoginSingIn(event)}
                            className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                            placeholder={content.registration.login[state.language]}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor='password' className='sr-only'>
                            {content.registration.password[state.language]}
                        </label>
                        <input
                            id='passwordSingIn'
                            name='password'
                            type='password'
                            autoComplete='current-password'
                            required
                            value={passwordSingIn}
                            onChange={(event) => onChangePasswordSingIn(event)}
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
                        {content.registration.submit[state.language]}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
