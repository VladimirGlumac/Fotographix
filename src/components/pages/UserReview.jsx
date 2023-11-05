import React from 'react';

function UserReview({ review }) {
    return (
        <div className="user-review">
            <img src={review.image} alt={review.name} className='user-img' />
            <div className='user-info'>
                <h2 className='user-name'>{review.name}</h2>
                <p className='user-comment'>{review.comment}</p>
            </div>
        </div>
    );
}

export default UserReview;