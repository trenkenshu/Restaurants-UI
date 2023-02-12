import ButtonBlack from 'components/ButtonBlack';
import Modal from 'components/Modal';
import RestaurantScheme from 'components/RestaurantScheme';
import { FC, useState, useContext } from 'react';
import { AppContext } from 'store/store';

type ModalUserDataProps = {
    isBookingModalOpen: boolean;
    closeBookingModal: () => void;
    title: string;
    isBookingEdit: boolean;
};

const BookingModal: FC<ModalUserDataProps> = ({ isBookingModalOpen, closeBookingModal, title, isBookingEdit }) => {
    const { state } = useContext(AppContext);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [guestAmount, setGuestAmount] = useState(1);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        console.log('name', target.value);
        setName(target.value);
    };
    const phoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        console.log('phone', target.value);
        setPhone(target.value);
    };
    const guestAmountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        console.log('guestAmount', target.value);
        setGuestAmount(Number(target.value));
    };

    return (
        <Modal isModalOpen={isBookingModalOpen}>
            <h3 className='text-3xl'>{title}</h3>
            <div className='flex flex-col w-full h-full items-center md:items-stretch md:flex-row gap-3'>
                <div className='flex justify-center h-full w-full md:w-8/12 '>
                    <RestaurantScheme />
                </div>
                <div className='flex flex-col justify-between  gap-2 min-h-full w-full md:w-4/12'>
                    <div className='flex flex-col w-full items-center gap-2'>
                        <input
                            className='w-10/12 md:w-full border border-zinc-800 rounded pl-2'
                            type='text'
                            placeholder='Name'
                            value={isBookingEdit ? state.user.login : name}
                            onChange={nameHandler}
                        ></input>
                        <input
                            className='w-10/12 md:w-full border border-zinc-800 rounded pl-2'
                            type='text'
                            placeholder='Phone number'
                            value={isBookingEdit ? state.user.login : phone}
                            onChange={phoneHandler}
                        ></input>
                        <div className='flex w-10/12 md:w-full gap-2'>
                            <input
                                className='w-10 border border-zinc-800 rounded pl-2'
                                type='number'
                                placeholder='Number of guests'
                                value={isBookingEdit ? state.user.login : guestAmount}
                                onChange={guestAmountHandler}
                            ></input>
                            <input className='w-full border border-zinc-800 rounded pl-2' type='date'></input>
                        </div>
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
