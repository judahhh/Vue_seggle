import { createApp } from 'vue'
import App from './App.vue'
//router.js파일을 import해와야함
import router from './router.js';


createApp(App).use(router).mount('#app')
