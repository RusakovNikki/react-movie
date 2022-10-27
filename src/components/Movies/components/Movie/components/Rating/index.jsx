export const Rating = ({ rating }) => {

    const ratingColor = rating < 5 ? '_red' : rating < 8 && rating >= 5 ? '_yellow' : '_green'; 
    
    return (rating !== "null" &&
        <p className={'movie__rating' + ratingColor}>{rating}</p>
    );
}