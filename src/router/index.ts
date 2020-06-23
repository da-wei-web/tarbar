import Vue from 'vue'
import VueRouter, { RouteConfig, RawLocation, Route } from 'vue-router'

const Work = () => import('../views/work/Work.vue');
const Company = () => import('../views/company/Company.vue');
const My = () => import('../views/my/My.vue');
const News = () => import('../views/news/News.vue');

Vue.use(VueRouter)

// const originalPush = VueRouter.prototype.push;
// console.log(VueRouter.prototype.push)
// VueRouter.prototype.push = function push(location:RawLocation):Promise<Route> {
//   return originalPush.call(this, location).catch((errorMsg:any) => console.log(errorMsg))
// }

const routes: Array<RouteConfig> = [
  {
    path: '',
    redirect: '/work'
  },
  {
    path: '/work',
    component: Work
  },
  {
    path: '/company',
    component: Company
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/my',
    component: My
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
