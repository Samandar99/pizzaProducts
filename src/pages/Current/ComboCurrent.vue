<template>
  <main class="main">
    <div class="container flex-p">
      <img class="pizz__img" :src="getCombos.img" alt="" />
      <!-- <div class="new">NEW</div> -->
      <div class="info-pizza">
        <div>
          <h3>{{ getCombos.title }}</h3>
          <p class="pizz__info">{{ getCombos.text }}</p>
          <div class="stars">
            <i class="bx bxs-star" v-for="star in starts" :key="star"></i>
            <i class="bx bxs-star-half"></i>
          </div>
        </div>
        <b class="products__price">от  {{ getCombos.price }} ₽</b>
        <div class="options-btns">
          <button class="add-products_cart">Добавить корзину</button>
          <router-link to="/combo" class="back-btn">Назад</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";


export default {
  data() {
    return {
   
      currentComboId: null,
      starts: 4,
    };
  },
  methods: {
    ...mapActions(["getCommbo"]),
  },
  created() {
    this.getCommbo();
    console.log(this.$route);
    this.currentComboId = this.$route.params.id;
  },
  computed: {
    ...mapState(["commboProducts"]),

    getCombos() {
      return this.commboProducts.find((combo) => combo.id == this.currentComboId);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1290px;
  margin: 0 auto;
}

.flex-p {
  display: flex;
  column-gap: 30px;
  flex-wrap: wrap;
}

.info-pizza {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
}

.pizz__img {
  width: 350px;
  position: relative;
}

.new {
  position: absolute;

  background: #e23535;
  color: #fff;
  padding: 7px 10px;
  border-radius: 0 5px 5px 0;
}

.pizz__info {
  margin-top: 1rem;
}

.stars {
  margin-top: 30px;
}

.stars i {
  color: #ff7010;
  font-size: 20px;
}

.add-products_cart {
  padding: 10px 30px;
  max-width: 200px;

  background-color: #ff7010;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.1s ease-in;
}
.products__price{
  color: #ff7010;
}
.add-products_cart:hover {
  background-color: #ff7e28fd;
}

.back-btn {
  padding: 20px 30px;
  background-color: #D7D9DC;
  border: none;
  font-size: 18px;
  border-radius: 5px;
  color: #191919;
  cursor: pointer;
}

.options-btns {
  display: flex;
  align-items: center;
  column-gap: 23px;
}

@media (max-width: 871px) {
  .flex-p {
    justify-content: center;
    text-align: center;
    row-gap: 20px;
  }

  .add-products_cart {
    margin: 20px auto;
  }

  .options-btns {
    display: flex;
    align-items: center;
    flex-direction: column;
    column-gap: 23px;
  }
}
</style>
