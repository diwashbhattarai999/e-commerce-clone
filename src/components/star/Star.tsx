import { BiStar, BiSolidStar, BiSolidStarHalf } from "react-icons/bi";

interface StarProps {
  rating: number | undefined;
}

const Star: React.FC<StarProps> = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    {
      return rating ? (
        <span key={index}>
          {rating >= index + 1 ? (
            <BiSolidStar />
          ) : rating >= number ? (
            <BiSolidStarHalf />
          ) : (
            <BiStar />
          )}
        </span>
      ) : (
        <span key={index}>
          <BiStar />
        </span>
      );
    }
  });

  return <div className="flex text-orange-500">{ratingStar}</div>;
};

export default Star;
