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

interface ModalReviewProps {
    setIsModalReviewOpen: (data: boolean) => void;
    isModalReviewOpen: boolean;
    restaurant: IRestaurant;
    userReview?: IReview;
}

const ModalReview: FC<ModalReviewProps> = ({ setIsModalReviewOpen, isModalReviewOpen, restaurant, userReview }) => {
    const { state, dispatch } = useContext(AppContext);
    const [errorMessageRating, setErrorMessageRating] = useState('');
    const [errorMessageReview, setErrorMessageReview] = useState('');
    const [submitBtnClass, setSubmitBtnClass] = useState('hidden');

    const closeModal = () => {
        setIsModalReviewOpen(false);
        document.body.classList.remove('active');
    };

    const currentRating = userReview ? Number(userReview.rating) : '';
    const [rating, setRating] = useState(currentRating);
    const onChangeRating = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setRating(value);
        console.log('onChange rating:::', rating);
    };

    const currentReview = userReview ? userReview.text : '';
    const [review, setReview] = useState(currentReview);
    const onChangeReview = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        setReview(value);
        checkInputs();
    };

    const checkInputs = () => {
        review.split(' ').length < 5
            ? setErrorMessageReview('Review should contain more than 5 words')
            : setErrorMessageReview('');
        rating === '' ? setErrorMessageRating('Rating should be more than 0') : setErrorMessageRating('');
    };

    const updateUserState = () => {
        getUser(state.user.id).then((updatedUser) => {
            dispatch({
                type: 'updateUser',
                payload: updatedUser,
            });
            setIsModalReviewOpen(false);
        });
    };

    const saveRaview = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitBtnClass('');
        checkInputs();

        const createReviewBody = {
            clientId: state.user.id,
            cafeId: restaurant.id,
            rating: rating,
            text: review,
        };

        if (rating > 0 && review.split(' ').length > 5) {
            setSubmitBtnClass('');

            if (userReview) {
                updateReview({ id: userReview.id, rating: rating, text: review }).then((data) => {
                    if (typeof data === 'object') {
                        updateUserState();
                        setIsModalReviewOpen(false);
                    } else {
                        console.log('error:::', data);
                    }
                });
            } else {
                createReview(createReviewBody).then((data) => {
                    if (typeof data === 'object') {
                        getRestaurant(restaurant.id).then((updatedRestaurant) => {
                            dispatch({
                                type: 'getRestaurant',
                                payload: updatedRestaurant,
                            });
                        });
                        updateUserState();
                        setIsModalReviewOpen(false);
                    } else {
                        console.log('error:::', data);
                    }
                });
            }
        } else {
            setSubmitBtnClass('hidden');
        }
    };

    return (
        <Modal isModalOpen={isModalReviewOpen} closeModal={closeModal} width={'w-[32rem]'} height={'min-h-max'}>
            <div className='w-full p-8 flex flex-col items-center'>
                <h4 className='font-semibold text-xl drop-shadow-md py-4'>{`Review about restaurant "${restaurant.name}"`}</h4>
                <form onSubmit={saveRaview} className='flex flex-col gap-4 w-96'>
                    <div className='flex gap-5 items-center'>
                        <input
                            type='number'
                            max='5'
                            min='0'
                            step='0.5'
                            value={rating}
                            required
                            onChange={(event) => onChangeRating(event)}
                            className='w-20 h-8 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                        ></input>
                        <Rating value={rating} />
                    </div>

                    <div>
                        <label htmlFor='text' className='w-full text-start'>
                            Your review:
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
                        <img className={`${submitBtnClass} animate-spin h-10 w-10 drop-shadow-md`} src={spinner}></img>
                        {errorMessageReview}
                        {errorMessageRating}
                    </p>

                    <div className='flex flex-col sm:flex-row w-full gap-5 mt-3 justify-center items-center'>
                        <ButtonBlack
                            width={'w-32'}
                            height={'h-8'}
                            buttonText={content.common.cancel[state.language]}
                            onClick={closeModal}
                        />
                        <ButtonBlack
                            width={'w-32'}
                            height={'h-8'}
                            buttonText={content.common.save[state.language]}
                            // onClick={() => saveUpdatedUserData}
                            type='submit'
                        />
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default ModalReview;
