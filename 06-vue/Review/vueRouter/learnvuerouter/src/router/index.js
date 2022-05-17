import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
  import ('../components/Home.vue')

const About = () =>
  import ('../components/About.vue')

const User = () =>
  import ('../components/User.vue')

const HomeMessage = () =>
  import ('../components/HomeMessage.vue')

const HomeNews = () =>
  import ('../components/HomeNews.vue')

const Profile = () =>
  import ('../components/Profile.vue')

// 1.注入插件
Vue.use(VueRouter)

// 2.创建映射关系
const routes = [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home,

    children: [{
        path: '',
        redirect: 'message',

      }, {
        path: 'news',
        component: HomeNews,
        meta: {
          title: 'News'
        },
      },
      {
        path: 'message',
        component: HomeMessage,
        meta: {
          title: 'Message'
        },
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: 'About'
    }
  }, {
    path: '/user/:id',
    component: User,
    meta: {
      title: 'User'
    }
  },
  {
    path: '/profile/:id',
    component: Profile,
    meta: {
      title: 'Profile'
    }
  }
]

// 3.创建router实例
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'cuifan'
})

// 导航守卫
router.afterEach((to, from) => {
  // to:即将要到达的目标路由对象
  // from:当前即将要离开的路由对象
  // next:调用该方法后，才能进入下一个路由对象
  window.document.title = to.meta.title
})

// 4.导出路由实例
export default router