<template>
  <div class="food" v-if="foodShow">
    <div class="food-content">
      <div class="image-header">
        <img :src="food.image">
        <p class="foodpanel-desc">{{ food.info }}</p>
        <div class="back">
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
          购物车
        </div>
      </div>
    </div>

  </div>
</template>

<script>

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
  z-index 100%
  width 100%
  background red
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



</style>
