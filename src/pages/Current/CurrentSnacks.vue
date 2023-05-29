<template>
  <main class="main">
    <div class="container flex-p">
      <img class="pizz__img" :src="getSnakses.img" alt="" />
      <div class="new">NEW</div>
      <div class="info-pizza">
        <div>
          <h3>{{ getSnakses.title }}</h3>
          <p class="pizz__info">{{ getSnakses.text }}</p>
          <div class="stars">
            <i class="bx bxs-star" v-for="star in starts" :key="star"></i>
            <i class="bx bxs-star-half"></i>
          </div>
        </div>
        <div class="options-btns">
          <button class="add-products_cart">Добавить корзину</button>
          <router-link to="/snacks" class="back-btn">Назад</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>


import { mapActions, mapState, mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
   
      currentSnackId: null,
      starts: 4,
    };
  },

  methods: {
    ...mapActions(["getSnacks"]),
  },


  created() {
    this.getSnacks();

    console.log(this.$route);
    this.currentSnackId = this.$route.params.id;
  },
  computed: {
    ...mapState(["snacks1"]),

    getSnakses() {
      return this.snacks1.find((snack) => snack.id == this.currentSnackId);
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
