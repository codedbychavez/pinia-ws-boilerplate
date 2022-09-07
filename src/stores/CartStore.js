import { defineStore } from 'pinia';
import cartItems from "@/data/cart.json";

export const useCartStore = defineStore('CartStore', {
  state: () => ({
    items: [],
  }),
  getters: {
    count: (state) => state.items.length,
  },
  actions: {
    addItem(item) {
      this.items.push(item);
    }
  }
})