import spinner from '../../assets/icons/spinner_corall.png';
import { emailRegexp, loginRegexp, phoneRegexp } from 'utils/constants';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from 'store/store';
import { content } from 'utils/content';
import { createUser } from 'api/api';

const RegistrationForm = () => {
    const { state, dispatch } = useContext(AppContext);
    const [login, setLogin] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitBtnClass, setSubmitBtnClass] = useState('hidden');

    const [isLoginFocus, setIsLoginFocus] = useState(false);
    const [isPhoneFocus, setIsPhoneFocus] = useState(false);
    const [isEmailFocus, setIsEmailFocus] = useState(false);
    const [isPasswordFocus, setIsPasswordFocus] = useState(false);

    const [isLoginValid, setIsLoginValid] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const [errorExistingLoginEmail, setErrorExistingLoginEmail] = useState(false);

    const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replaceAll(' ', '');
        setLogin(value);
        if (value.length > 2 && loginRegexp.test(value)) {
            setIsLoginValid(true);
        } else {
            setIsLoginValid(false);
        }
    };
    const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/[^\d+]/g, '').replaceAll(' ', '');
        setPhone(value);
        if (value.match(phoneRegexp)) {
            setIsPhoneValid(true);
        } else {
            setIsPhoneValid(false);
        }
    };
    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replaceAll(' ', '');
        setEmail(value);
        if (value.match(emailRegexp)) {
            setIsEmailValid(true);
        } else {
            setIsEmailValid(false);
        }
    };
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replaceAll(' ', '');
        setPassword(value);
        if (value.length > 5) {
            setIsPasswordValid(true);
        } else {
            setIsPasswordValid(false);
        }
    };

    const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        const { target } = event;
        switch (target.name) {
            case 'login':
                setIsLoginFocus(true);
                break;
            case 'phone':
                setIsPhoneFocus(true);
                break;
            case 'email':
                setIsEmailFocus(true);
                break;
            case 'password':
                setIsPasswordFocus(true);
                break;
        }
    };

    const navigate = useNavigate();

    const CreateNewUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitBtnClass('');
        if (isLoginValid && isPhoneValid && isEmailValid && isPasswordValid) {
            const body = {
                login,
                password,
                email,
                phone,
            };

            createUser(body).then((user) => {
                if (typeof user.data === 'object') {
                    setLogin('');
                    setPhone('');
                    setEmail('');
                    setPassword('');
                    dispatch({
                        type: 'updateUser',
                        payload: user.data,
                    });
                    navigate('/userpage');
                } else {
                    setSubmitBtnClass('hidden');
                    setErrorExistingLoginEmail(true);
                }
            });
        } else {
            setSubmitBtnClass('hidden');
        }
    };

    return (
        <form className='mt-8 space-y-6 w-80' onSubmit={CreateNewUser}>
            {errorExistingLoginEmail && (
                <p className='text-corall text-center font-semibold drop-shadow-md uppercase'>
                    {content.error.userExsist[state.language]}
                </p>
            )}
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
                        onBlur={(event) => blurHandler(event)}
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
                        type='text'
                        autoComplete='phone'
                        required
                        value={phone}
                        onChange={(event) => onChangePhone(event)}
                        onBlur={(event) => blurHandler(event)}
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
                        onBlur={(event) => blurHandler(event)}
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
                        onBlur={(event) => blurHandler(event)}
                        className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                        placeholder={content.registration.password[state.language]}
                    ></input>
                </div>
            </div>
            <div>
                {isLoginFocus && !isLoginValid && (
                    <p className='text-sm text-corall drop-shadow-md'>{content.error.shortLogin[state.language]}</p>
                )}
                {isPhoneFocus && !isPhoneValid && (
                    <p className='text-sm text-corall drop-shadow-md'>{content.error.wrongPhone[state.language]}</p>
                )}
                {isEmailFocus && !isEmailValid && (
                    <p className='text-sm text-corall drop-shadow-md'>{content.error.wrongEmail[state.language]}</p>
                )}
                {isPasswordFocus && !isPasswordValid && (
                    <p className='text-sm text-corall drop-shadow-md'>{content.error.shortPassword[state.language]}</p>
                )}
            </div>
            <div>
                <button
                    type='submit'
                    className='group relative flex gap-3 w-full justify-center items-center bg-black text-corall hover:bg-transparent hover:text-black border border-black rounded-full font-semibold py-2 px-4 focus:outline-none'
                >
                    <img className={`${submitBtnClass} animate-spin h-4 w-4`} src={spinner}></img>
                    {content.registration.registerBtn[state.language]}
                </button>
            </div>
        </form>
    );
};

export default RegistrationForm;
