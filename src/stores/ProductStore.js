import { defineStore } from 'pinia';
import products from '@/data/products.json';

export const useProductStore = defineStore('ProductStore', {
  state: () => ({
    products: products,
  }),
  getters: {
    // getProducts: (state) => state.products,
  },
  actions: {
    addProduct() {
      // this.products.push(1);
    }
  }
})