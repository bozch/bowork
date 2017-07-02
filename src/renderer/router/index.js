import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login-page',
      component: require('@/components/LoginPage'),
      children: [
        {
          path: 'fastlinks',
          component: require('@/components/FastLinks')
        }, {
          path: 'cryptos',
          component: require('@/components/Cryptos')
        }, {
          path: 'dragarea',
          component: require('@/components/DragArea')
        }, {
          path: 'electron_note',
          component: require('@/components/ElectronVueDevelop')
        }

      ]
    },
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
