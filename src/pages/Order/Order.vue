<template>
  <div class="order">
    <HeaderTop title="订单"/>
    <div class="order_no_login">
      <img src="./images/person.png">
      <h3>登录后查看外卖订单</h3>
      <button>立即登录</button>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";

export default {
  components: {
    HeaderTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.order
  width 100%
  height:100%
  background-color #fff
  .order_no_login
    width 60%
    margin 0 auto
    padding-top 140px
    text-align center
    >img
      display block
      width 100%
      height 30%
    >h3
      font-size 17px
      color #6a6a6a
      padding 10px 0
    >button
      display inline-block
      font-size 14px
      color #fff
      background-color #02a774
      padding 10px 20px
      border-radius 5px

      border 0




</style>
