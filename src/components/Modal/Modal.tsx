import { FC } from 'react';

interface ModalProps {
    children: React.ReactNode;
    isModalOpen: boolean;
}

const Modal: FC<ModalProps> = ({ children, isModalOpen }) => {
    return (
        <div
            className={`${
                isModalOpen ? 'visible opacity-100' : 'invisible opacity-0'
            } flex fixed top-0 left-0 w-full h-full bg-zinc-800/70 z-1500 justify-center items-center transition ease-in-out duration-300`}
        >
            <div className='flex justify-center items-center gap-5 flex-col rounded w-72 md:w-96 min-h-max p-8 bg-smoke-gray dark:bg-zinc-800 shadow-gray-300 shadow-2xl'>
                {children}
            </div>
        </div>
    );
};

export default Modal;