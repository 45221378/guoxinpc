import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import  Joinus from '@/views/Joinus';

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: ()=> import('@/views/Home.vue')
    },
    {
      path:"/about",
      name:'about',
      component:()=> import('@/views/About.vue'),
      // children:[
      //   {
      //     path:"qyjs",
      //     name:'qyjs',
      //     component:()=> import('@/views/Qyjs.vue'),
      //   },
      //   {
      //     path:"qywh",
      //     name:'qywh',
      //     component:()=> import('@/views/Qywh.vue'),
      //   }
      // ]
    },
    {
      path: '/solvecase',
      name: 'solvecase',
      component:  ()=> import('@/views/Solvecase')
    },
    {
      path: '/projectcase',
      name: 'projectcase',
      component:  ()=> import('@/views/ProjectCase')
    },
    {
      path: '/news',
      name: 'news',
      component:  ()=> import('@/views/News')
    },
    {
      path: '/newsdetail',
      name: 'newsdetail',
      component:  ()=> import('@/views/NewsDetail')
    },
    {
      path: '/joinus',
      name: 'joinus',
      component: Joinus
    },
    {
      path:"**",
      redirect:{
        name:"home"
      }
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
