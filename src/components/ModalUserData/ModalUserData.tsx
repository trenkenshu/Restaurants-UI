import { updateUser } from 'api/api';
import ButtonBlack from 'components/ButtonBlack';
import Modal from 'components/Modal';
import { FC, useContext, useState } from 'react';
import { AppContext } from 'store/store';
import { content } from 'utils/content';
import spinner from '../../assets/icons/spinner_corall.png';

interface ModalUserDataProps {
    setIsModalUserInfoOpen: (data: boolean) => void;
    isModalUserInfoOpen: boolean;
}

const ModalUserData: FC<ModalUserDataProps> = ({ setIsModalUserInfoOpen, isModalUserInfoOpen }) => {
    const { state, dispatch } = useContext(AppContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMsgPhone, setErrorMsgPhone] = useState('');
    const [errorMsgEmail, setErrorMsgEmail] = useState('');
    const [errorMsgPrevPassword, setErrorMsgPrevPassword] = useState('');
    const [errorMsgNewPassword, setErrorMsgNewPassword] = useState('');
    const [submitBtnClass, setSubmitBtnClass] = useState('hidden');

    const closeModal = () => {
        setIsModalUserInfoOpen(false);
        document.body.classList.remove('active');
    };

    const [phone, setPhone] = useState(state.user.phone);
    const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replaceAll(' ', '');
        if (value.match(/^\+\d{9,}/g)) {
            setErrorMsgPhone('');
        } else {
            setErrorMsgPhone(content.error.wrongPhone[state.language]);
        }
        setPhone(value);
    };
    const [email, setEmail] = useState(state.user.email);
    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replaceAll(' ', '');
        const emailRegexp =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (String(value).toLowerCase().match(emailRegexp)) {
            setErrorMsgEmail('');
        } else {
            setErrorMsgEmail(content.error.wrongEmail[state.language]);
        }
        setEmail(value);
    };

    const [isPrevPasswordEqualNew, setIsPrevPasswordEqualNew] = useState(false);
    const CheckPrevPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMsgPrevPassword('');
        const value = event.target.value.toString().replaceAll(' ', '');
        value === state.user.password ? setIsPrevPasswordEqualNew(true) : setIsPrevPasswordEqualNew(false);
        console.log(value === state.user.password);
    };

    const [newPassword, setNewPassword] = useState('');
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replaceAll(' ', '');
        if (value.length > 5 || value === '') {
            setErrorMsgNewPassword('');
        } else {
            setErrorMsgNewPassword(content.error.shortPassword[state.language]);
        }
        console.log(value);
        setNewPassword(value);
    };

    const saveUpdatedUserData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitBtnClass('');
        if (isPrevPasswordEqualNew && errorMsgPhone === '' && errorMsgEmail === '' && errorMsgNewPassword === '') {
            setErrorMessage('');
            setSubmitBtnClass('');
            setErrorMsgPrevPassword('');
            const bodyForUpdateUser = {
                id: state.user.id,
                phone: phone ? phone : state.user.phone,
                email: email ? email : state.user.email,
                password: newPassword ? newPassword : state.user.password,
            };
            console.log(bodyForUpdateUser);

            updateUser(bodyForUpdateUser).then((updatedUser) => {
                if (typeof updatedUser.data === 'object') {
                    dispatch({
                        type: 'updateUser',
                        payload: updatedUser.data,
                    });
                    setIsModalUserInfoOpen(false);
                    setErrorMessage('');
                    setErrorMsgPrevPassword('');
                    setSubmitBtnClass('hidden');
                } else {
                    setErrorMessage(JSON.stringify(updatedUser.data));
                }
                console.log(state.user);
            });
        } else {
            setSubmitBtnClass('hidden');
            setErrorMsgPrevPassword(content.error.wrongPassword[state.language]);
        }
    };

    return (
        <Modal isModalOpen={isModalUserInfoOpen}>
            <h4 className='font-semibold text-xl drop-shadow-md'>{content.userPage.changeInfo[state.language]}</h4>
            <form onSubmit={saveUpdatedUserData} className='flex flex-col gap-4 w-96'>
                <div>
                    <label htmlFor='phone' className='w-full h-14 text-start'>
                        {content.registration.phone[state.language]}
                    </label>
                    <p className='text-corall drop-shadow-md'>{errorMsgPhone}</p>
                    <input
                        name='phone'
                        type='text'
                        autoComplete='phone'
                        value={phone}
                        onChange={(event) => onChangePhone(event)}
                        className='w-full h-8 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                    ></input>
                </div>

                <div>
                    <label htmlFor='email' className='w-full text-start'>
                        {content.registration.emailadress[state.language]}
                    </label>
                    <p className='text-corall drop-shadow-md'>{errorMsgEmail}</p>
                    <input
                        name='email'
                        type='email'
                        autoComplete='email'
                        value={email}
                        onChange={(event) => onChangeEmail(event)}
                        className='w-full h-8 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                    ></input>
                </div>

                <div>
                    <label htmlFor='newPassword' className='w-full text-start'>
                        {content.userPage.newPassword[state.language]}
                    </label>
                    <p className='text-corall drop-shadow-md'>{errorMsgNewPassword}</p>
                    <input
                        name='newPassword'
                        type='password'
                        autoComplete='password'
                        value={newPassword}
                        placeholder={content.userPage.newPassword[state.language]}
                        onChange={(event) => onChangePassword(event)}
                        className='w-full h-8 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                    ></input>
                </div>

                <div>
                    <label htmlFor='prevPassword' className='w-full text-start'>
                        {`${content.userPage.prevPassword[state.language]} *`}
                    </label>
                    <p className='text-corall drop-shadow-md'>{errorMsgPrevPassword}</p>
                    <input
                        name='prevPassword'
                        type='password'
                        autoComplete='password'
                        required
                        defaultValue=''
                        placeholder={content.userPage.prevPassword[state.language]}
                        onChange={(event) => CheckPrevPassword(event)}
                        className='w-full h-8 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                    ></input>
                </div>

                <p className='text-corall text-center flex justify-center drop-shadow-md'>
                    <img className={`${submitBtnClass} animate-spin h-10 w-10 drop-shadow-md`} src={spinner}></img>
                    {errorMessage}
                </p>

                <div className='flex flex-col sm:flex-row w-full gap-5 mt-3 justify-center items-center'>
                    <ButtonBlack
                        width={'w-32'}
                        height={'h-8'}
                        buttonText={content.common.cancel[state.language]}
                        onClick={closeModal}
                    />
                    <ButtonBlack
                        width={'w-32'}
                        height={'h-8'}
                        buttonText={content.common.save[state.language]}
                        // onClick={() => saveUpdatedUserData}
                        type='submit'
                    />
                </div>
            </form>
        </Modal>
    );
};

export default ModalUserData;
