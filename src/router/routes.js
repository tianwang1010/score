import head from '@/components/head'

export default [
    {
      path: '/',
      name: 'head',
      component: head, 
      redirect:{name:'index'},
      children:[
        {path:"index",name:'index',component:()=>import('@/components/choice/index')},
        {path:'newsShow',name:'newsShow',component:()=>import('@/components/choice/newsShow')},
        {path:"data",name:'data',component:()=>import('@/components/choice/data')},
        {path:"match",name:'match',component:()=>import('@/components/choice/match')},
        {path:"app",name:'appYa',component:()=>import('@/components/choice/appYa')},
        {path:"login",name:'login',component:()=>import('@/components/login')},
        {path:"cop",name:'cop',component:()=>import('@/components/cop')},
        {path:"teamInfo",name:'teamInfo',component:()=>import('@/components/teamInfo')},
        {path:"playerInfo",name:'playerInfo',component:()=>import('@/components/playerInfo')},
        {path:"matchZb",name:'matchZb',component:()=>import('@/components/matchZb')},
      ]
    }
]