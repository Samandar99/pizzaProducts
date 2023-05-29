<template>
    <div :class="openCarts == true ? 'overlay' : 'isActiveoverlay'">
        <div :class="openCarts == true ? 'drawer' : 'drawerActive'">
            <div class="block-drawer">
                <div class="drawer__header">
                    <h3 class="drawer-title">Ваш заказ</h3>
                    <i class="bx bx-x-circle close" @click="closeCart(false)"></i>
                </div>
                <div class="drawer__cards">
                    <div class="drawer-card">
                        <img class="drawer-card__img" src="@/assets/images/Rectangle2.png" alt="" />
                        <div>
                            <b>Чикен Сладкий Чили</b>
                            <p class="drawer__name">Традиционное тесто, 23 см</p>
                            <div class="options">
                                <div class="options__btns">
                                    <button class="darwer-btn">-</button>
                                    <button class="darwer-btn">1</button>
                                    <button class="darwer-btn">+</button>
                                </div>
                                <b>499 ₽</b>
                            </div>
                        </div>
                    </div>
                    <div class="drawer-card">
                        <img class="drawer-card__img" src="@/assets/images/Rectangle2.png" alt="" />
                        <div>
                            <b>Чикен Сладкий Чили</b>
                            <p class="drawer__name">Традиционное тесто, 23 см</p>
                            <div class="options">
                                <div class="options__btns">
                                    <button class="darwer-btn">-</button>
                                    <button class="darwer-btn">1</button>
                                    <button class="darwer-btn">+</button>
                                </div>
                                <b>499 ₽</b>
                            </div>
                        </div>
                    </div>
                    <div class="drawer-card">
                        <img class="drawer-card__img" src="@/assets/images/Rectangle2.png" alt="" />
                        <div>
                            <b>Чикен Сладкий Чили</b>
                            <p class="drawer__name">Традиционное тесто, 23 см</p>
                            <div class="options">
                                <div class="options__btns">
                                    <button class="darwer-btn">-</button>
                                    <button class="darwer-btn">1</button>
                                    <button class="darwer-btn">+</button>
                                </div>
                                <b>499 ₽</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="drawer-foot">
                <div class="draw-flex">
                    <p class="total-price">Итого: 2 379 ₽</p>
                    <button class="send-btn">Оформить заказ</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        openCarts: {
            typeof: Boolean,
        }
    },
    data() {
        return {

        }
    },

    methods: {
        closeCart(close) {
            this.$emit('closeCart', close)
        }
    }

}
</script>

<style></style>