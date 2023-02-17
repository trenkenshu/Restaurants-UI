import { createReview, getRestaurant, getUser, updateReview } from 'api/api';
import ButtonBlack from 'components/ButtonBlack';
import Modal from 'components/Modal';
import { FC, useContext, useState } from 'react';
import { Rating } from 'react-rainbow-components';
import { AppContext } from 'store/store';
import { IRestaurant, IReview } from 'types';
import { content } from 'utils/content';
import spinner from '../../assets/icons/spinner_corall.png';
import './ModalReview.css';
import logoBlack from '../../assets/icons/favicon.png';
import logoWhite from '../../assets/icons/favicon_white3.png';
import { useNavigate } from 'react-router-dom';

interface ModalReviewProps {
    setIsModalReviewOpen: (data: boolean) => void;
    // closeModalReveiw: () => void;
    isModalReviewOpen: boolean;
    restaurant: IRestaurant;
    setRestaurant: (data: IRestaurant) => void;
    userReview?: IReview;
}

const ModalReview: FC<ModalReviewProps> = (props) => {
    const { setIsModalReviewOpen, isModalReviewOpen, restaurant, setRestaurant, userReview } = props;
    const { state, dispatch } = useContext(AppContext);
    const [errorMessageRating, setErrorMessageRating] = useState('');
    const [errorMessageReview, setErrorMessageReview] = useState('');
    const [submitBtnClass, setSubmitBtnClass] = useState('hidden');
    const navigate = useNavigate();
    const hasUserBooking = userReview ? true : state.user.bookings.some((el) => el.cafeId === restaurant.id);
    // const hasUserBooking = restaurant.bookings.map((el) => {
    //     if (el.guestId === state.user.id) {
    //         return el;
    //     }
    // });
    // console.log('hasUserBooking', hasUserBooking);

    const closeModalReview = () => {
        setIsModalReviewOpen(false);
        document.body.classList.remove('active');
        !userReview && document.getElementById('innerScroll')?.classList.remove('active');
    };

    const currentRating = userReview ? Number(userReview.rating) : '';
    const [rating, setRating] = useState(currentRating);
    // const onChangeRating = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = event.target.value;
    //     setRating(value);
    //     console.log('onChange rating:::', rating);
    // };

    const currentReview = userReview ? userReview.text : '';
    const [review, setReview] = useState(currentReview);
    const onChangeReview = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        setReview(value);
        checkInputs();
    };

    const checkInputs = () => {
        review.split(' ').length < 5
            ? setErrorMessageReview(`${content.reviewModal.errorMsgReview[state.language]}`)
            : setErrorMessageReview('');
        rating === ''
            ? setErrorMessageRating(`${content.reviewModal.errorMsgRating[state.language]}`)
            : setErrorMessageRating('');
    };

    const updateUserState = () => {
        getUser(state.user.id).then((updatedUser) => {
            dispatch({
                type: 'updateUser',
                payload: updatedUser,
            });
            // setIsModalReviewOpen(false);
            closeModalReview();
        });
    };

    const saveReview = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitBtnClass('');
        checkInputs();
        console.log('review');

        const createReviewBody = {
            clientId: state.user.id,
            cafeId: restaurant.id,
            rating: rating,
            text: review,
        };
        console.log('rating', rating, typeof rating);
        console.log('review', review, typeof review);

        if (rating > 0 && review.split(' ').length > 5) {
            setSubmitBtnClass('');
            console.log('inner review');

            if (userReview) {
                updateReview({ id: userReview.id, rating: rating, text: review }).then((data) => {
                    if (typeof data === 'object') {
                        updateUserState();
                        // setIsModalReviewOpen(false);
                        closeModalReview();
                    } else {
                        console.log('error:::', data);
                    }
                });
            } else {
                setSubmitBtnClass('hidden');
                setRating(0);
                setReview('');
                createReview(createReviewBody).then((data) => {
                    console.log('Create review', data);
                    data.parsedTranslation = JSON.parse(data.translation);
                    // setRestaurant(data);
                    if (typeof data === 'object') {
                        setRestaurant(data);
                        // setSubmitBtnClass('hidden');
                        // setRating(0);
                        // setReview('');
                        // getRestaurant(restaurant.id).then((updatedRestaurant) => {
                        //     dispatch({
                        //         type: 'getRestaurant',
                        //         payload: updatedRestaurant,
                        //     });
                        // });
                        updateUserState();
                        // setIsModalReviewOpen(false);
                        closeModalReview();
                    } else {
                        console.log('error:::', data);
                    }
                });
            }
            closeModalReview();
        } else {
            setSubmitBtnClass('hidden');
        }
    };

    const setStars = (event: React.ChangeEvent<HTMLElement>) => {
        const target = event.target as HTMLInputElement;
        setRating(target.value);
    };

    return (
        <Modal
            isModalOpen={isModalReviewOpen}
            closeModal={closeModalReview}
            width={'w-[95%] sm:w-[90%] md:w-[650px] lg:w-[700px]'}
            height={'h-fit'}
        >
            {state.user.id > 0 && hasUserBooking ? (
                <div className='w-full p-8 flex flex-col items-center'>
                    <h4 className='font-semibold text-xl drop-shadow-md py-4'>{`${
                        content.reviewModal.title[state.language]
                    } "${restaurant.name}"`}</h4>
                    <form onSubmit={saveReview} className='flex flex-col gap-4 w-96'>
                        <div className='flex w-full gap-5 items-center justify-center'>
                            <Rating value={rating} onChange={setStars} required />
                        </div>

                        <div>
                            <label htmlFor='text' className='w-full text-start'>
                                {content.reviewModal.label[state.language]}:
                            </label>
                            <textarea
                                name='text'
                                value={review}
                                required
                                onChange={(event) => onChangeReview(event)}
                                className='w-full h-60 wrap overfloy-y-auto relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                            ></textarea>
                        </div>

                        <p className='text-corall text-center flex justify-center drop-shadow-md'>
                            <img
                                className={`${submitBtnClass} animate-spin h-10 w-10 drop-shadow-md`}
                                src={spinner}
                            ></img>
                            {errorMessageReview}
                            {errorMessageRating}
                        </p>

                        <div className='flex flex-col sm:flex-row w-full gap-5 mt-3 justify-center items-center'>
                            <ButtonBlack
                                width='w-32'
                                height='h-10'
                                fontsize='text-lg'
                                buttonText={content.common.cancel[state.language]}
                                onClick={closeModalReview}
                            />
                            <ButtonBlack
                                width='w-32'
                                height='h-10'
                                fontsize='text-lg'
                                buttonText={content.common.save[state.language]}
                                // onClick={() => saveUpdatedUserData}
                                type='submit'
                            />
                        </div>
                    </form>
                </div>
            ) : state.user.id > 0 && !hasUserBooking ? (
                <div className='flex flex-col gap-6 items-center p-5'>
                    <img className='dark:hidden mx-auto h-14 w-auto rounded-full shadow-lg' src={logoBlack}></img>
                    <img className='hidden dark:block mx-auto h-14 w-auto rounded-full shadow-lg' src={logoWhite}></img>
                    <p className='text-3xl sm:text-4xl text-center'>
                        {content.reviewModal.noBookingRedirect[state.language]}
                    </p>
                    <ButtonBlack
                        width='w-48'
                        height='h-12'
                        fontsize='text-lg'
                        buttonText={content.reviewModal.noBookingBtnText[state.language]}
                        onClick={closeModalReview}
                    />
                </div>
            ) : (
                <div className='flex flex-col gap-6 items-center p-5'>
                    <img className='dark:hidden mx-auto h-14 w-auto rounded-full shadow-lg' src={logoBlack}></img>
                    <img className='hidden dark:block mx-auto h-14 w-auto rounded-full shadow-lg' src={logoWhite}></img>
                    <p className='text-3xl sm:text-4xl text-center'>{content.bookingModal.guestText[state.language]}</p>
                    <ButtonBlack
                        width='w-48'
                        height='h-12'
                        fontsize='text-lg'
                        buttonText={content.bookingModal.guestBtnText[state.language]}
                        onClick={() => navigate('/registration')}
                    />
                </div>
            )}
        </Modal>
    );
};

export default ModalReview;
