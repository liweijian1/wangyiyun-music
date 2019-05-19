import Vue from 'vue'
import Router from 'vue-router'
import Users from './../components/user/user'
import Recommend from './../components/recommend/recommend'
import Rank from './../components/rank/rank'
import Singer from './../components/singer/singer'
import Search from './../components/search/search'
import Registe from './../components/registe/registe'
import Login from './../components/login/login'

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path:'/',
    },
    {
      path: '/user',
      component: Users
    },
    {
      path:'/recommend',
      component:Recommend
    },
    {
      path:'/rank',
      component:Rank
    },
    {
      path:'/singer',
      component:Singer
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/registe',
      component:Registe
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
