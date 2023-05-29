import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/main.css'
import '@/assets/styles/header.css'

import routers from '@/router'

import store from "@/store/index.js";

import VueTransition  from 'vue-transition';

const app = createApp(App)

app.use(routers);
app.use(store);


app.mount('#app')
