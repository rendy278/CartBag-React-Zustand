import { FaStar } from "react-icons/fa6";
interface ReviewStarProps {
  rating: number;
}

const ReviewStar: React.FC<ReviewStarProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        return (
          <FaStar
            key={index}
            className={`${
              rating >= index + 1 ? "text-yellow-500" : "text-gray-300"
            }`}
          />
        );
      })}
    </div>
  );
};

export default ReviewStar;
