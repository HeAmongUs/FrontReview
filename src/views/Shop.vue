<template>
  <div class="shop">
    <Header :cartSum="cartSum" :currency="currency"></Header>
    <product-list :currency="currency" @addToCart="(item) => addToCart(item)"/>
    <Cart :cartItems="cartItems" v-model="cartSum" />
  </div>
</template>

<script>
import Header from "@/components/Shop/Header";
import Cart from "@/components/Shop/Cart";
import ProductList from "../components/Shop/ProductList";

export default {
  name: "Shop",
  data() {
    return {
      cartItems: [],
      cartSum: 0,
      currency: 'VGTB',
    };
  },
  components: {
    ProductList,
    Header,
    Cart,
  },
  methods: {
    addToCart(item) {
      this.cartItems.push(item)
    }
  }
}
</script>

<style scoped></style>