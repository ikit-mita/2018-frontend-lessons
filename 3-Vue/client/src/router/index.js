import Vue from 'vue';
import Router from 'vue-router';
import home from '@/pages/home/index';
import loader from '@/pages/home/loader';
import swViewer from '@/pages/sw-viewer';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: { name: 'main' }
  }, {
    path: '/main',
    name: 'main',
    component: home,
    children: [{
      name: 'main.loader',
      path: 'loader',
      component: loader
    }]
  }, {
    path: '/sw/:personId?',
    name: 'sw-viewer',
    component: swViewer
  }]
});

