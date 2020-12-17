<template>
  <div>
    <ShopHeader/>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods" replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/rating" replace>评分</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info" replace>商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>


  </div>
</template>

<script>
import ShopHeader from "../../components/ShopHeader/ShopHeader";

export default {
  components: {
    ShopHeader
  },
  mounted() {
    this.$store.dispatch('getShopInfo')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.tab
  height 40px
  line-height 40px
  background-color #fff
  bottom-border-1px(rgba(7, 17, 27, 0.1))

  .tab-item
    float left
    width 33.333%
    text-align center
    color rgb(77,85,93)
    a
      display block
      position relative
      &.router-link-active
        color #02a774
        &::after
          content ""
          position absolute
          height 2px
          background #02a774
          width 35px
          bottom 1px
          left 50%
          transform translateX(-50%)







</style>
