<template>
  <transition name="fade">
    <ModalProducts v-show="openShowModalProducts" />
  </transition>
  <Drawer :openCarts="openCarts" @closeCart="getCloseCart" />
  <Header @sendOpenCart="getOpenCart" :links="links" />
  <Categories :links="links" />
  <Discount />
  <Search />
  <router-view />
  <Footer />

  <!-- <div v-for="itemPizza in productsPizza" :key="itemPizza.id">
    {{itemPizza.title}}
  </div> -->
</template>

<script>

import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import Header from "@/components/Header.vue";
import Categories from "@/components/Categories.vue";
import Discount from "@/components/Discount.vue";
import Search from "@/components/Search.vue";
import Footer from "@/components/Footer.vue";
import Drawer from "@/components/Drawer.vue";
import ModalProducts from "@/components/ModalBlock/ModalProducts.vue";

export default {
  components: {
    Header,
    Categories,
    Discount,
    Search,
    Footer,
    Drawer,
    ModalProducts,
  },
  data() {
    return {
      links: [
        { title: "Главная", url: "/" },
        { title: "Пицца", url: "/pizza" },
        { title: "Суши", url: "/sushi" },
        { title: "Напитки", url: "/beverages" },

        { title: "Закуски", url: "/snacks" },
        { title: "Комбо", url: "/combo" },
        { title: "Десерты", url: "/desert" },
        { title: "Соусы", url: "/sauce" },
      ],
      openCarts: null,
      productsPizza: null,
    };
  },
  methods: {
    async getItemsPizza() {
      try {
        const resultPizza = await fetch(
          "https://645d44a1250a246ae31c22ec.mockapi.io/pizzaItems"
        );
        const data = await resultPizza.json();
        this.productsPizza = data;
        console.log(this.productsPizza);
      } catch (error) {
        console.log("error");
      }
    },
    getOpenCart(openCart) {
      this.openCarts = openCart;
    },
    getCloseCart(closes) {
      this.openCarts = closes;
    },
  },
  computed: {
    ...mapState(["openShowModalProducts"]),
  },
  created() {
    console.log(this.openModalProducts);
    this.getItemsPizza()
    console.log(this.productsPizza);
    console.log(this.openShowModalProducts);
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
