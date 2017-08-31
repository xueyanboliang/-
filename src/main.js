// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import VueRouter from 'vue-router';
import goods from 'components/goods/goods.vue';
import food from 'components/food/food.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';
import 'common/stylus/index.styl';
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;



const routes = [
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/ratings',
    component:ratings
  },
  {
    path: '/seller',
    component: seller
  }
];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});
router.push('/goods');
new Vue({
  el:'#app',
  router,
  render: h=>h(App)
});
if(module.hot){
  module.hot.accept();
};

