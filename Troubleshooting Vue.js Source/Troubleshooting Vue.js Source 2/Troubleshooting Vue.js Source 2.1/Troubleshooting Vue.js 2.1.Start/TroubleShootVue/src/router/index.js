import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import About from '@/components/About'
import Signup from '@/components/Signup'
import Users from '@/components/Users'
import User from '@/components/User'

import Counter from '@/components/Counter'
import Sample from '@/components/Sample'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },  
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/sample',
      name: 'Sample',
      component: Sample
    }
    
  ]
})
