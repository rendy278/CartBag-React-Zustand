import React from "react";
import useCartStore from "../store/useCartStore";
import Cart from "../components/Cart";
import Wrap from "../components/Wrap";

const CartSection: React.FC = () => {
  const { carts, removeFromCart, clearCart, getTotalCost } = useCartStore();
  const totalCost = getTotalCost().toFixed(2);

  return (
    <Wrap>
      <div className="flex flex-col gap-6 h-full w-full py-24">
        <h1 className="text-xl font-bold">My Cart -</h1>
        {carts.length === 0 ? (
          <p className="text-xl text-center h-96 flex justify-center items-center text-red-500">
            Your Cart Is Empty!
          </p>
        ) : (
          <>
            <div>
              {carts.map((cart) => (
                <Cart
                  key={cart.id}
                  cart={cart}
                  removeFromCart={removeFromCart}
                />
              ))}
              <div className="mt-8 flex flex-wrap gap-6 isolate justify-between">
                <button
                  className="bg-red-500 text-white px-5 py-3 font-bold rounded-lg mt-5"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
                <div className="flex-col flex items-start md:items-center gap-5">
                  <p className="text-2xl font-bold ">Sub Total : {totalCost}</p>
                  <button className="bg-primary px-5 py-2 rounded-lg  text-white">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Wrap>
  );
};

export default CartSection;
