import { createApp } from 'vue';
import App from './App.vue';

import { createPinia } from 'pinia';
import axios from 'axios';
import routers from './router/index.js';

// 전역 스타일 import
import '@/assets/css/reset.css'
import '@/assets/css/common.css'
import '@/assets/css/layout.css'

// 공통 js
import '@/assets/js/common.js'

const pinia = createPinia();


const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(pinia).use(routers).mount('#app')

