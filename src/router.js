import { createWebHistory, createRouter } from "vue-router";
// 여기에 컴포넌트를 import해와야 밑에다 적을 수 있음
import Faq from './components/Faq.vue';

const routes = [
  {
    path: "/Faq",//여기로 접속하면 아래 컴포넌트를 보여줌
    // 컴포넌트를 import해와서 적기
    component: Faq,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 