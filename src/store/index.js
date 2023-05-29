import {
    createStore
} from 'vuex';

const store = createStore({
    state: {
        pizzaProducts1: [],
        postsSushi: null,
        beverages: null,
        snacks1: null,
        commboProducts: null,
        deserts: null,
        saucesDates: null,
        openShowModalProducts: false,
        modalCart: [],
    },
    mutations: {

        getPostsPizza(state, allPostsPizza) {
            state.pizzaProducts1 = allPostsPizza;


        },
        getPostsSushi(state, allPostsSushi) {
            state.postsSushi = allPostsSushi
        },
        getBeverages(state, allPostsBeverages) {
            state.beverages = allPostsBeverages
        },
        getSnacks(state, productsSnacks) {
            state.snacks1 = productsSnacks
        },
        getCommbo(state, productsCommbo) {
            state.commboProducts = productsCommbo
        },
        getDesert(state, allproductsDesert) {
            state.deserts = allproductsDesert
        },
        getSauces(state, allproductsSauces) {
            setTimeout(() => {
                state.saucesDates = allproductsSauces
            }, 2000);
        },
        modalOpenProducts(state, obj) {
            state.openShowModalProducts = obj.boolean

            state.modalCart.push(state.pizzaProducts1.find((item) => item.id == obj.id))


        },
        closeModal(state, close) {
            state.openShowModalProducts = !close;

        },

    },
    actions: {

        modalOpenProducts({ commit }, id) {
            commit('modalOpenProducts', { boolean: true, id: id })


        },


        closeModal({ commit }) {
            commit('closeModal', false)
        },





        async getSauces({ commit }) {
            try {
                const productsSauces = await fetch('https://samandar99.github.io/bdsause/sauce.json');
                const allproductsSauces = await productsSauces.json();
                commit('getSauces', allproductsSauces);

            } catch {
                console.log('error');
            }
        },

        async getDesert({
            commit
        }) {
            try {
                const productsDesert = await fetch('https://6469bfc503bb12ac2091ea5a.mockapi.io/desert');
                const allproductsDesert = await productsDesert.json();
                console.log(allproductsDesert);
                commit('getDesert', allproductsDesert);
            } catch {
                console.log('error desert');
            }
        },

        async getCommbo({
            commit
        }) {
            try {
                const productsCommbo = await fetch('https://6469bfc503bb12ac2091ea5a.mockapi.io/combo');
                const allProductsCommbo = await productsCommbo.json();
                console.log(allProductsCommbo);
                commit('getCommbo', allProductsCommbo)
            } catch {
                console.log('error commbo');
            }
        },
        async getSnacks({
            commit
        }) {
            try {
                const productsSnacks = await fetch('https://64673df12ea3cae8dc291cdb.mockapi.io/sncaks');
                const allProductsSnacks = await productsSnacks.json();
                console.log(allProductsSnacks);
                commit('getSnacks', allProductsSnacks)
            } catch {
                console.log('error snacks');
            }

        },

        async getBeverages({
            commit
        }) {
            try {
                const productsBeverages = await fetch('https://64673df12ea3cae8dc291cdb.mockapi.io/beverages');
                const allPostsBeverages = await productsBeverages.json();
                console.log(allPostsBeverages);
                commit('getBeverages', allPostsBeverages)
            } catch {
                console.log('error beverages');
            }
        },

        async getPostsSushi({
            commit
        }) {
            try {
                const productsSushi = await fetch('https://645d44a1250a246ae31c22ec.mockapi.io/sushi')
                const allPostsSushi = await productsSushi.json();
                commit('getPostsSushi', allPostsSushi);
            } catch (error) {
                console.log('error');
            }
        },
        async getPostsPizza({
            commit
        }) {
            try {
                const productsPizza = await fetch("https://645d44a1250a246ae31c22ec.mockapi.io/pizzaItems");
                const allPostsPizza = await productsPizza.json();
                console.log(allPostsPizza);
                commit('getPostsPizza', allPostsPizza)

            } catch {
                console.log('error');
            }
        }

    },
    getters: {
        getPizzaId(state) {
            return state.pizzaProducts1.find((pizza) => pizza.id == this.currentPizaId)
        },
        getPizza(state) {
            return state.pizzaProducts1.find((item) => item.id == 2)
        }

    },
})

export default store;