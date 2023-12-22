import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const Router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,
});

export default Router;
