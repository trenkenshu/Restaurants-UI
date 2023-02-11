import ButtonBlack from 'components/ButtonBlack';
import Modal from 'components/Modal';
import RestaurantScheme from 'components/RestaurantScheme';
import { FC } from 'react';

type ModalUserDataProps = {
    isBookingModalOpen: boolean;
    closeBookingModal: () => void;
};

const BookingModal: FC<ModalUserDataProps> = ({ isBookingModalOpen, closeBookingModal }) => {
    return (
        <Modal isModalOpen={isBookingModalOpen}>
            <h3 className='text-3xl'>Book a table</h3>
            <div className='flex flex-col items-center md:items-stretch md:flex-row w-full gap-3'>
                <div className='flex justify-center w-full md:w-8/12 '>
                    <RestaurantScheme />
                </div>
                <div className='flex flex-col items-center gap-2 h-full w-full md:w-4/12'>
                    <input
                        className='w-8/12 md:w-full border border-zinc-800 rounded pl-2'
                        type='text'
                        placeholder='Full name'
                    ></input>
                    <input
                        className='w-8/12 md:w-full border border-zinc-800 rounded pl-2'
                        type='text'
                        placeholder='Phone number'
                    ></input>
                    <input
                        className='w-8/12 md:w-full border border-zinc-800 rounded pl-2'
                        type='number'
                        placeholder='Number of guests'
                    ></input>
                    <input className='w-8/12 md:w-full border border-zinc-800 rounded pl-2' type='date'></input>
                </div>
            </div>
            <div className='flex gap-5'>
                <ButtonBlack width='w-32' height='h-10' buttonText='Book' />
                <ButtonBlack width='w-32' height='h-10' buttonText='Cancel' onClick={closeBookingModal} />
            </div>
        </Modal>
    );
};

export default BookingModal;
