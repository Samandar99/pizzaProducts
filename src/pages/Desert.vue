<template>
  <section class="products">
    <div class="products-header container">
      <h3 class="products-header__title">Десерты</h3>
      <div class="filter">
        <i class="bx bx-filter-alt"></i>
        <span class="filter__name">Фильтры</span>
      </div>
    </div>
    <div class="cards container">
      <div class="card" v-for="desertsItem in deserts" :key="desertsItem.id" v-if="deserts">
        <div class="news">NEW</div>
        <router-link :to="/desert/ + desertsItem.id">
          <img :src="desertsItem.img" alt="" />
        </router-link>
        <div class="card__text">
          <b class="card-n">{{ desertsItem.title }}</b>
          <p class="card-name__info">
            {{ desertsItem.text }}
          </p>
        </div>
        <div class="card-buy">
          <button class="card-btn">Выбрать</button>
          <span class="card__price">от {{ desertsItem.price }} ₽</span>
        </div>
      </div>
      <Blockskeleton class="card py" v-for="(itemLoadings, index) in loadingLength" :key="index" v-else />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import Blockskeleton from '@/components/ProductsBlock/Blockskeleton.vue';

export default {
  components: {
    Blockskeleton
  },
  data() {
    return {
      loadingLength: 8,
    };
  },
  computed: {
    ...mapState(["deserts"]),
  },

  methods: {
    ...mapActions(["getDesert"]),
  },

  mounted() {
    this.getDesert();

  },


};
</script>

<style></style>
