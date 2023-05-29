import {
    createRouter,
    createWebHistory,
    createWebHashHistory
} from 'vue-router';

import Home from "@/pages/Home.vue";
import Pizza from "@/pages/Pizza.vue";
import Sushi from "@/pages/Sushi.vue";
import Beverages from "@/pages/Beverages.vue";
import Snacks from "@/pages/Snacks.vue";
import Combo from "@/pages/Combo.vue";
import Desert from "@/pages/Desert.vue";
import Sauce from "@/pages/Sauce.vue";
import CurrentPizza from "@/pages/Current/CurrentPizza.vue";
import CurrentSushi from "@/pages/Current/CurrentSushi.vue";
import CurrentBeverages from "@/pages/Current/CurrentBeverages.vue";
import CurrentSnacks from "@/pages/Current/CurrentSnacks.vue";
import ComboCurrent from "@/pages/Current/ComboCurrent.vue";
import DesertCurrent from "@/pages/Current/DesertCurrent.vue";
import SauceCurrent from '@/pages/Current/SauceCurrent.vue';
import NotFound from '@/pages/404.vue';

const routers = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/pizza',
        name: 'pizza',
        component: Pizza
    },
    {
        path: '/pizza/:id',
        name: 'CurrentPizza',
        component: CurrentPizza,
    },
    {
        path: '/sushi',
        name: 'sushi',
        component: Sushi,
    },
    {
        path: '/sushi/:id',
        name: 'CurrentSushi',
        component: CurrentSushi,
    },


    {
        path: '/beverages',
        name: 'beverages',
        component: Beverages
    },
    {
        path: '/beverages/:id',
        name: 'CurrentBeverages',
        component: CurrentBeverages,
    },

    {
        path: '/snacks',
        name: 'snacks',
        component: Snacks
    },
    {
        path: '/snacks/:id',
        name: 'CurrentSnacks',
        component: CurrentSnacks,
    },

    {
        path: '/combo',
        name: 'combo',
        component: Combo
    },

    {
        path: '/combo/:id',
        name: 'ComboCurrent',
        component: ComboCurrent,

    },
    {
        path: '/desert',
        name: 'desert',
        component: Desert
    },
    {
        path: '/desert/:id',
        name: 'DesertCurrent',
        component: DesertCurrent,
    },

    {
        path: '/sauce',
        name: 'sauce',
        component: Sauce
    },
    {
        path: '/sauce/:id',
        name: 'sauceCurrent',
        component: SauceCurrent
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: NotFound
    },


    ]
})

export default routers