import React, { FC, useContext, useEffect, useState } from 'react';
import { deleteReview, getRestaurant, getUser } from 'api/api';
import ModalReview from 'components/ModalReview';
import { Rating } from 'react-rainbow-components';
import { useNavigate } from 'react-router-dom';
import { AppContext } from 'store/store';
import { emptyRestaurant, IReview } from 'types';
import { content } from 'utils/content';
import './ReviewItem.css';

interface ReviewItemProps {
    isOnRestaurantPage: boolean;
    review: IReview;
}

const ReviewItem: FC<ReviewItemProps> = ({ isOnRestaurantPage, review }) => {
    const { state, dispatch } = useContext(AppContext);
    const [title, setTitle] = useState('');
    const [isModalReviewOpen, setIsModalReviewOpen] = useState(false);
    const [currentRestaurant, setCurrentRestaurant] = useState(emptyRestaurant);

    const openModal = () => {
        setIsModalReviewOpen(true);
        document.body.classList.add('active');
    };

    const getCurrentRestaurant = async () => {
        await getRestaurant(review.cafeId).then((rest) => {
            setTitle(rest.name);
            setCurrentRestaurant(rest);
        });
    };

    const getReviewAuthor = async () => {
        await getUser(review.clientId).then((author) => {
            setTitle(author.login);
        });
    };

    const deleteUserReview = () => {
        deleteReview(review.id).then(() => {
            const updatedUser = state.user;
            updatedUser.reviews = state.user.reviews.filter((rev) => rev.id !== review.id);
            dispatch({
                type: 'updateUser',
                payload: updatedUser,
            });
        });
    };

    useEffect(() => {
        isOnRestaurantPage ? getReviewAuthor() : getCurrentRestaurant();
    }, []);

    const navigate = useNavigate();
    const goToRestaurantPage = (id: number) => {
        navigate(`/restaurants/${id}`);
        window.scrollTo(0, 0);
    };

    const styleOnRestPage = isOnRestaurantPage ? '' : 'hidden';
    const styleOnUserPage = isOnRestaurantPage ? 'hidden' : '';

    return (
        <div className='flex flex-col gap-2 rounded p-2'>
            <div className='flex justify-between'>
                <div className='w-9/12 flex flex-col sm:flex-row sm:items-center sm:gap-2'>
                    <h3 className='flex gap-2 flex-nowrap w-max text-xl 2xl:text-3xl font-bold dark:text-smoke-gray drop-shadow-md items-center cursor-pointer'>
                        <div className={`${styleOnRestPage} w-6 h-6 bg-userIcon bg-cover dark:bg-userIconCorall`}></div>
                        <p className={`${styleOnRestPage}`}>{title}</p>
                        <button className={`${styleOnUserPage}`} onClick={() => goToRestaurantPage(review.cafeId)}>
                            {title}
                        </button>
                    </h3>
                    <div className='flex text-start items-center gap-2'>
                        <div>{review.rating}</div>
                        <Rating value={review.rating} readOnly />
                    </div>
                </div>
                <div className={`${styleOnUserPage} w-15 flex items-center justify-end w-full gap-2`}>
                    <button
                        title={content.common.edit[state.language]}
                        className='w-4 h-4 bg-edit dark:bg-editWhite bg-cover'
                        onClick={openModal}
                    ></button>
                    <button
                        title={content.common.delete[state.language]}
                        className='w-4 h-4 mt-1 bg-delete dark:bg-deleteWhite bg-cover'
                        onClick={deleteUserReview}
                    ></button>
                </div>
            </div>
            <div className='w-full border rounded border-zinc-300 dark:border-zinc-600 p-1.5'>
                <p className='text-start italic'>{review.text}</p>
            </div>
            {isModalReviewOpen && (
                <ModalReview
                    setIsModalReviewOpen={setIsModalReviewOpen}
                    isModalReviewOpen={isModalReviewOpen}
                    restaurant={currentRestaurant}
                    userReview={review}
                />
            )}
        </div>
    );
};

export default ReviewItem;
