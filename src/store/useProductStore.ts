import { create } from "zustand";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface ProductStore {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProduct: () => Promise<void>;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  error: null,
  fetchProduct: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("https://dummyjson.com/products");
      set({ products: response.data.products, loading: false });
    } catch (error) {
      console.error(error);
      set({ error: "Failed to fetch products", loading: false });
    }
  },
}));

export default useProductStore;
