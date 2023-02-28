import { Dispatch, FC, SetStateAction, useContext, useState } from 'react';
import setParsedTranslation from 'utils/functions/setParsedTranslation';
import spinner from '../../assets/icons/spinner_corall.png';
import { Rating } from 'react-simple-star-rating';
import ButtonBlack from 'components/ButtonBlack';
import { getUser, updateReview } from 'api/api';
import { AppContext } from 'store/store';
import { content } from 'utils/content';
import Modal from 'components/Modal';
import { IReview } from 'types';

interface UserPageModalReviewProps {
    closeModalReview: () => void;
    isModalReviewOpen: boolean;
    userReview: IReview;
    setUserReview: Dispatch<SetStateAction<IReview>>;
}

const UserPageModalReview: FC<UserPageModalReviewProps> = (props) => {
    const { state, dispatch } = useContext(AppContext);
    const [submitBtnClass, setSubmitBtnClass] = useState('hidden');
    const [errorMessageReview, setErrorMessageReview] = useState('');
    const { closeModalReview, isModalReviewOpen, userReview, setUserReview } = props;

    const handleRating = (rate: number) => {
        setUserReview((prev: IReview) => ({ ...prev, rating: rate }));
    };

    const onChangeReview = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        checkInputs();
        setUserReview((prev: IReview) => ({ ...prev, text: value }));
    };

    const checkInputs = () => {
        userReview.text && userReview.text.split(' ').length < 5
            ? setErrorMessageReview(`${content.reviewModal.errorMsgReview[state.language]}`)
            : setErrorMessageReview('');
    };

    const updateUserState = () => {
        getUser(state.user.id).then((updatedUser) => {
            setParsedTranslation(updatedUser);
            dispatch({
                type: 'updateUser',
                payload: updatedUser,
            });
        });
    };

    const saveReview = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (userReview.rating > 0 && userReview.text.split(' ').length >= 5) {
            setSubmitBtnClass('');
            updateReview({ id: userReview.id, rating: userReview.rating, text: userReview.text }).then((data) => {
                if (typeof data === 'object') {
                    updateUserState();
                    setSubmitBtnClass('hidden');
                    closeModalReview();
                }
            });
        } else {
            setErrorMessageReview(`${content.reviewModal.errorMsgReview[state.language]}`);
            setSubmitBtnClass('hidden');
        }
    };

    return (
        <Modal
            isModalOpen={isModalReviewOpen}
            closeModal={closeModalReview}
            width={'w-[95%] sm:w-[90%] md:w-[650px] lg:w-[700px]'}
            height={'h-fit'}
        >
            <div className='w-full p-8 flex flex-col items-center'>
                <h4 className='font-semibold text-xl drop-shadow-md py-4 text-center'>{`${
                    content.reviewModal.title[state.language]
                } "${userReview.cafe.name}"`}</h4>
                <form onSubmit={saveReview} noValidate className='w-full sm:w-11/12 flex flex-col gap-4'>
                    <div className='flex w-full gap-5 items-center justify-center'>
                        <Rating
                            fillColor='#ff5f49'
                            size={25}
                            fillStyle={{ color: '#ff5f49', display: 'flex', flexWrap: 'wrap' }}
                            emptyStyle={{ display: 'flex' }}
                            initialValue={userReview.rating}
                            onClick={handleRating}
                        />
                    </div>

                    <div>
                        <label htmlFor='text' className='w-full text-start'>
                            {content.reviewModal.label[state.language]}:
                        </label>
                        <textarea
                            name='text'
                            value={userReview.text}
                            required
                            onChange={(event) => onChangeReview(event)}
                            className='w-full h-60 wrap overfloy-y-auto relative block appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-corall focus:outline-none focus:ring-corall sm:text-sm'
                        ></textarea>
                    </div>

                    <img
                        className={`${submitBtnClass} animate-spin h-10 w-10 mx-auto drop-shadow-md`}
                        src={spinner}
                    ></img>
                    <p className='text-corall text-center flex justify-center drop-shadow-md'>{errorMessageReview}</p>

                    <div className='flex flex-col sm:flex-row w-full gap-5 mt-3 justify-center items-center'>
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
        </Modal>
    );
};

export default UserPageModalReview;
