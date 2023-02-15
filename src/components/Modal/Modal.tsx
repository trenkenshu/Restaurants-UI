import { FC } from 'react';

interface ModalProps {
    children: React.ReactNode;
    isModalOpen: boolean;
    closeModal: () => void;
    width: string;
    height: string;
}
// w-11/12 md:w-[750px] lg:w-[900px]
const Modal: FC<ModalProps> = ({ children, isModalOpen, width, height, closeModal }) => {
    return (
        <div
            className={`${
                isModalOpen ? 'visible opacity-100' : 'invisible opacity-0'
            } flex fixed top-0 left-0 w-full h-full bg-zinc-800/90 z-[1500] justify-center items-center transition ease-in-out duration-300`}
            onClick={closeModal}
        >
            <div
                className={`relative ${width} ${height} flex flex-col gap-3 rounded bg-smoke-gray dark:bg-zinc-800 border border-zinc-800 dark:border-smoke-gray rounded`}
                onClick={(event) => event.stopPropagation()}
            >
                {/* <div
                    className='absolute hidden md:block md:-top-10 md:-right-8 bg-closemenuCorall w-8 h-8 md:w-10 md:h-10 bg-cover bg-no-repeat bg-center cursor-pointer'
                    onClick={closeModal}
                ></div> */}
                {children}
            </div>
        </div>
    );
};

export default Modal;
