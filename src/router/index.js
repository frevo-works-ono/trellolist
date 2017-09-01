import Vue from 'vue'
import Router from 'vue-router'
import Card from '@/components/Card'
import Signin from '@/components/Signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/',
      name: 'CardList',
      component: Card
    }
  ]
})
