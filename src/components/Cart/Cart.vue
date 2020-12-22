<template>
  <div class="cart">
    <transition name="move">
      <div class="iconfont icon-remove_circle_outline" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click.stop="updateFoodCount(true)"></div>
  </div>
</template>

<script>

export default {
  props:{
    food:Object,
  },
  methods:{
    updateFoodCount(isAdd){
this.$store.dispatch('updateFoodCount',{isAdd,food:this.food})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.cart
  font-size 0
  .icon-remove_circle_outline
    display inline-block
    font-size 24px
    line-height 24px
    color $green
    padding 6px
    &.move-enter-active,&.move-leave-active
      transition all 0.3s
    &.move-enter,&.move-leave-to
      opacity 0
      transform translateX(15px) rotate(180deg)
  .cart-count
    display inline-block
    vertical-align top
    width 12px
    line-height 24px
    padding-top 6px
    text-align center
    font-size 10px
    color rgb(147,153,159)
  .icon-add_circle
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color $green


</style>
