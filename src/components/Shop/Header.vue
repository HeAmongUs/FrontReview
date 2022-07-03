<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ cartSum }} {{ currency }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    cartSum: {
      type: Number,
      required: true,
      default: 0,
    },
    currency: {
      type: String,
      required: true,
    }
  },
}
</script>

<style>
  .header {
    padding: 10px;
    background: #e5e5e5;
    position: fixed;
    width: 100%;
    height: 40px;
  }
</style>
