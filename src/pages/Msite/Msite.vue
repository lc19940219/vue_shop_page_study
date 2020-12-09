<template>
  <div class="msite">
    <HeaderTop :title="address.name">
      <router-link to="/search" slot="left" class="header_search">
        <i class="iconfont icon-sousuo"/>
      </router-link>
      <router-link :to="user._id?'/userinfo':'/login'" slot="right" class="header_login">
        <span class="header_login_text" v-if="!user._id">
           登录|注册
        </span>
        <span class="header_login_text" v-else>
           <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </HeaderTop>
    <div class="miste-content-wrapper">
      <div class="miste-content">
        <nav class="msite_nav ">
          <div class="swiper-container" v-if="categorysArr.length">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">

                <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
                  <div class="food_container">
                    <img :src="baseImageUrl+category.image_url">
                  </div>
                  <span>{{ category.title }}</span>
                </a>

              </div>

            </div>
            <div class="swiper-pagination"></div>
          </div>
          <img src="./images/msite_back.svg" v-else>
        </nav>
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList/>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import ShopList from "../../components/ShopList/ShopList";
import {mapState, mapActions} from 'vuex'

export default {
  data() {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  components: {
    HeaderTop,
    ShopList
  },
  mounted() {
    this.getFoodCategorys(),
      this.getShop()

  },
  methods: {
    ...mapActions(['getFoodCategorys', 'getShop'])
  },
  computed: {
    ...mapState(['address', 'categorys', 'user']),
    categorysArr() {
      const {categorys} = this
      const arr = []
      let minArr = []
      categorys.forEach(c => {
        if (minArr.length === 8) {
          minArr = []
        }
        if (minArr.length === 0) {
          arr.push(minArr)
        }
        minArr.push(c)
      })
      return arr
    },
  },
  watch: {
    categorysArr(val) {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.msite
  width 100%

  .miste-content-wrapper
    position fixed
    top 45px
    bottom 46px
    width 100%
    overflow-x: hidden;
    overflow-y: scroll;

    .msite_nav
      bottom-border-1px(#e4e4e4)
      height 200px
      background #fff

      .swiper-container
        width 100%
        height 100%

        .swiper-wrapper
          width 100%
          height 100%

          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap

            .link_to_food
              width 25%

              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0

                img
                  display inline-block
                  width 50px
                  height 50px

              span
                display block
                font-size 13px
                width 100%
                text-align center
                color #666

        .swiper-pagination
          &.swiper-pagination-bullet-active
            background #02a774

    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff

      .shop_header
        padding 10px 10px 0

        .shop_header_title
          font-size 14px
          color #999
          line-height 20px


</style>
