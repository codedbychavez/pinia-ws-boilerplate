<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { storeToRefs } from "pinia";

// Stores
import { useProductStore } from '@/stores/ProductStore';
import { useCartStore } from '@/stores/CartStore';

const productStore = useProductStore();
const cartStore = useCartStore();

productStore.fill();

const handleAddToCart = (item) => {
  cartStore.addItem(item);
}

</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
      v-for="product in productStore.products"
      :key="product.id"
      :product="product"
      @add-to-cart="handleAddToCart({
        id: product.id,
        count: $event
      })"
      />
    </ul>
  </div>
</template>
