import { Link } from "react-router-dom";
import ReviewStar from "./ReviewStar";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    rating: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`product/${product.id}`}
      className="flex cursor-pointer w-full flex-col overflow-hidden rounded-lg border border-primary/30 shadow-md shadow-primary"
    >
      <div className="flex flex-col justify-center items-center overflow-hidden rounded-xl">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover"
        />
        <h1 className="text-xl mt-5 font-bold text-primary">{product.title}</h1>
      </div>
      <div className="p-5 flex flex-col items-center">
        <div className="my-5 flex items-center justify-between gap-6">
          <p className="text-2xl font-bold">$: {product.price}</p>
          <ReviewStar rating={product.rating} />
        </div>
        <button className="rounded-full bg-primary hover:bg-primary/90 px-5 py-3 text-center text-white">
          Add To Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
