import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from "../pages/Login/Login";
import Shop from "../pages/Shop/Shop";
import ShopGoods from "../pages/Shop/ShopGoods/ShopGoods";
import ShopInfo from "../pages/Shop/ShopInfo/ShopInfo";
import ShopRating from "../pages/Shop/ShopRating/ShopRating";
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/shop',
      component: Shop,
      children:[
        {
          path: '/shop/goods',
          component: ShopGoods,
        },
        {
          path: '/shop/rating',
          component: ShopRating,
        },
        {
          path: '/shop/info',
          component: ShopInfo,
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
    {
      path: '/',
      redirect: '/msite'
    },
  ]
})
