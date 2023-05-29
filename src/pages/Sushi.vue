<template>
  <section class="products">
    <div class="products-header container">
      <h3 class="products-header__title">Суши</h3>
      <div class="filter">
        <i class="bx bx-filter-alt"></i>
        <span class="filter__name">Фильтры</span>
      </div>
    </div>
    <div class="cards container">
      <div class="card" v-for="sush in postsSushi" :key="sush.id" v-if="postsSushi">
        <div class="news">NEW</div>
        <router-link :to="/sushi/ + sush.id">
          <img :src="sush.img" alt="" />
        </router-link>
        <div class="card__text">
          <b class="card-n">{{ sush.title }}</b>
          <p class="card-name__info">
            {{ sush.text }}
          </p>
        </div>
        <div class="card-buy">
          <button class="card-btn" @click="modalOpenProducts">Выбрать</button>
          <span class="card__price">от {{ sush.price }} ₽</span>
        </div>
      </div>
      <Blockskeleton class="card py" v-for="loading in loadingLength" v-else />
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
      loadingLength: 8
    };
  },
  computed: {
    ...mapState(["postsSushi"]),
  },
  methods: {
    ...mapActions(["getPostsSushi"]),
    ...mapMutations(["modalOpenProducts"])
  },
  mounted() {
    this.getPostsSushi();
  },
};
</script>

<style>
.card-n {
  color: #191919;
}

.card-name__info {
  color: #191919;
}
</style>
