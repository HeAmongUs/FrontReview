<template>
  <div class="card" :style="{width: cardWidth + '%'}">
    <p class="card-title">{{ product.title }}</p>
    <img class="card-image" :src="product.image" alt="">
    <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

    <div>
      <input
          @keydown.enter="addToCart"
          type="number"
          v-model="amount"
      >
      <span>кг</span>
    </div>

    <button @click="addToCart"> В корзину </button>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
    cardWidth: Number,
    currency: String,
  },
  emits: ["addToCart"],
  data() {
    return {
      amount: null,
    }
  },
  methods: {
    addToCart() {
      if (!this.amount) {
        return;
      }
      this.$emit("addToCart", this.product, this.amount);
      this.amount = null;
    }
  }
}
</script>

<style scoped>

</style>