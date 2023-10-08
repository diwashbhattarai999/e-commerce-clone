import { useState } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface RatingProps {
  rating: number | undefined;
  readonly?: boolean;
}

const Star: React.FC<RatingProps> = ({ rating, readonly }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(rating ? rating : 0);

  const handleRatingClick = (selectedRating: number) => {
    if (!readonly) {
      setSelectedRating(selectedRating);
    }
  };

  return (
    <div className="flex ">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= (hoverRating || selectedRating);
        const isHalfFilled =
          !isFilled &&
          starValue - 0.5 <= (hoverRating || selectedRating) &&
          (hoverRating || selectedRating) < starValue;

        return (
          <span
            key={starValue}
            onClick={() =>
              handleRatingClick(starValue === selectedRating ? 0 : starValue)
            }
            onMouseEnter={() => !readonly && setHoverRating(starValue)}
            onMouseLeave={() => !readonly && setHoverRating(0)}
            className={`${
              readonly ? "cursor-default" : "cursor-pointer"
            } text-orange-500 mr-1`}
          >
            {isHalfFilled ? (
              <BsStarHalf />
            ) : isFilled ? (
              <BsStarFill />
            ) : (
              <BsStar />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Star;
