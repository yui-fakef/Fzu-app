
import HomeView from './views/HomeView.vue'
import ArticleView from './views/ArticleView.vue'
import MyHomePage from './views/MyHomePage.vue'
import SetPage from './views/SetPage.vue'
import WritePage from './views/WritePage.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes :[
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/article/:id',
          name: 'article',
          component: ArticleView,
          props: true
        },
        {
          path: '/myhome',
          name:'MyHome',
          component: MyHomePage
        },
        {
          path:'/setpage',
          name:'set',
          component: SetPage
        },
        {
          path:'/writepage',
          name:'write',
          component: WritePage
        },
        // {
        //   path:'/login',
        //   name:'login',
        //   component: () => import('@/views/LoginPage.vue')
        // }
      ]
  })


export default router