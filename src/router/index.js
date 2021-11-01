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
    component: () => import('../views/Intro/Intro.vue'),
    children:[
      {path:'intro',name:'순례길 소개',component:()=>import('../views/Intro/Intro_intro.vue')},
      {path:'info',name:'투어 안내',component:()=>import('../views/Intro/Intro_intro.vue')}
    ]
  },
  {
    path: '/triphelper',
    name: '여행도우미',
    component: () => import('../views/triphelper/TripHelper.vue'),
    children:[
      {path:'rules',name:'이용수칙',component: () => import('../views/triphelper/subRules.vue')},
      {path:'requiments',name:'준비물',component: () => import('../views/triphelper/subRequirements.vue')},
      {path:'passport',name:'디지털패스포트',component: () => import('../views/triphelper/subDigitalPassport.vue')},
    ]
  },
  {
    path: '/story/road/:road_id',
    name: '',
    component: () => import('../views/Story/Story.vue'),
    children:[
      {path:'',name:'순례길이야기',component: () => import('../views/Story/Road.vue')},
      {path:'spot/:spot_id',name:'story_spot',component: () => import('../views/Story/Spot.vue')},
    ]
  },
  {
    path: '/info',
    name: '',
    component: () => import('../views/Info/Info.vue'),
    children:[
      {path:'buddism',name:'불교문화',          component: () => import('../views/Info/subBuddhism.vue')},
      {path:'Confucianism',name:'유교문화',  component: () => import('../views/Info/subConfucianism.vue')},
      {path:'modern',name:'현대콘텐츠',component: () => import('../views/Info/subModern.vue')},
    ]
  },
  {
    path: '/커뮤니티',
    name: '',
    component: () => import('../views/Community/Community.vue'),
    children:[
      {path:'/',name:'커뮤니티',                     component: () => import('../views/Community/CommunityHome.vue')},
      {path:'순례길소식/:id', name:'순례길소식',        component: () => import('../views/Community/CommunityNotice.vue')},
      {path:'순례자이야기', name:'순례자이야기',  component: () => import('../views/Community/board/CommunityFreeBoard.vue')},
    ]
  },{
    path:'/user',
    name:'',
    children:[
      {path:'login', name:'login',  component: () => import('../views/User/Login.vue')},
      {path:'mypage', name:'mypage',component: () => import('../views/User/Mypage.vue')},
      {path:'signup', name:'signup',      component: () => import('../views/User/Signup.vue')},
    ]
  },
  {
    path: '/map',
    name: 'DynamicMap',
    component: () => import('../views/Map.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
