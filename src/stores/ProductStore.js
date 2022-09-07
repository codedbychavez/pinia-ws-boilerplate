import { defineStore } from 'pinia';

export const useProductStore = defineStore('ProductStore', {
  state: () => ({
    products: [],
  }),
  getters: {
    // getProducts: (state) => state.products,
  },
  actions: {
    async fill() {
      const res = await fetch('/products.json');
      this.products = await res.json();
    }
  }
})