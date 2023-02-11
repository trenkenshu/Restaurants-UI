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
            <div className='flex flex-col w-full h-full items-center md:items-stretch md:flex-row gap-3'>
                <div className='flex justify-center h-full w-full md:w-8/12 '>
                    <RestaurantScheme />
                </div>
                <div className='flex flex-col justify-between  gap-2 min-h-full w-full md:w-4/12'>
                    <div className='flex flex-col w-full items-center gap-2'>
                        <input
                            className='w-10/12 md:w-full border border-zinc-800 rounded pl-2'
                            type='text'
                            placeholder='Full name'
                        ></input>
                        <input
                            className='w-10/12 md:w-full border border-zinc-800 rounded pl-2'
                            type='text'
                            placeholder='Phone number'
                        ></input>
                        <input
                            className='w-10/12 md:w-full border border-zinc-800 rounded pl-2'
                            type='number'
                            placeholder='Number of guests'
                        ></input>
                        <input className='w-10/12 md:w-full border border-zinc-800 rounded pl-2' type='date'></input>
                    </div>
                    <div className='flex gap-4 justify-center'>
                        <ButtonBlack width='w-32' height='h-10' buttonText='Book' />
                        <ButtonBlack width='w-32' height='h-10' buttonText='Cancel' onClick={closeBookingModal} />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default BookingModal;
