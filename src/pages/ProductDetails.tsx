import Wrap from "../components/Wrap";
import ReviewStar from "../components/ReviewStar";
import { useParams } from "react-router-dom";
import useProductStore from "../store/useProductStore";
import { useEffect } from "react";
import Loading from "../components/loading";

const ProductDetails: React.FC = () => {
  const { productId } = useParams();
  const { product, loading, error, fetchProductId } = useProductStore();

  useEffect(() => {
    fetchProductId(productId);
    console.log(productId);
  }, [productId, fetchProductId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="text-center text-xl text-red-500 pt-20">
        <h1>{error}</h1>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <Wrap>
      {product && (
        <section className="h-full py-20 md:py-0 md:h-screen place-items-start md:place-items-center grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="flex justify-center items-center">
            <img src={product.thumbnail} alt={product.title} className="h-96" />
          </div>
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <h1>${product.price}</h1>
            <p className="w-full md:w-96">{product.description}</p>
            <ReviewStar rating={product.rating} />
            <button className="rounded-full bg-primary hover:bg-primary/90 px-5 py-3 text-center text-white">
              Add To Cart
            </button>
          </div>
        </section>
      )}
    </Wrap>
  );
};

export default ProductDetails;
