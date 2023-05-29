<template>
  <section class="products">
    <div class="products-header container">
      <h3 class="products-header__title">Пицца</h3>
      <div class="filter">
        <i class="bx bx-filter-alt"></i>
        <span class="filter__name">Фильтры</span>
      </div>
    </div>
    <div class="cards container">
      <template v-if="pizzaProducts1.length > 0">
        <div class="card" v-for="hom in pizzaProducts1" :key="hom.id">
          <div class="news">NEW</div>

          <router-link :to="/pizza/ + hom.id" class="card">
            <img :src="hom.img" alt="" />
          </router-link>

          <div class="card__text">
            <b class="card-n">{{ hom.title }}</b>
            <p class="card-name__info">
              {{ hom.text }}
            </p>
          </div>
          <div class="card-buy">

            <button class="card-btn" @click="modalOpenProducts(hom.id)">Выбрать</button>
            <span class="card__price">от {{ hom.price }} ₽</span>
          </div>

        </div>
      </template>

      <Blockskeleton class="card py" v-for="(loading, index) in loadingLength" :key="index" v-else />
    </div>

    {{ modalCart }}

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
    ...mapState(["pizzaProducts1"]),
    ...mapState(["openShowModalProducts"]),
    ...mapState(["modalCart"]),
    // ...mapGetters(["getPizza"])
  },
  methods: {
    ...mapActions(["getPostsPizza", "modalOpenProducts"]),
    // ...mapMutations(["modalOpenProducts"]),

  },

  mounted() {
    this.getPostsPizza();



  },


};
</script>

<style scoped>
.card-n {
  color: #191919;
}

.card-name__info {
  color: #191919;
}

.py {
  padding-left: 17px;
}
</style>
