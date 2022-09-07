import { defineStore } from 'pinia';
import cartItems from "@/data/cart.json";

export const useCartStore = defineStore('CartStore', {
  state: () => ({
    items: [],
  }),
  getters: {
    count: (state) => state.items.length,
    isEmpty() {
      return this.count == 0
    }
  },
  actions: {
    addItem(item) {
      this.items.push(item);
    }
  }
})