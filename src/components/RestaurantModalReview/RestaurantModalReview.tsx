import { createReview, getUser } from 'api/api';
import ButtonBlack from 'components/ButtonBlack';
import Modal from 'components/Modal';
import { FC, useContext, useEffect, useState } from 'react';
import { AppContext } from 'store/store';
import { IRestaurant, IReview } from 'types';
import { content } from 'utils/content';
import spinner from '../../assets/icons/spinner_corall.png';
import logoBlack from '../../assets/icons/favicon.png';
import logoWhite from '../../assets/icons/favicon_white3.png';
import { useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import setParsedTranslation from 'utils/functions/setParsedTranslation';

interface RestaurantModalReviewProps {
    closeModalReview: () => void;
    isModalReviewOpen: boolean;
    restaurant: IRestaurant;
    setRestaurant: (data: IRestaurant) => void;
    // userReview?: IReview;
}

const RestaurantModalReview: FC<RestaurantModalReviewProps> = (props) => {
    const { closeModalReview, isModalReviewOpen, restaurant, setRestaurant } = props;
    const { state, dispatch } = useContext(AppContext);
    const [errorMessageRating, setErrorMessageRating] = useState('');
    const [errorMessageReview, setErrorMessageReview] = useState('');
    const [submitBtnClass, setSubmitBtnClass] = useState('hidden');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const navigate = useNavigate();
    const hasUserBooking = state.user.bookings.some((el) => el.cafeId === restaurant.id);

    useEffect(() => {
        checkInputs();
    }, [rating, review]);

    const onChangeReview = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        setReview(value);
    };

    const checkInputs = () => {
        review.split(' ').length < 5
            ? setErrorMessageReview(`${content.reviewModal.errorMsgReview[state.language]}`)
            : setErrorMessageReview('');
        rating === 0
            ? setErrorMessageRating(`${content.reviewModal.errorMsgRating[state.language]}`)
            : setErrorMessageRating('');
    };

    const updateUserState = async () => {
        const newUser = await getUser(state.user.id);
        setParsedTranslation(newUser);
        dispatch({ type: 'updateUser', payload: newUser });
    };

    const saveReview = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const createReviewBody = {
            clientId: state.user.id,
            cafeId: restaurant.id,
            rating: rating,
            text: review,
        };

        if (rating > 0 && review.split(' ').length >= 5) {
            setSubmitBtnClass('');
            createReview(createReviewBody).then((data) => {
                if (typeof data === 'object') {
                    console.log('data::::', data);
                    data.parsedTranslation = JSON.parse(data.translation);
                    setRestaurant(data);
                    setSubmitBtnClass('hidden');
                    setRating(0);
                    setReview('');
                    updateUserState();
                    closeModalReview();
                } else {
                    console.log('error:::', data);
                }
            });
        } else {
            setSubmitBtnClass('hidden');
        }
    };

    const handleRating = (rate: number) => {
        setRating(rate);
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
                    <h4 className='font-semibold text-xl drop-shadow-md py-4 text-center'>{`${
                        content.reviewModal.title[state.language]
                    } "${restaurant.name}"`}</h4>
                    <form onSubmit={saveReview} noValidate className='flex flex-col gap-4 w-96 w-full sm:w-11/12'>
                        <div className='flex w-full gap-5 items-center justify-center'>
                            {/* <Rating value={rating} onChange={setStars} required /> */}
                            <Rating
                                fillColor='#ff5f49'
                                size={25}
                                fillStyle={{ color: '#ff5f49', display: 'flex', flexWrap: 'wrap' }}
                                emptyStyle={{ display: 'flex' }}
                                initialValue={rating}
                                onClick={handleRating}
                            />
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

                        <div className='text-corall text-center flex justify-center drop-shadow-md'>
                            <img
                                className={`${submitBtnClass} animate-spin h-10 w-10 drop-shadow-md`}
                                src={spinner}
                            ></img>
                            <div className='flex flex-col'>
                                <p>{errorMessageReview}</p>
                                <p> {errorMessageRating}</p>
                            </div>
                        </div>

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

export default RestaurantModalReview;
