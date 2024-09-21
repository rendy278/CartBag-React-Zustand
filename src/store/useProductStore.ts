import { create } from "zustand";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
}

interface ProductId {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  rating: number;
}

interface ProductStore {
  products: Product[];
  product: ProductId | null;
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  fetchProductId: (id: string | undefined) => Promise<void>;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  product: null,
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("https://dummyjson.com/products");
      set({ products: response.data.products, loading: false });
    } catch (error) {
      console.error(error);
      set({ error: "Failed to fetch products", loading: false });
    }
  },
  fetchProductId: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`https://dummyjson.com/product/${id}`);
      console.log(response.data);
      set({ product: response.data, loading: false });
    } catch (error) {
      console.error(error);
      set({ error: "Failed to fetch product id", loading: false });
    }
  },
}));

export default useProductStore;
