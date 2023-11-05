import React, { useState } from 'react';
import UserReview from './UserReview';
import reviewsData from '../Data/UserData';
import avatar from '../Data/avatar.jpg';

function UserReviewList() {
    const [commentsData, setCommentsData] = useState([]);
    const [newComment, setNewComment] = useState({ name: '', comment: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewComment({ ...newComment, [name]: value });
    };

    const handleAddComment = () => {
        if (newComment.name && newComment.comment) {
            setCommentsData([...commentsData, { ...newComment, image: avatar }]);
            setNewComment({ name: '', comment: '' }); // Clear the input fields
            setSubmitted(true);
        }
    };

    return (
        <div className="feed-back">
            <div className="user-review-list">
                {reviewsData.map((review, index) => (
                    <UserReview key={index} review={review} />
                ))}

                <div className="comment-list">
                    {commentsData.map((comment, index) => (
                        <UserReview key={index} review={comment} />
                    ))}
                </div>
            </div>
            <div className="comment-input">
                {!submitted ? (
                    <>
                        <h2 className='feedback-text'>Give us Feedback</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            value={newComment.name}
                            onChange={handleInputChange}
                            className='user-input'
                        />
                        <textarea
                            type="text"
                            name="comment"
                            placeholder="Add Your Comment"
                            value={newComment.comment}
                            onChange={handleInputChange}
                            className='user-input-comment'
                        />
                        <button className='submiting-button' onClick={handleAddComment}>SUBMIT</button>
                    </>
                ) : (
                    <h2>Thank you for feedback!</h2>
                )}
            </div>
        </div>
    );
}

export default UserReviewList;