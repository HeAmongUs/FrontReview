<template>
  <div class="product-list">
    <ProductItem
        @addToCart="(product, amount) => addToCart(product, amount)"
        v-for="product in products" :card-width="cardWidth"
        :product="product"
        :currency="currency"
        :key="product.id"
    />
  </div>
</template>

<script>
import ProductItem from "./ProductItem";
export default {
  components: {ProductItem},

  props: {
    currency: String,
  },
  emits: ["addToCart"],
  data() {
    return {
      products: [],
      windowWidth: window.innerWidth,
    };
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize)
    clearInterval(this.interval)
  },
  created() {
    this.startPricesMonitoring();
    window.addEventListener("resize", this.onResize)
    this.onResize()
  },
  computed: {
    cardWidth() {
      return 100 / Math.min(Math.ceil(this.windowWidth / 420), 3);
    },
  },
  methods: {
    onResize(){
      this.windowWidth = window.innerWidth;
    },
    startPricesMonitoring() {
      this.interval = setInterval(this.getList, 2000);
    },
    async getList() {
      this.products = await this.$store.dispatch('getProductsList');
    },
    addToCart(product, amount) {
      const item = {
        amount,
        price: product.price,
        title: product.title,
      };
      this.$emit("addToCart", item)
    },
  },
};
</script>

<style>
  .header + .product-list {
    padding-top: 50px;
  }
  .product-list {
    padding: 10px;

  }
  .card {
    display: inline-block;
    width: 100%;
    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
  }
  .card-image {
    width: 100%;
  }
  button {
    padding: 5px;
    margin: 5px;
  }

</style>
