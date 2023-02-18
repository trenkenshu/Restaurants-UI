import React, { FC, useState } from 'react';
// import { Rating } from 'react-rainbow-components';
import { Rating } from 'react-simple-star-rating';
// import ReactStars from 'react-rating-stars-component';
import { render } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { IReview } from 'types';
import './ReviewItem.css';

interface ReviewItemProps {
    isOnRestaurantPage: boolean;
    review: IReview;
}

const ReviewItem: FC<ReviewItemProps> = ({ isOnRestaurantPage, review }) => {
    const [rating, setRating] = useState(review.rating);
    const handleRating = (rate: number) => {
        setRating(rate);

        // other logic
    };

    const onPointerEnter = () => console.log('Enter');
    const onPointerLeave = () => console.log('Leave');
    const onPointerMove = (value: number, index: number) => console.log(value, index);

    const title = isOnRestaurantPage ? review.author.login : review.cafe.name;

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
                    <div className={`${styleOnRestPage} w-6 h-6 bg-userIcon bg-cover dark:bg-userIconWhite`}></div>
                    <p className={`${styleOnRestPage}`}>{title}</p>
                    <button className={`${styleOnUserPage}`} onClick={() => goToRestaurantPage(review.cafeId)}>
                        {title}
                    </button>
                </h3>

                {/* <ReactStars count={5} onChange={ratingChanged} size={24} activeColor='#ffd700' /> */}
                <Rating
                    fillColor='#ff5f49'
                    fillStyle={{ color: '#ff5f49' }}
                    // emptyStyle={{  }}
                    initialValue={rating}
                    onClick={handleRating}
                    onPointerEnter={onPointerEnter}
                    onPointerLeave={onPointerLeave}
                    onPointerMove={onPointerMove}
                    readonly
                />
            </div>

            <div className='w-full border rounded border-zinc-300 dark:border-zinc-600 p-1.5'>
                <p className='text-start italic'>{review.text}</p>
            </div>
        </div>
    );
};

export default ReviewItem;
