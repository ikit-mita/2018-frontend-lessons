import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import swViewer from '@/pages/sw-viewer'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  }, {
      path: '/sw',
      name: 'sw-viewer',
      component: swViewer
  }]
})
