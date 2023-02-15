import React, { FC, useEffect, useState } from 'react';
import { getRestaurant, getUser } from 'api/api';
import { Rating } from 'react-rainbow-components';
import { useNavigate } from 'react-router-dom';
import { emptyRestaurant, IReview } from 'types';
import './ReviewItem.css';

interface ReviewItemProps {
    isOnRestaurantPage: boolean;
    review: IReview;
}

const ReviewItem: FC<ReviewItemProps> = ({ isOnRestaurantPage, review }) => {
    const [title, setTitle] = useState('');
    const [currentRestaurant, setCurrentRestaurant] = useState(emptyRestaurant);

    const getCurrentRestaurant = async () => {
        await getRestaurant(review.cafeId).then((rest) => {
            setTitle(rest.name);
            setCurrentRestaurant(rest);
        });
    };

    const getReviewAuthor = async () => {
        await getUser(review.authorId).then((author) => {
            setTitle(author.login);
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
            <div className='max-w-min flex flex-col sm:flex-row sm:items-center sm:gap-4'>
                <h3 className='flex gap-2 flex-nowrap w-max text-lg 2xl:text-2xl font-bold dark:text-smoke-gray drop-shadow-md items-center cursor-pointer'>
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

            <div className='w-full border rounded border-zinc-300 dark:border-zinc-600 p-1.5'>
                <p className='text-start italic'>{review.text}</p>
            </div>
        </div>
    );
};

export default ReviewItem;
