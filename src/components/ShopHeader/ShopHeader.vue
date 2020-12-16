<template>
  <div class="shop_header">
    <div class="shop_nav" :style="{backgroundImage:`url(${info.bgImg})`}">
      <a href="javascript:;" class="back" @click="$router.back()">
        <i class="iconfont icon-arrow_left"></i>
      </a>
    </div>
    <div class="shop-content">
      <img :src="info.avatar" class="content-image">
      <div class="header-content">
        <h2 class="content-title">
          <span class="content-tag">
            <span class="mini-tag">品牌</span>
          </span>
          <span class="content-name">{{ info.name }}</span>
          <i class="content-icon"></i>
        </h2>
        <div class="shop-message">
          <span class="shop-message-detail">{{ info.score }}</span>
          <span class="shop-message-detail">月售{{ info.sellCount }}单</span>
          <span class="shop-message-detail">
           {{ info.description }}
            <span>约{{ info.deliveryTime }}分钟</span>
          </span>
          <span class="shop-message-detail">距离{{ info.distance }}</span>
        </div>
      </div>
    </div>
    <div class="shop-header-discounts">
      <div class="discounts-left">
        <div class="activity" :class="supportClasses[info.supports[0].type]">
          <span class="content-tag">
            <span class="mini-tag">{{ info.supports[0].name }}</span>
          </span>
          <span class="activity-content ellipsis">{{ info.supports[0].content }}</span>
        </div>
      </div>
      <div class="discounts-right">
        {{ info.supports.length }}个优惠
      </div>

    </div>
    <transition name="fade">
      <div class="shop-brief-model">
        <div class="brief-model-content">
          <h2 class="content-title">
            <span class="content-tag">
              <span class="mini-tag">品牌</span>
            </span>
            <span class="content-name">xxx</span>
          </h2>
          <ul class="brief-model-msg">
            <li>
              <h3>xxx</h3>
              <p>评分</p>
            </li>
            <li>
              <h3>xxx</h3>
              <p>月售</p>
            </li>
            <li>
              <h3>xxx</h3>
              <p>约xxx分钟</p>
            </li>
            <li>
              <h3>xxx</h3>
              <p>距离</p>
            </li>
          </ul>
          <h3 class="biref-model-title">
            <span>公告</span>
          </h3>
          <div class="brief-modal-notice">
            {{ info.bulletin }}
          </div>
          <div class="mask-footer">
            <span class="iconfont icon-close"></span>
          </div>
        </div>
        <div class="biref-model-cover"></div>
      </div>
    </transition>
    <transition name="fade">
      <div class="activity-sheet">
        <div class="activity-sheet-content">
          <h2 class="activity-sheet-title">
            优惠活动
          </h2>
          <ul class="list">
            <li class="activity-item"
                v-for="(support,index) in info.supports" :key="index" :class="supportClasses[support.type]">
              <span class="content-tag">
                <span class="mini-tag">
                  {{ support.name }}
                </span>
              </span>
              <span class="activity-content ">
                  {{ support.content }}
                </span>
            </li>

          </ul>
          <div class="activity-sheet-close">
            <span class="iconfont icon-close"></span>
          </div>
        </div>
        <div class="activity-sheet-cover"></div>
      </div>
    </transition>


  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      supportClasses: ['activity-green', 'activity-red', 'activity-orange'],

    }
  },
  computed: {
    ...mapState(['info'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.shop_header
  height 100%
  background #fff
  color #fff
  overflow hidden
  position relative

  .shop_nav
    background-size cover
    background-repeat no-repeat
    height 40px
    padding 5px 10px
    position relative
    //&::before
    //  content ""
    //  position absolute
    //  left 0
    //  right 0
    //  top 0
    //  border-bottom 0
    //  background red
    //  background-color rgba(119, 103, 137, .43)

    .back
      position absolute
      left 0
      top 10px

      .icon-arrow_left
        display block
        padding 5px
        font-size 20px
        color #fff

  .shop-content
    padding 30px 20px 5px 20px
    display flex
    background #fff
    position relative
    text-align center

    img
      box-shadow 0 0 0.4vw 0 rgba(0, 0, 0, 0.2);
      position absolute
      top 0
      left 50%
      width 66px
      height: 66px
      border-radius 2px
      margin-left -33px
      margin-top -40px

    .header-content
      width 72%
      flex 1

      .content-title
        font-size 20px
        color #333
        white-space nowrap
        line-height 24px
        font-weight 700
        align-items center
        justify-content center
        display flex

        .content-tag
          background-image linear-gradient(90deg, #fff100, #ffe339)
          border-radius 2px
          width: 36px
          height: 18px
          color #6a3709

          margin-right 10px
          font-style normal
          font-weight 700
          position relative

          .mini-tag
            position absolute
            left 0
            top 2px
            font-size 24px
            transform scale(0.5)
            display flex
            justify-content center
            align-items center
            right -100%
            bootom -100%
            font-weight 600
            transform-origin 0 0

        .content-name
          font-weight 700
          text-align left
          overflow hidden
          text-overflow ellipsis

        .content-icon
          width: 20px
          height: 16px
          position relative

          &::after
            content ""
            position absolute
            left 8px
            top 3px
            border 6px solid
            border-color transparent transparent transparent rgba(0, 0, 0, 0.67)

      .shop-message
        height 12px
        white-space nowrap
        margin-top 8px
        font-size 11px
        color #333

        .shop-message-detail:not(:last-child)::after
          content '\B7'
          opacity 0.2
          margin-left 1px


  .shop-header-discounts
    display flex
    background #fff
    border 1px solid #eee
    padding 5px 7px
    border-radius 1px
    font-size 11px
    color #666
    margin 0 30px
    align-items center

    .discounts-left
      flex 1
      overflow hidden

      .activity
        display flex
        align-items center

        .content-tag
          border-radius 1px
          width: 25px
          height: 13px
          margin-right 5px
          color #fff
          font-style normal
          font-weight 700
          position relative
          background-color rgb(112, 188, 70)

          .mini-tag
            position absolute
            left 0
            top 0
            right -100%
            bottom -100%
            font-size 18px
            font-weight 600
            transform scale(0.5)
            transform-origin 0 0
            display flex
            align-items center
            justify-content center

    .discounts-right
      width: 50px
      flex-shrink 0
      padding-right 10px
      text-align right
      position relative

      &::after
        content ""
        position absolute
        right 0
        top 50%
        transform translateY(-50%)
        border 4px solid

        border-color transparent transparent transparent rgba(0, 0, 0, .57)


  .shop-brief-model
    display none
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    //display flex
    justify-content center
    align-items center
    z-index 52
    flex-direction column
    color #333

    &.fade-enter-activity, &.fade-leave-activity
      transform opacity 0.5s

    &.fade-enter, &.fade-leave-to
      opacity 0

    .biref-model-cover
      position absolute
      background-color rgba(0, 0, 0, 0.5)
      width: 100%
      height: 100%
      top 0
      left 0
      z-index 1

    .brief-model-content
      width 80%
      padding 25px 20px
      border-radius 5px
      background #fff
      display flex
      z-index 99
      position relative
      flex-direction column

      .content-title
        font-size 20px
        line-height 24px
        font-weight 700
        white-space nowrap
        display flex
        align-items center
        justify-content center

        > span
          font-weight 600

        .content-tag
          border-radius 2px
          background-image linear-gradient(90deg, #fff100, #ffe339);
          width 36px
          height 18px
          font-style normal
          margin-right 10px
          color #6a3709
          position relative

          .mini-tag
            position absolute
            top 0
            left 0
            right -100%
            bottom -100%
            transform scale(0.5)
            transform-origin 0 0
            display flex
            font-size 24px
            justify-content center
            align-items center


      .brief-model-msg
        display flex
        margin 20px -10px 0

        > li
          flex 1
          text-align center

          > h3
            font-size 15px
            font-weight 600
            color #333
            margin-bottom 8px

          > p
            font-size 12px
            color #999

      .biref-model-title
        text-align center
        margin 15px auto 15px
        width 85px
        background-image linear-gradient(90deg, #fff, #333 50%, #fff)
        background-size 100% 1px
        background-repeat no-repeat
        background-position 50%

        > span
          background-color #fff
          font-size 12px
          padding 0 6px
          color #999

      .brief-modal-notice
        font-size 13px
        line-height 1.54
        color #333
        overflow-y auto

      .mask-footer
        position absolute
        bottom -60px
        left 50%
        padding 6px
        border-radius 50%
        border 1px solid rgba(255, 255, 255, .7)
        transform translateX(-50%)

        span
          color #fff
          font-size 16px


  .activity-sheet
    position fixed
    top 0
    left 0
    width: 100%
    height: 100%
    z-index 99

    .activity-sheet-content
      background-color #f5f5f5
      box-shadow 0 -1px 5px 0 rgba(0, 0, 0, 0.4)
      bottom 0
      left 0
      right 0
      z-index 100
      padding 20px 30px
      box-sizing border-box
      color #333
      position absolute

      .activity-sheet-title
        text-align center
        font-size 20px
        font-weight 600
        margin-bottom 20px

      .list
        font-size 16px
        height 160px
        overflow-y auto

        .activity-item
          margin-bottom 12px
          display flex
          font-size 13px
          align-items center

          &.activity-green
            .content-tag
              background-color rgb(112, 188, 70)

          &.activity-red
            .content-tag
              background-color rgb(240, 115, 115)

          &.activity-orange
            .content-tag
              background-color: rgb(241, 136, 79)

          .content-tag
            display inline-block
            border-radius 2px
            width 36px
            height: 18px
            margin-right 10px
            color #fff
            font-style normal
            position relative

            .mini-tag
              position absolute
              left 0
              top 0
              right -100%
              bottom -100%
              font-size 24px
              transform scale(.5)
              transform-origin 0 0
              display flex
              align-items center
              justify-content center


      .activity-sheet-close
        position absolute
        right 6px
        top 10px
        width 25px
        height 25px

        > span
          font-size 20px

</style>
