import Vue from 'vue'
import Router from 'vue-router'

// 一级路由
// import index from '../components/views/index.vue';
// import login from '@/components/views/login';
// import register from '@/components/views/register';
// import detail from '@/components/views/detail';

// 路由懒加载
const index = () => import('../components/views/index.vue');
const login = () => import('@/components/views/login');
const register = () => import('@/components/views/register');
const detail = () => import('@/components/views/detail');

// 二级路由
// import home from '@/components/pages/home';
// import cart from '@/components/pages/cart';
// import main from '@/components/pages/main';
// import confirm from '@/components/pages/confirm';
// import sort from '@/components/pages/sort';
// import search from '@/components/pages/search';

// 路由懒加载
const home = () => import('@/components/pages/home');
const cart = () => import('@/components/pages/cart');
const main = () => import('@/components/pages/main');
const confirm = () => import('@/components/pages/confirm');
const sort = () => import('@/components/pages/sort');
const search = () => import('@/components/pages/search');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: index,
      children: [
        {
          path: '/home',
          component: home,
        },
        {
          path: '/search',
          component: search,
        },
        {
          path: '/sort',
          component: sort,
        },
        {
          path: '/cart',
          component: cart,
        },
        {
          path: '/main',
          component: main,
        },
        {
          path: '/confirm',
          component: confirm,
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      path: '/login',
      component: login,
    },
    {
      path: '/register',
      component: register,
    },
    {
      path: '/detail',
      component: detail,
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
