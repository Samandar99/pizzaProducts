<template>
  <div class="modalContainer">
    <div class="modal_products">
      <i class='bx bx-x-circle closes' @click="closeModal"></i>
      <div class="products_img">
        <img class="modal_img" src="@/assets/images/bigpizza.png" alt="">
      </div>
      <div class="modal_options">
        <div class="modal-options__title">
          <div class="titles">
            <i class='bx bxs-hot fi'></i>
            <h3 class="modal_title">Пепперони по-деревенски</h3>
          </div>
          <i class='bx bx-info-circle info-icons'></i>
        </div>
        <div class="modal_categories">
          <div class="box-categories">
            <button class="modal_btn">
              <i class='bx bx-cheese'></i>
            </button>
            <p class="box_name">Моцарелла</p>
          </div>

          <div class="box-categories">
            <button class="modal_btn"><i class='bx bx-leaf'></i></button>
            <p class="box_name">Огурцы
              маринованные</p>
          </div>
          <div class="box-categories">
            <button class="modal_btn"><i class='bx bx-pie-chart-alt'></i></button>
            <p class="box_name">Пепперони</p>
          </div>
          <div class="box-categories">
            <button class="modal_btn"><i class='bx bx-drink'></i></button>
            <p class="box_name">Томатный соус</p>
          </div>
        </div>
        <div class="choce">
          <button class="choce_btn">Традиционное</button>
          <button class="choce_btn">Тонкое</button>
        </div>
        <div class="btn_counts">
          <button class="btn_count">20 см</button>
          <button class="btn_count">28 см</button>
          <button class="btn_count">33 см</button>
        </div>
        <div class="mt_3">
          <h3 class="cats_title">Добавьте в пиццу</h3>
          <div class="block_cat">

            <div class="box-categories">
              <button class="modal_btn bgs">
                <img src="@/assets/images/chees.svg" alt="">
              </button>
              <p class="categories_name">Моцарелла</p>
              <b class="box_categories">59 p</b>
            </div>

            <div class="box-categories">
              <button class="modal_btn"><img src="@/assets/images/grib.svg" alt=""></button>
              <p class="categories_name">Шампиньоны</p>
              <b class="box_categories">59 p</b>
            </div>
            <div class="box-categories">
              <button class="modal_btn"><img src="@/assets/images/chesnok.svg" alt=""></button>
              <p class="categories_name">Пепперони</p>
              <b class="box_categories">59 p</b>
            </div>
            <div class="box-categories">
              <button class="modal_btn"><img src="@/assets/images/perets.svg" alt=""></button>
              <p class="categories_name">Томатный соус</p>
              <b class="box_categories">59 p</b>

            </div>
          </div>
        </div>
        <div class="modal_total">
          <div class="total_sum">
            <b class="totla_price">Итого: 379 ₽</b>
            <span class="value">400 г</span>
          </div>
          <button class="modal-total_btn">Добавить</button>
        </div>

      </div>




    </div>
  </div>
</template>


<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState(["openShowModalProducts"]),
  },
  
  methods: {
    ...mapMutations(["closeModal"]),
  },
  
  

}
</script>

<style scoped>
.modalContainer {
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(25, 25, 25, 0.4);
  backdrop-filter: blur(16px);
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.choce {
  max-width: 480px;
  border: 1px solid #F0F0F0;
  margin-top: 24px;
  border-radius: 6px;
}

.block_cat {
  display: flex;
  justify-content: space-between;

}

.modal_total {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  align-items: center;
}

.choce_btn {
  padding: 13px 65px;
  width: 50%;
  border: none;
  background: none;
  font-size: 16px;
  cursor: pointer;
}

.choce_btn:nth-of-type(1) {
  background: #FF7010;
  border-radius: 6px;
  color: #fff;

}

.bgs {
  border: 1px solid #FF7010 !important;
}

.cats_title {
  margin-bottom: 16px
}

.box-categories {
  display: flex;

  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
}

.mt_3 {
  margin-top: 24px;

}


.box_name {
  max-width: 103px;
  text-align: center;
  font-size: 14px;
  color: #A5A5A5;
}


.modal_products {
  max-width: 1070px;
  width: 100%;
  background-color: #fff;
  padding: 32px 20px 20px 60px;
  border-radius: 24px;
  min-height: 680px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.closes {
  position: absolute;
  right: -50px;
  top: -10px;
  font-size: 32px;
  color: #fff;
  cursor: pointer;
}

.modal_img {
  width: 400px;
}

.modal-options__title {
  display: flex;
  column-gap: 155px;
}


.titles {
  display: flex;
  align-items: center;
  column-gap: 11px;
}



.fi {
  color: #E23535;
  font-size: 25px;
}

.info-icons {
  font-size: 25px;
  color: #A5A5A5;
}

.modal_title {
  font-size: 20px;
  color: #191919;
}

.modal_categories {
  display: flex;
  column-gap: 20px;
  margin-top: 16px;
}

.modal_btn {
  background: none;
  padding: 35px 32px;
  border: 1px solid #F0F0F0;
  border-radius: 12px;
  cursor: pointer;
  min-width: 106px;
  max-height: 106px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.modal_btn i {
  color: #A5A5A5;
  font-size: 40px;
}

.btn_counts {
  max-width: 480px;
  border: 1px solid #F0F0F0;
  border-radius: 6px;
  margin-top: 16px;
}

.btn_count {
  width: 33.3%;
  padding: 13px 56px;
  background: none;
  border: none;
  cursor: pointer;

  font-size: 16px;
}

.btn_count:nth-of-type(1) {
  background: #FF7010;
  border-radius: 6px;
  color: #fff;
}

.box_categories {
  color: #FF7010;
}

.modal-total_btn {
  padding: 13px 40px;
  background: #FF7010;
  border: none;
  font-size: 16px;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
}

.totla_price {
  color: #FF7010;
  font-size: 20px;
}

.value {
  color: #A5A5A5;
}

.total_sum {
  display: flex;
  column-gap: 12px;
  align-items: center;
}
</style>
