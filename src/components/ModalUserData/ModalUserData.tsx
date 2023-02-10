import ButtonBlack from 'components/ButtonBlack';
import Modal from 'components/Modal';
import { FC, useContext } from 'react';
import { AppContext } from 'store/store';
import { content } from 'utils/content';

interface ModalUserDataProps {
    setIsModalUserInfoOpen: (data: boolean) => void;
    isModalUserInfoOpen: boolean;
}

const ModalUserData: FC<ModalUserDataProps> = ({ setIsModalUserInfoOpen, isModalUserInfoOpen }) => {
    const closeModal = () => {
        setIsModalUserInfoOpen(false);
        document.body.classList.remove('active');
    };

    const { state } = useContext(AppContext);
    return (
        <Modal isModalOpen={isModalUserInfoOpen}>
            <h4>Change Personal Info</h4>
            <input className='w-9/12' type='text'></input>
            <input className='w-9/12' type='text'></input>
            <input className='w-9/12' type='text'></input>
            <div className='flex flex-col sm:flex-row w-full gap-5 justify-center items-center'>
                <ButtonBlack
                    width={'w-32'}
                    height={'h-8'}
                    buttonText={content.userPage.cancel[state.language]}
                    onClick={closeModal}
                />
                <ButtonBlack width={'w-32'} height={'h-8'} buttonText={content.userPage.edit[state.language]} />
            </div>
        </Modal>
    );
};

export default ModalUserData;
