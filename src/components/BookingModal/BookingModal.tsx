import BookingStepper from 'components/BookingStepper';
import ButtonBlack from 'components/ButtonBlack';
import Modal from 'components/Modal';
import RestaurantScheme from 'components/RestaurantScheme';
import { FC, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from 'store/store';
import { IRestaurant } from 'types';
import { content } from 'utils/content';
import logoBlack from '../../assets/icons/favicon.png';
import logoWhite from '../../assets/icons/favicon_white3.png';

type BookingModalProps = {
    restaurant: IRestaurant;
    setRestaurant: (data: IRestaurant) => void;
    isBookingModalOpen: boolean;
    closeBookingModal: () => void;
    title: string;
    isBookingEdit: boolean;
    // getTableId: (event: React.MouseEvent<HTMLDivElement>) => void;
    // tableId: string;
    // setTableId: (data: string) => void;
};

const BookingModal: FC<BookingModalProps> = (props) => {
    const { isBookingModalOpen, closeBookingModal, title, isBookingEdit, restaurant, setRestaurant } = props;
    const { state } = useContext(AppContext);
    const navigate = useNavigate();
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
            width={'w-[95%] sm:w-[90%] md:w-[650px] lg:w-[700px]'}
            height={'h-fit'}
        >
            <div className='flex flex-col h-full justify-between items-center'>
                {state.user.id > 0 ? (
                    <BookingStepper
                        restaurant={restaurant}
                        setRestaurant={setRestaurant}
                        closeBookingModal={closeBookingModal}
                    />
                ) : (
                    <div className='flex flex-col gap-6 items-center p-5'>
                        <img className='dark:hidden mx-auto h-14 w-auto rounded-full shadow-lg' src={logoBlack}></img>
                        <img
                            className='hidden dark:block mx-auto h-14 w-auto rounded-full shadow-lg'
                            src={logoWhite}
                        ></img>
                        <p className='text-3xl sm:text-4xl text-center'>
                            {content.bookingModal.guestText[state.language]}
                        </p>
                        <ButtonBlack
                            width='w-48'
                            height='h-12'
                            fontsize='text-lg'
                            buttonText={content.bookingModal.guestBtnText[state.language]}
                            onClick={() => navigate('/registration')}
                        />
                    </div>
                )}
            </div>
        </Modal>
    );
};
// activeStep={activeStep} setActiveStep={setActiveStep}
export default BookingModal;
