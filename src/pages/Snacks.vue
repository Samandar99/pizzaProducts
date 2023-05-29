<template>
  <section class="products">
    <div class="products-header container">
      <h3 class="products-header__title">Закуски</h3>
      <div class="filter">
        <i class="bx bx-filter-alt"></i>
        <span class="filter__name">Фильтры</span>
      </div>
    </div>
    <div class="cards container">
      <div class="card" v-for="sncak in snacks1" :key="sncak.id" v-if="snacks1">
        <div class="news">NEW</div>
        <router-link :to="/snacks/ + sncak.id">
          <img :src="sncak.img" alt="" />
        </router-link>

        <div class="card__text">
          <b class="card-n">{{ sncak.title }}</b>
          <p class="card-name__info">
            {{ sncak.text }}
          </p>
        </div>
        <div class="card-buy">
          <button class="card-btn">Выбрать</button>
          <span class="card__price">от {{ sncak.price }} ₽</span>
        </div>
      </div>
      <Blockskeleton class="card py" v-for="(loading, index) in loadingLength" :key="index" v-else />
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
    ...mapState(["snacks1"]),
  },
  methods: {
    ...mapActions(["getSnacks"]),
  },
  mounted() {
    this.getSnacks();
  },
};
</script>

<style></style>
