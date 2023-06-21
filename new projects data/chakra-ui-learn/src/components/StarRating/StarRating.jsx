import React, { useState } from 'react';

export const StarRating = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = ratingValue => {
    setHoverRating(ratingValue);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = ratingValue => {
    onRatingChange(ratingValue);
  };

  const renderStar = (index, ratingValue) => {
    return (
      <span
        key={index}
        className="star"
        style={{ color: ratingValue <= (hoverRating || rating) ? 'gold' : 'rgb(241,228,238)' ,fontSize:" 40px"}}
        onMouseOver={() => handleMouseOver(ratingValue)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(ratingValue)}
        
      >
        &#9733;
      </span>
    );
  };

  return (
    <div>
      {[...Array(5)].map((_, index) =>
        renderStar(index, index + 1)
      )}
    
    </div>
  );
};
