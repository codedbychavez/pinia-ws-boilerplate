import { defineStore } from 'pinia';
import cartItems from "@/data/cart.json";

export const useCartStore = defineStore('CartStore', {
  state: () => ({
    items: cartItems,
  }),
  getters: {
    // getCart: (state) => state.Cart,
  },
  actions: {
    addCart() {
      // this.Cart.push(1);
    }
  }
})