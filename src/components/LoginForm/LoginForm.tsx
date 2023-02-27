import setParsedTranslation from 'utils/functions/setParsedTranslation';
import spinner from '../../assets/icons/spinner_corall.png';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from 'store/store';
import { content } from 'utils/content';
import { loginUser } from 'api/api';

const LoginForm = () => {
    const { state, dispatch } = useContext(AppContext);
    const [loginSingIn, setLoginSingIn] = useState('');
    const [passwordSingIn, setPasswordSingIn] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [submitBtnClass, setSubmitBtnClass] = useState('hidden');

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
        setSubmitBtnClass('');
        if (loginSingIn && passwordSingIn) {
            const body = {
                login: loginSingIn,
                password: passwordSingIn,
            };
            loginUser(body).then((user) => {
                if (typeof user === 'object') {
                    setLoginSingIn('');
                    setPasswordSingIn('');
                    setErrorMessage('');
                    setSubmitBtnClass('hidden');
                    setParsedTranslation(user);
                    dispatch({
                        type: 'updateUser',
                        payload: user,
                    });
                    navigate('/userpage');
                } else {
                    setErrorMessage(content.error.wrongloginOrEmail[state.language]);
                    setSubmitBtnClass('hidden');
                }
            });
        }
    };

    return (
        <form className='mt-8 space-y-6 h-48' onSubmit={SetUser}>
            <p className='text-corall text-center font-semibold uppercase'>{errorMessage}</p>
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
                    className='group relative flex gap-3 w-full justify-center items-center bg-black text-corall hover:bg-transparent hover:text-black border border-black rounded-full font-semibold py-2 px-4 focus:outline-none'
                >
                    <img className={`${submitBtnClass} animate-spin h-4 w-4`} src={spinner}></img>
                    {content.registration.submit[state.language]}
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
