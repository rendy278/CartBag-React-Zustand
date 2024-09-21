import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-toastify";
interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  quantity: number;
}

interface CartState {
  carts: Product[];
  addToCart: (product: Omit<Product, "quantity">) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  incrementQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  getTotalCost: () => number;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      carts: [],

      addToCart: (product) => {
        set((state) => {
          const existItem = state.carts.find((item) => item.id === product.id);
          if (existItem) {
            toast.info("Product quantity updated!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            return {
              carts: state.carts.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            toast.success("Product added to cart!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            return {
              carts: [...state.carts, { ...product, quantity: 1 }],
            };
          }
        });
      },

      removeFromCart: (id) =>
        set((state) => {
          toast.error("Product removed from cart!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          return {
            carts: state.carts.filter((item) => item.id !== id),
          };
        }),

      clearCart: () => {
        toast.warn("Cart cleared!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        set(() => ({ carts: [] }));
      },

      incrementQuantity: (id) =>
        set((state) => ({
          carts: state.carts.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => ({
          carts: state.carts
            .map((item) =>
              item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),

      getTotalCost: () => {
        const { carts } = get();
        return carts.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage", // Name of the localStorage key
    }
  )
);

export default useCartStore;
