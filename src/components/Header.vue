<template>
    <header class="header">
        <nav class="navbar">
            <a href="#" class="nav-branding">
                <i class="bx bxs-pizza loc"></i>
                <span class="pizza-name">Куда пицца</span>
            </a>
            <ul v-for="linkd in links" class="menu_close" :class="{ menu__nav: top > 60 }" :key="linkd.url">
                <router-link class="header__links" :to="linkd.url">
                    {{ linkd.title }}
                </router-link>
            </ul>
            <ul class="nav-menu" @click="navOpen = !navOpen" :class="{ active: navOpen }">
                <li class="nav-item" :class="{ closed: top > 60 }">
                    <i class="bx bx-location-plus sin"></i>
                    <a href="#" class="nav-link">Проверить адрес</a>
                </li>
                <li class="nav-item" :class="{ closed: top > 60 }">
                    <a href="#" class="nav-link signs">
                        <i class="bx bx-user sin"></i>
                        <span class="nav-link">Войти в аккаунт</span>
                    </a>
                </li>

                <li class="nav-item cart" @click="sendOpenCart(true)">
                    <i class="bx bxs-cart-alt withe"></i>
                    <p class="cart__count">0 ₽</p>
                </li>
                <div class="iswas-cart">
                    <span>Товар добавлен в корзину</span>
                </div>
            </ul>
            <div class="hamburger" @click="navOpen = !navOpen" :class="{ active: navOpen }">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header>
</template>

<script>

export default {
    props: ["links"],
    data() {
        return {
            navOpen: true,
            top: null,
        }
    },
    methods: {
        sendOpenCart(openCart) {
            this.$emit('sendOpenCart', openCart)
        },


    },
    created() {
        window.addEventListener('scroll', () => {
            this.top = window.scrollY;

        })
    },


}
</script>

<style>
.menu__nav {
    display: flex !important;
    column-gap: 32px !important;
}

.menu_close {
    display: none;
}

.closed {
    display: none !important;
}

.header__links {
    color: #000;
    font-family: 'Inter';
    font-size: 18px;
}


.header__links.router-link-exact-active {
    color: #ff7010;
}
</style>