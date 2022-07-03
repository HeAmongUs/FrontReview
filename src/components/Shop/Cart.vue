<template>
  <div class="cart-list">
    <div v-for="item in cartItemsToRender">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartItems: {
      type: Array,
      required: true,
    },
  },
  emits: ["input"],
  computed: {
      cartItemsToRender() {
          return this.cartItems.slice().reverse();
      },
      cartSum() {
        return this.cartItems.reduce((previousValue, item) => {
          return previousValue + item.price * item.amount
        }, 0)
      },
  },
  watch: {
    "cartItems.length"() {
      this.$emit("input", Number(this.cartSum.toFixed(2)))
    }
  }
};
</script>

<style>

</style>
