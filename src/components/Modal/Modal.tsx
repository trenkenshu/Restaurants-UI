import { FC } from 'react';

interface ModalProps {
    children: React.ReactNode;
    isModalOpen: boolean;
    closeModal: () => void;
    width: string;
    height: string;
}

const Modal: FC<ModalProps> = ({ children, isModalOpen, width, height, closeModal }) => {
    return (
        <div
            className={`${
                isModalOpen ? 'visible opacity-100' : 'invisible opacity-0'
            } flex fixed top-0 left-0 w-full h-full bg-zinc-800/90 z-[1500] justify-center items-center transition ease-in-out duration-500`}
            onClick={closeModal}
        >
            <div
                className={`relative ${width} ${height} flex flex-col gap-3 rounded bg-smoke-gray dark:bg-zinc-800 border border-zinc-800 dark:border-smoke-gray rounded`}
                onClick={(event) => event.stopPropagation()}
            >
                {children}
                <div
                    className='absolute z-[1501] block top-1 right-1 bg-closemenuCorall w-8 h-8 bg-cover bg-no-repeat bg-center cursor-pointer bg-black hover:bg-zinc-900 dark:bg-smoke-gray rounded-lg'
                    onClick={closeModal}
                ></div>
            </div>
        </div>
    );
};

export default Modal;
