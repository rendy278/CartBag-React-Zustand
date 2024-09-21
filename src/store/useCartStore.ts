import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  carts: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      carts: [],

      addToCart: (product: Product) =>
        set((state) => {
          const existItem = state.carts.find((item) => item.id === product.id);
          if (existItem) {
            return {
              carts: state.carts.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return {
              carts: [...state.carts, { ...product, quantity: 1 }],
            };
          }
        }),

      removeFromCart: (id: number) =>
        set((state) => ({
          carts: state.carts.filter((item) => item.id !== id),
        })),

      clearCart: () => set(() => ({ carts: [] })),
    }),
    {
      name: "cart-storage", // Name of the localStorage key
    }
  )
);

export default useCartStore;
