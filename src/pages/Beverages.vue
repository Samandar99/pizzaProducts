<template>
  <section class="products">
    <div class="products-header container">
      <h3 class="products-header__title">Напитки</h3>
      <div class="filter">
        <i class="bx bx-filter-alt"></i>
        <span class="filter__name">Фильтры</span>
      </div>
    </div>
    <div class="cards container">
      <div class="card" v-for="beverage in beverages" :key="beverage.id" v-if="beverages">
        <div class="news">NEW</div>
        <router-link :to="/beverages/ + beverage.id">
          <img :src="beverage.img" alt="" />
        </router-link>
        <div class="card__text">
          <b class="card-n">{{ beverage.title }}</b>
          <p class="card-name__info">
            {{ beverage.text }}
          </p>
        </div>
        <div class="card-buy">
          <button class="card-btn">Выбрать</button>
          <span class="card__price">от {{ beverage.price }} ₽</span>
        </div>
      </div>
      <Blockskeleton class="card py" v-for="(loading, index) in loadingLength" v-else :key="index" />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import Blockskeleton from "@/components/ProductsBlock/Blockskeleton.vue";
export default {
  components: {
    Blockskeleton,
  },
  data() {
    return {
      loadingLength: 8,
    };
  },

  computed: {
    ...mapState(["beverages"]),
  },
  methods: {
    ...mapActions(["getBeverages"]),
  },
  mounted() {
    this.getBeverages();
  },
};
</script>

<style></style>
