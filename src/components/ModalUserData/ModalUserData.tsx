import { loginUser, updateUser } from 'api/api';
import ButtonBlack from 'components/ButtonBlack';
import Modal from 'components/Modal';
import { FC, FormEventHandler, useContext, useState } from 'react';
import { AppContext } from 'store/store';
import { content } from 'utils/content';

interface ModalUserDataProps {
    setIsModalUserInfoOpen: (data: boolean) => void;
    isModalUserInfoOpen: boolean;
}

const ModalUserData: FC<ModalUserDataProps> = ({ setIsModalUserInfoOpen, isModalUserInfoOpen }) => {
    const { state, dispatch } = useContext(AppContext);
    const closeModal = () => {
        setIsModalUserInfoOpen(false);
        document.body.classList.remove('active');
    };

    const [phone, setPhone] = useState(state.user.phone);
    const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPhone(value);
        console.log(phone);
    };
    const [email, setEmail] = useState(state.user.email);
    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setEmail(value);
        console.log(email);
    };

    const [isPrevPasswordEqualNew, setIsPrevPasswordEqualNew] = useState(false);
    const CheckPrevPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toString();
        value === state.user.password ? setIsPrevPasswordEqualNew(true) : setIsPrevPasswordEqualNew(false);
        console.log(value === state.user.password);
    };

    const [newPassword, setNewPassword] = useState('');
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        console.log(value);
        setNewPassword(value);
    };

    const saveUpdatedUserData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isPrevPasswordEqualNew) {
            console.log('Trying to save new Info');
            const bodyForUpdateUser = {
                id: state.user.id,
                phone: phone,
                email: email,
                password: newPassword,
            };
            console.log(bodyForUpdateUser);

            updateUser(bodyForUpdateUser).then((updatedUser) => {
                if (typeof updatedUser.data.error === 'undefined') {
                    dispatch({
                        type: 'updateUser',
                        payload: updatedUser.data,
                    });
                }
                console.log(state.user);
            });
        }
    };

    return (
        <Modal isModalOpen={isModalUserInfoOpen}>
            <h4 className='font-semibold text-xl drop-shadow-md'>Change personal information</h4>
            <form onSubmit={saveUpdatedUserData} className='flex flex-col gap-4'>
                <label className='w-full h-14 text-start'>
                    {content.registration.phone[state.language]}
                    <input
                        name='phone'
                        type='text'
                        autoComplete='phone'
                        value={phone}
                        onChange={(event) => onChangePhone(event)}
                        className='w-full h-8 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                    ></input>
                </label>

                <label className='w-full text-start'>
                    {content.registration.emailadress[state.language]}
                    <input
                        name='email'
                        type='email'
                        autoComplete='email'
                        value={email}
                        onChange={(event) => onChangeEmail(event)}
                        className='w-full h-8 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                    ></input>
                </label>

                <label className='w-full text-start'>
                    Previous password
                    <input
                        name='prevPassword'
                        type='password'
                        autoComplete='password'
                        required
                        defaultValue=''
                        placeholder='Enter your previous password'
                        onChange={(event) => CheckPrevPassword(event)}
                        className='w-full h-8 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                    ></input>
                </label>

                <label className='w-full text-start'>
                    New password
                    <input
                        name='newPassword'
                        type='password'
                        autoComplete='password'
                        value={newPassword}
                        placeholder='Enter new password'
                        onChange={(event) => onChangePassword(event)}
                        className='w-full h-8 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                    ></input>
                </label>

                <div className='flex flex-col sm:flex-row w-full gap-5 mt-5 justify-center items-center'>
                    <ButtonBlack
                        width={'w-32'}
                        height={'h-8'}
                        buttonText={content.userPage.cancel[state.language]}
                        onClick={closeModal}
                    />
                    <ButtonBlack
                        width={'w-32'}
                        height={'h-8'}
                        buttonText={content.userPage.save[state.language]}
                        // onClick={() => saveUpdatedUserData}
                        type='submit'
                    />
                </div>
            </form>
        </Modal>
    );
};

export default ModalUserData;
