// ./store/cartStore.js
import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [], // [{ id, product, qty }]
  addToCart: (product, qty = 1) => {
    set((state) => {
      const cart = state.cart.slice();
      const idx = cart.findIndex((c) => c.product.id === product.id);
      if (idx > -1) {
        cart[idx] = { ...cart[idx], qty: cart[idx].qty + qty };
      } else {
        cart.push({ id: product.id, product, qty });
      }
      return { cart };
    });
  },
  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((c) => c.product.id !== productId),
    }));
  },
  updateQty: (productId, qty) => {
    set((state) => {
      if (qty <= 0) {
        return { cart: state.cart.filter((c) => c.product.id !== productId) };
      }
      const cart = state.cart.map((c) =>
        c.product.id === productId ? { ...c, qty } : c
      );
      return { cart };
    });
  },
  clearCart: () => set({ cart: [] }),
  totalItems: () => get().cart.reduce((sum, it) => sum + it.qty, 0),
}));

export default useCartStore;
