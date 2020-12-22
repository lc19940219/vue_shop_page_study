<template>
  <div class="food" v-if="foodShow">
    <div class="food-content">
      <div class="image-header">
        <img :src="food.image">
        <p class="foodpanel-desc">{{ food.info }}</p>
        <div class="back" @click="toggleShow">
          <i class="iconfont icon-arrow_left"></i>
        </div>
      </div>

      <div class="content">
        <h1 class="title">{{ food.name }}</h1>
        <div class="detail">
          <span class="sell-count">月售{{ food.sellCount }}份</span>
          <span class="rating">好评率{{ food.rating }}%</span>
        </div>
        <div class="price">
          <span class="now">￥{{ food.price }}</span>
          <span class="old" v-if="food.oldPrice">￥{{ food.oldPrice }}</span>
        </div>
        <div class="cartcontrol-wrapper">
         <Cart :food="food"/>
        </div>
      </div>

    </div>
    <div class="food-cover" @click="toggleShow"></div>
  </div>
</template>

<script>
import Cart from "../Cart/Cart";
export default {
  props: {
    food: Object
  },
  data() {
    return {
      foodShow: false
    }
  },
  methods: {
    toggleShow() {
      this.foodShow = !this.foodShow
    }
  },components:{
    Cart
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.food
  position fixed
  left 0
  top 0
  bottom 48px
  z-index 101
  width 100%

  &.fade-enter-active,&.fade-leave-active
    transform opacity 0.5s
  &.fade-enter,&.fade-leave-to
    opacity 0
  .food-content
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    width 80%
    height 65%
    z-index 66
    background #fff
    border-radius 5px
    .image-header
      width 100%
      padding-top 100%
      height 0
      position relative
      img
        position absolute
        left 0
        top 0
        width 100%
        height 100%
      .foodpanel-desc
        font-size 10px
        color #ddd
        position absolute
        left 0
        bottom 10px
        right 0
        padding 0px 10px 10px
      .back
        position absolute
        top 10px
        left 0
        .icon-arrow_left
          font-size 20px
          color #fff
          display block
          padding 10px



    .content
      padding 18px
      position relative
      .title
        font-size 14px
        line-height 14px
        margin-bottom 8px
        font-weight 700
        color rgb(7,17,27)
      .detail
        margin-bottom 18px
        font-size 0
        height 10px
        line-height 10px
        .sell-count,.rating
          font-size 10px
          color rgb(147,153,159)
        .sell-count
          margin-right 12px


      .price
        line-height 24px
        font-weight 700
        .now
          margin-right 8px
          font-size 14px
          color rgb(240,20,20)
        .old
          font-size 10px
          text-decoration line-through
          color rgb(147, 153, 159)



      .cartcontrol-wrapper
        position absolute
        right 12px
        bottom 12px
  .food-cover
    position absolute
    top 0
    left 0
    right 0
    bottom -48px
    background-color rgba(0, 0, 0, 0.5)
    z-index 55
</style>
