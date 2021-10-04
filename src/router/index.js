import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/intro',
    name: 'intro',
    component: () => import('../views/Intro/Intro.vue')
  },
  {
    path: '/triphelper',
    name: '',
    component: () => import('../views/triphelper/TripHelper.vue'),
    children:[
      {path:'rules',name:'',component: () => import('../views/triphelper/subRules.vue')},
      {path:'requirements',name:'',component: () => import('../views/triphelper/subRequirements.vue')},
      {path:'passport',name:'',component: () => import('../views/triphelper/subDigitalPassport.vue')},
    ]
  },
  {
    path: '/story/road/:road_id',
    name: '',
    component: () => import('../views/Story/Story.vue'),
    children:[
      {path:'',name:'story',component: () => import('../views/Story/Road.vue')},
      {path:'spot/:spot_id',name:'story_spot',component: () => import('../views/Story/Spot.vue')},
    ]
  },
  {
    path: '/info',
    name: '',
    component: () => import('../views/Info/Info.vue'),
    children:[
      {path:'/',name:'Info',          component: () => import('../views/Info/InfoHome.vue')},
      {path:'food',name:'Info-Food',  component: () => import('../views/Info/InfoFood.vue')},
      {path:'sleep',name:'Info-Sleep',component: () => import('../views/Info/InfoSleep.vue')},
    ]
  },
  {
    path: '/community',
    name: '',
    component: () => import('../views/Community/Community.vue'),
    children:[
      {path:'/',name:'Community',                     component: () => import('../views/Community/CommunityHome.vue')},
      {path:'notice/:id', name:'Community-Notice',        component: () => import('../views/Community/CommunityNotice.vue')},
      {path:'freeboard', name:'Community-FreeBoard',  component: () => import('../views/Community/board/CommunityFreeBoard.vue')},
      {path:'newsletter', name:'Community-NewsLetter',component: () => import('../views/Community/CommunityNewsLetter.vue')},
      {path:'content', name:'Community-Content',      component: () => import('../views/Community/CommunityContent.vue')},
    ]
  },{
    path:'/user',
    name:'',
    children:[
      {path:'login', name:'login',  component: () => import('../views/User/Login.vue')},
      {path:'mypage', name:'mypage',component: () => import('../views/User/Mypage.vue')},
      {path:'signup', name:'signup',      component: () => import('../views/User/Signup.vue')},
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
