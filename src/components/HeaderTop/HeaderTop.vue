<template>
  <header class="header">

    <slot name="left"/>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{ title }}</span>
    </span>
    <slot name="right"/>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
  width 100%
  height 45px
  position fixed
  left 0
  right 0
  top 0
  z-index 100
  background #02a774

  .header_search
    position absolute
    left 15px
    top 50%
    transform translateY(-50%)
    width 10%
    height 50%

    .icon-sousuo
      font-size 25px
      color #fff

  .header_title
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    width 50%
    color #fff
    text-align center

    .header_title_text
      font-size 20px
      color #fff
      display block

  .header_login
    position absolute
    right 15px
    top 50%
    transform translateY(-50%)
    color #fff
    font-size 14px

    .header_login_text
      color #fff
</style>
