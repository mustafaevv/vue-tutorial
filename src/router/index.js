import { createRouter, createWebHistory } from 'vue-router';

import UserPage from '../views/UserPage.vue';
import HomePage from '../views/HomePage.vue';
import CartPage from '../views/CartPage.vue';


const routes = [
  { path: '/', component: HomePage },
  { path: '/cart', component: CartPage },
  { path: '/user/:id', component: UserPage,props:true },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
