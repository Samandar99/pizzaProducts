<template>
    <section class="products">
        <div class="products-header container">
            <h3 class="products-header__title">Соусы</h3>
            <div class="filter">
                <i class="bx bx-filter-alt"></i>
                <span class="filter__name">Фильтры</span>
            </div>
        </div>
        <div class="cards container">
            <div class="card" v-for="sauces in saucesDates" :key="sauces.id" v-if="saucesDates">
                <div class="news">NEW</div>
                <router-link :to="/sauce/ + sauces.id">
                    <img :src="sauces.img" alt="" />

                </router-link>

                <div class="card__text">
                    <b class="card-n">{{ sauces.title }}</b>
                    <p class="card-name__info">
                        {{ sauces.text }}
                    </p>
                </div>
                <div class="card-buy">
                    <button class="card-btn">Выбрать</button>
                    <span class="card__price">от {{ sauces.price }} ₽</span>
                </div>
            </div>
            <Blockskeleton class="card py" v-for="(itemSauseLength, index) in SauseLength" :key="index" v-else />
        </div>
    </section>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import Blockskeleton from '@/components/ProductsBlock/Blockskeleton.vue';

export default {
    components: {
        Blockskeleton
    },
    data() {
        return {
            SauseLength: 8,
        }
    },
    computed: {
        ...mapState(["saucesDates"]),
    },
    methods: {
        ...mapActions(["getSauces"]),
    },
    mounted() {
        this.getSauces();
    },
}
</script>

<style></style>