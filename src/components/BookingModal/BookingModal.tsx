import BookingStepper from 'components/BookingStepper';
import ButtonBlack from 'components/ButtonBlack';
import Modal from 'components/Modal';
import RestaurantScheme from 'components/RestaurantScheme';
import { FC, useState, useContext } from 'react';
import { AppContext } from 'store/store';
import { IRestaurant } from 'types';

type BookingModalProps = {
    restaurant: IRestaurant;
    isBookingModalOpen: boolean;
    closeBookingModal: () => void;
    title: string;
    isBookingEdit: boolean;
    // getTableId: (event: React.MouseEvent<HTMLDivElement>) => void;
    // tableId: string;
    // setTableId: (data: string) => void;
};

const BookingModal: FC<BookingModalProps> = (props) => {
    const { isBookingModalOpen, closeBookingModal, title, isBookingEdit, restaurant } = props;
    const { state } = useContext(AppContext);
    // const [activeStep, setActiveStep] = useState(0);
    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');
    // const [guestAmount, setGuestAmount] = useState(1);
    // const [date, setDate] = useState(new Date());
    // const [time, setTime] = useState('16:32');

    // const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { target } = event;
    //     console.log('name', target.value);
    //     setName(target.value);
    // };
    // const phoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { target } = event;
    //     console.log('phone', target.value);
    //     setPhone(target.value);
    // };
    // const guestAmountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { target } = event;
    //     console.log('guestAmount', target.value);
    //     setGuestAmount(Number(target.value));
    // };

    return (
        <Modal
            isModalOpen={isBookingModalOpen}
            closeModal={closeBookingModal}
            width={'w-[90%] md:w-[650px] lg:w-[700px]'}
            height={'h-fit'}
        >
            <div className='flex flex-col h-full justify-between items-center'>
                <BookingStepper restaurant={restaurant} closeBookingModal={closeBookingModal} />
            </div>
        </Modal>
    );
};
// activeStep={activeStep} setActiveStep={setActiveStep}
export default BookingModal;
