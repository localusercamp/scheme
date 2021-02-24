import Vue from 'vue'
import Router from 'vue-router'
import Scheme from '@/components/Scheme'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Scheme',
      component: Scheme
    }
  ]
})
