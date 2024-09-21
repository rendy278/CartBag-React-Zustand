import { useEffect } from "react";
import useProductStore from "../store/useProductStore";
import ProductCard from "./ProductCard";
import Wrap from "./Wrap";
import Loading from "./loading";

const ProductSection = () => {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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

  return (
    <Wrap>
      <section className="grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-2 lg:grid-cols-3 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </Wrap>
  );
};

export default ProductSection;
