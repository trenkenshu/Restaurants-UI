import { createReview, getRestaurant, getRestaurants, getUser, updateReview, updateUser } from 'api/api';
import ButtonBlack from 'components/ButtonBlack';
import Modal from 'components/Modal';
import { FC, useContext, useEffect, useState } from 'react';
import { Rating } from 'react-rainbow-components';
import { AppContext } from 'store/store';
import { IRestaurant, IReview } from 'types';
import { content } from 'utils/content';
import spinner from '../../assets/icons/spinner_corall.png';

interface ModalReviewProps {
    setIsModalReviewOpen: (data: boolean) => void;
    isModalReviewOpen: boolean;
    restaurant: IRestaurant;
    userReview?: IReview;
}

const ModalReview: FC<ModalReviewProps> = ({ setIsModalReviewOpen, isModalReviewOpen, restaurant, userReview }) => {
    const { state, dispatch } = useContext(AppContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [submitBtnClass, setSubmitBtnClass] = useState('hidden');

    const closeModal = () => {
        setIsModalReviewOpen(false);
        document.body.classList.remove('active');
    };

    const currentRating = userReview ? Number(userReview.rating) : 0;
    const [rating, setRating] = useState(currentRating);
    const onChangeRating = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setRating(value);
        if (value === 0) {
            setErrorMessage('Rating should be more than 0');
        } else {
            setErrorMessage('');
        }
    };

    const currentReview = userReview ? userReview.text : '';
    const [review, setReview] = useState(currentReview);
    const onChangeReview = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        if (value.split(' ').length < 5) {
            setErrorMessage('Review should contain more than 5 words');
        } else {
            setErrorMessage('');
        }
        setReview(value);
    };

    const saveRaview = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitBtnClass('');

        const createReviewBody = {
            clientId: state.user.id,
            cafeId: restaurant.id,
            rating: rating,
            text: currentReview,
        };

        if (rating > 0) {
            setSubmitBtnClass('');

            if (userReview) {
                updateReview({ id: userReview.id, rating: rating, text: currentReview }).then((data) => {
                    if (typeof data === 'object') {
                        getUser(state.user.id).then((updatedUser) => {
                            dispatch({
                                type: 'updateUser',
                                payload: updatedUser,
                            });
                            setIsModalReviewOpen(false);
                        });
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
                            setIsModalReviewOpen(false);
                        });
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
        <Modal isModalOpen={isModalReviewOpen}>
            <h4 className='font-semibold text-xl drop-shadow-md'>{`Review about restaurant "${restaurant.name}"`}</h4>
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
                        Please tell something about this restaurant:
                    </label>
                    <textarea
                        name='text'
                        value={review}
                        required
                        onChange={(event) => onChangeReview(event)}
                        className='w-full h-44 wrap overfloy-y-auto relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                    ></textarea>
                </div>

                <p className='text-corall text-center flex justify-center drop-shadow-md'>
                    <img className={`${submitBtnClass} animate-spin h-10 w-10 drop-shadow-md`} src={spinner}></img>
                    {errorMessage}
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
        </Modal>
    );
};

export default ModalReview;
