
import React from "react";
import { motion } from "framer-motion";
import { BsX } from "react-icons/bs";
import useCartStore from "../../store/cartStore";

const CartDrawer = ({ open, onClose }) => {
  const cart = useCartStore((s) => s.cart);
  const removeFromCart = useCartStore((s) => s.removeFromCart);
  const updateQty = useCartStore((s) => s.updateQty);

  const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: open ? 0 : "100%" }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 h-full w-80 md:w-96 bg-white text-gray-700 shadow-2xl z-50 flex flex-col"
      aria-hidden={!open}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close cart">
          <BsX className="text-2xl" />
        </button>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.product.id} className="flex items-center justify-between gap-3">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1 flex flex-col">
                <span className="font-semibold">{item.product.name}</span>
                <span className="text-sm text-gray-500">${item.product.price.toFixed(2)}</span>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQty(item.product.id, item.qty - 1)}
                    className="px-2 py-1 border rounded disabled:opacity-50"
                    aria-label={`Decrease quantity of ${item.product.name}`}
                    disabled={item.qty <= 1}
                  >
                    -
                  </button>

                  <span className="px-2">{item.qty}</span>

                  <button
                    onClick={() => updateQty(item.product.id, item.qty + 1)}
                    className="px-2 py-1 border rounded"
                    aria-label={`Increase quantity of ${item.product.name}`}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="ml-2">
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                  aria-label={`Remove ${item.product.name} from cart`}
                >
                  X
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Total:</span>
          <span className="font-bold">${totalPrice.toFixed(2)}</span>
        </div>
        <button
          onClick={() => alert("Checkout functionality goes here")}
          className="w-full bg-primary text-white py-2 rounded-lg hover:scale-105 transition-transform"
        >
          Proceed to Checkout
        </button>
      </div>
    </motion.div>
  );
};

export default CartDrawer;
