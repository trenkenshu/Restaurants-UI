import spinner from '../../assets/icons/spinner_corall.png';
import { emailRegexp, phoneRegexp } from 'utils/constants';
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
    const [errorMessage, setErrorMessage] = useState('');
    const [submitBtnClass, setSubmitBtnClass] = useState('hidden');

    const [isLoginValid, setIsLoginValid] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const [errorMsgLogin, setErrorMsgLogin] = useState('');
    const [errorMsgPhone, setErrorMsgPhone] = useState('');
    const [errorMsgEmail, setErrorMsgEmail] = useState('');
    const [errorMsgPassword, setErrorMsgPassword] = useState('');

    const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replaceAll(' ', '');
        setLogin(value.toString());
    };
    const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toString().replaceAll(' ', '');
        setPhone(value);
        console.log(phone);
    };
    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replaceAll(' ', '');
        setEmail(value);
    };
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replaceAll(' ', '');
        setPassword(value);
    };

    const checkAllInputs = () => {
        if (login.length > 2) {
            setIsLoginValid(true);
            setErrorMsgLogin('');
        } else {
            setIsLoginValid(false);
            setErrorMsgLogin(content.error.shortLogin[state.language]);
        }

        if (phone.match(phoneRegexp)) {
            setIsPhoneValid(true);
            setErrorMsgPhone('');
        } else {
            setIsPhoneValid(false);
            setErrorMsgPhone(content.error.wrongPhone[state.language]);
        }

        if (email.match(emailRegexp)) {
            setIsEmailValid(true);
            setErrorMsgEmail('');
        } else {
            setIsEmailValid(false);
            setErrorMsgEmail(content.error.wrongEmail[state.language]);
        }

        if (password.length > 5) {
            setIsPasswordValid(true);
            setErrorMsgPassword('');
        } else {
            setIsPasswordValid(false);
            setErrorMsgPassword(content.error.shortPassword[state.language]);
        }
    };

    const navigate = useNavigate();

    const CreateNewUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        checkAllInputs();
        setSubmitBtnClass('');
        if (isLoginValid && isPhoneValid && isEmailValid && isPasswordValid) {
            const body = {
                login,
                password,
                email,
                phone,
            };
            console.log(body);
            createUser(body).then((user) => {
                console.log(user);
                if (typeof user.data === 'object') {
                    setErrorMessage('');
                    setLogin('');
                    setPhone('');
                    setEmail('');
                    setPassword('');
                    setSubmitBtnClass('');
                    dispatch({
                        type: 'updateUser',
                        payload: user.data,
                    });
                    navigate('/userpage');
                } else {
                    setSubmitBtnClass('hidden');
                    // setErrorMessage(JSON.parse(JSON.stringify(user.data)).slice(10, -2));
                    setErrorMessage(content.error.userExsist[state.language]);
                }
            });
        } else {
            setSubmitBtnClass('hidden');
        }
    };

    return (
        <form className='mt-8 space-y-6 w-80 h-48' onSubmit={CreateNewUser}>
            <div>
                <p className='text-corall text-center font-semibold drop-shadow-md uppercase'>{errorMessage}</p>
                <p className='text-sm text-corall drop-shadow-md'>{errorMsgLogin}</p>
                <p className='text-sm text-corall drop-shadow-md'>{errorMsgPhone}</p>
                <p className='text-sm text-corall drop-shadow-md'>{errorMsgEmail}</p>
                <p className='text-sm text-corall drop-shadow-md'>{errorMsgPassword}</p>
            </div>
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
                        type='text'
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
                    className='group relative flex gap-3 w-full justify-center rounded-full items-center bg-black text-corall hover:bg-transparent hover:text-black border border-black rounded-full font-semibold py-2 px-4 focus:outline-none'
                >
                    <img className={`${submitBtnClass} animate-spin h-4 w-4`} src={spinner}></img>
                    {content.registration.registerBtn[state.language]}
                </button>
            </div>
        </form>
    );
};

export default RegistrationForm;
