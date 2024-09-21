import { MdDelete } from "react-icons/md";
import useCartStore from "../store/useCartStore";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cart: Product;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart }) => {
  const { incrementQuantity, decreaseQuantity } = useCartStore();

  const cost = (cart.quantity * cart.price).toFixed(2);

  return (
    <div className="gap-6 w-full border border-b-primary/30 border-transparent grid grid-cols-2  md:grid-cols-6 p-3 place-items-start  md:place-items-center">
      <div className="col-span-2">
        <div className="flex items-center gap-6">
          <img src={cart.thumbnail} alt={cart.title} className="h-24" />
          <p className="text-2xl font-bold">{cart.title}</p>
        </div>
      </div>
      <div className="col-span-1">
        <p className="text-2xl font-bold">$: {cart.price}</p>
      </div>
      <div className="col-span-2">
        <div className="flex items-center justify-center gap-1">
          <button
            onClick={() => decreaseQuantity(cart.id)}
            className="bg-red-500 text-white px-5 py-3 font-bold rounded-lg"
          >
            -
          </button>
          <span className="px-5 py-3">{cart.quantity}</span>
          <button
            onClick={() => incrementQuantity(cart.id)}
            className="bg-green-500 text-white px-5 py-3 font-bold rounded-lg"
          >
            +
          </button>
        </div>
      </div>
      <div className="col-span-1 flex  items-center gap-4 justify-between">
        <p className="text-2xl font-bold">$:{cost}</p>
        <button
          className="bg-red-500 text-white px-5 py-3 font-bold rounded-lg"
          onClick={() => removeFromCart(cart.id)}
        >
          <MdDelete className="text-2xl text-white hover:text-red-700 transition-colors" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
