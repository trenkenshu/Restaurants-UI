import { createReview, getRestaurant, getUser, updateReview } from 'api/api';
import ButtonBlack from 'components/ButtonBlack';
import Modal from 'components/Modal';
import { FC, useContext, useEffect, useState } from 'react';
import { Rating } from 'react-rainbow-components';
import { AppContext } from 'store/store';
import { IRestaurant, IReview } from 'types';
import { content } from 'utils/content';
import spinner from '../../assets/icons/spinner_corall.png';
import logoBlack from '../../assets/icons/favicon.png';
import logoWhite from '../../assets/icons/favicon_white3.png';
import { useNavigate } from 'react-router-dom';

interface UserPageModalReviewProps {
    // setIsModalReviewOpen: (data: boolean) => void;
    closeModalReview: () => void;
    isModalReviewOpen: boolean;
    restaurant: IRestaurant;
    // setRestaurant: (data: IRestaurant) => void;
    userReview?: IReview;
}

const UserPageModalReview: FC<UserPageModalReviewProps> = (props) => {
    const { closeModalReview, isModalReviewOpen, restaurant, userReview } = props;
    const { state, dispatch } = useContext(AppContext);
    const [errorMessageRating, setErrorMessageRating] = useState('');
    const [errorMessageReview, setErrorMessageReview] = useState('');
    const [submitBtnClass, setSubmitBtnClass] = useState('hidden');
    const navigate = useNavigate();
    //
    const [rating, setRating] = useState(Number(userReview && userReview.rating));
    const [review, setReview] = useState(userReview && userReview.text);

    useEffect(() => {
        checkInputs();
    }, [rating, review]);

    const onChangeReview = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        setReview(value);
    };

    const checkInputs = () => {
        review && review.split(' ').length < 5
            ? setErrorMessageReview(`${content.reviewModal.errorMsgReview[state.language]}`)
            : setErrorMessageReview('');
        rating === 0
            ? setErrorMessageRating(`${content.reviewModal.errorMsgRating[state.language]}`)
            : setErrorMessageRating('');
    };

    const updateUserState = () => {
        getUser(state.user.id).then((updatedUser) => {
            dispatch({
                type: 'updateUser',
                payload: updatedUser,
            });
        });
    };

    const saveReview = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // setSubmitBtnClass('');
        console.log('rating', rating, typeof rating);
        console.log('review', review, typeof review);

        if (rating > 0 && review && review.split(' ').length >= 5) {
            setSubmitBtnClass('');
            console.log('inner review');
            if (userReview) {
                updateReview({ id: userReview.id, rating: rating, text: review }).then((data) => {
                    if (typeof data === 'object') {
                        setRating(0);
                        setReview('');
                        updateUserState();
                        setSubmitBtnClass('hidden');
                        // setIsModalReviewOpen(false);
                        closeModalReview();
                    } else {
                        console.log('error:::', data);
                    }
                });
            }
            // closeModalReview();
        } else {
            setSubmitBtnClass('hidden');
        }
    };

    const setStars = (event: React.ChangeEvent<HTMLElement>) => {
        const target = event.target as HTMLInputElement;
        setRating(Number(target.value));
    };

    return (
        <Modal
            isModalOpen={isModalReviewOpen}
            closeModal={closeModalReview}
            width={'w-[95%] sm:w-[90%] md:w-[650px] lg:w-[700px]'}
            height={'h-fit'}
        >
            {state.user.id > 0 ? (
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
                                value={review && review}
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

export default UserPageModalReview;
