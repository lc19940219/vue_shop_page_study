<template>
  <div class="shop_container">
    <ul class="shop_list" v-if="shops.length">
      <li class="shop_li" v-for="(shop,index) in shops" :key="index" @click="$router.push('/shop')">
        <a>
          <div class="shop_left">
            <img :src="baseImageUrl+shop.image_path">
          </div>
          <div class="shop_right">
            <div class="shop_right_header">
              <h4 class="shop_name">{{ shop.name }}</h4>
              <ul class="shop_support_list">
                <li class="support" v-for="(support,index) in shop.supports"
                    :key="index">{{ support.icon_name }}
                </li>
              </ul>
            </div>
            <div class="shop_right_center">
              <div class="shop_right_center_left">
                <div class="star star-24">
                  <span class="star_item on"></span>
                  <span class="star_item on"></span>
                  <span class="star_item on"></span>
                  <span class="star_item half"></span>
                  <span class="star_item off"></span>
                </div>
                <span class="shop_score">{{ shop.rating }}</span>
                <span class="shop_sell">月售{{ shop.recent_order_num }}单</span>
              </div>
              <div class="shop_right_center_right">
                <span class="delivery_style delivery_left">{{shop.delivery_mode.text}}</span>
                <span class="delivery_style delivery_right">准时达</span>
              </div>


            </div>
            <div class="shop_bottom">
              <p class="shop_delivery_msg">
                <span>￥{{ shop.float_minimum_order_amount }}起送</span>
                <span class="segmentation">/</span>
                <span>配送费{{ shop.float_delivery_fee }}元</span>
              </p>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <ul class="shop_list" v-else>
      <li v-for="index in 6" :key="index" >
        <img src="./images/shop_back.svg">
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  computed: {
    ...mapState(['shops'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.shop_container
  margin-bottom 50px

  .shop_list
    .shop_li
      bottom-border-1px(#f1f1f1)
      width 100%

      > a
        clearFix()
        display block
        box-sizing border-box
        padding 15px 8px
        width 100%
        background-color #fff

        .shop_left
          width 23%
          float left
          box-sizing border-box
          height 75px
          padding-right 15px

          > img
            width 100%
            height 100%
            display block

        .shop_right
          width 77%
          float right

          .shop_right_header
            float left
            width 100%

            .shop_name
              font-size 16px
              float left
              width 200px
              color #333
              font-weight 700
              line-height 16px

              &::before
                content '品牌'
                display inline-block
                font-size 11px
                line-height 11px
                background-color #ffd930
                border-radius 2px
                padding 2px 2px
                margin-right 5px

            .shop_support_list
              float right
              margin-top 3px

              .support
                float left
                border-radius 2px
                border 1px solid #f1f1f1
                font-size 10px
                padding 0 2px
                color #999

          .shop_right_center
            width 100%
            float left
            margin-top 10px
            margin-bottom 10px

            .shop_right_center_left
              float left

              .star
                float left
                font-size 0

                .star_item
                  display inline-block
                  background-repeat no-repeat

                &.star-24
                  .star_item
                    width 10px
                    height 10px
                    margin-right 3px
                    background-size 10px 10px

                    &:last-child
                      margin-right 0

                    &.on
                      bg-image('./images/stars/star24_on')

                    &.half
                      bg-image('./images/stars/star24_half')

                    &.off
                      bg-image('./images/stars/star24_off')

              .shop_score
                font-size 10px
                color #666
                transform scale(0.8)
                float left

              .shop_sell
                float left
                font-size 10px
                transform scale(0.8)
                color #666

            .shop_right_center_right
              float right
              font-size 0

              .delivery_style
                font-size 12px
                border-radius 2px
                display inline-block
                transform scale(0.7)
                transform-origin 35px 0
                padding 1px

              .delivery_left
                background-color #02a774
                color #fff
                margin-right -10px

              .delivery_right
                color #02a774
                border 1px solid #02a774


          .shop_bottom
            width 100%
            font-size 12px
            color #666

            .segmentation
              color #ccc


//@import "../../common/stylus/mixins.styl"
//.shop_container
//  margin-bottom 50px
//
//  .shop_list
//    .shop_li
//      bottom-border-1px(#e4e4e4)
//      width 100%
//
//      > a
//        clearFix()
//        display block
//        box-sizing border-box
//        padding 15px 8px
//        width 100%
//
//        .shop_left
//          float left
//          box-sizing border-box
//          width 23%
//          height 75px
//          padding-right 10px
//
//          .shop_image
//            width 100%
//            height 100%
//            display block
//
//        .shop_right
//          float right
//          width 77%
//
//          .shop_detail_header
//            clearFix()
//            width 100%
//
//            .shop_title
//              float left
//              width 200px
//              color #333
//              font-size 16px
//              line-height 16px
//              font-weight 700
//
//              &::before
//                content '品牌'
//                display inline-block
//                font-size 11px
//                line-height 11px
//                color #333
//                background #ffd930
//                padding 2px 2px
//                border-radius 2px
//                margin-right 5px
//
//            .shop_detail_ul
//              float right
//              margin-top 3px
//
//              .support
//                float left
//                font-size 10px
//                border 1px solid #f1f1f1
//                padding 0 2px
//                border-radius 2px
//          .shop_rating_order
//            clearFix( )
//            width 100%
//            margin-top 10px
//            margin-bottom 10px
//            .shop_rating_order_left
//              float left
//              color #ff9a0d
//              .star
//                float left
//                font-size 0
//                .start-item
//                  display inline-block
//                  background-repeat no-repeat
//                &.start-48
//                  .start-item
//                    width 20px
//                    height 20px
//                    margin-right 22px
//                    background-size 20px 20px
//                    &:last-child
//                      margin-right 0
//                    &.on
//                      bg-image('./images/stars/star48_on')
//                    &.half
//                      bg-image('./images/stars/star48_half')
//                    &.off
//                      bg-image('./images/stars/star48_off')
//                &.start-36
//                  .start-item
//                    width 15px
//                    height 15px
//                    margin-right 6px
//                    background-size 15px 15px
//                    &:last-child
//                      margin-right 0
//                    &.on
//                      bg-image('./images/stars/star36_on')
//                    &.half
//                      bg-image('./images/stars/star36_half')
//                    &.off
//                      bg-image('./images/stars/star36_off')
//                &.start-24
//                  .start-item
//                    width 10px
//                    height 10px
//                    margin-right 3px
//                    background-size 10px 10px
//                    &:last-child
//                      margin-right 0
//                    &.on
//                      bg-image('./images/stars/star24_on')
//                    &.half
//                      bg-image('./images/stars/star24_half')
//                    &.off
//                      bg-image('./images/stars/star24_off')
//              .rating_section
//                float left
//                font-size 10px
//                color #ff6000
//                margin-left 6px
//              .order_section
//                font-size 10px
//                float left
//                color #666
//                transform scale(0.8)
//            .shop_rating_order_right
//              float right
//              font-size 0px
//              .delivery_style
//                font-size 10px
//                transform scale(0.8)
//                display inline-block
//                padding 1px
//                line-height 10px
//                border-radius 2px
//              .delivery_left
//                color #fff
//                margin-right 10px
//                background-color #02a774
//                border 1px solid #02a774
//              .delivery_right
//                color #02a774
//                border 1px solid #02a774
//
//
//
//          .shop_distance
//            clearFix()
//            width 100%
//            font-size 12px
//            .shop_delivery_msg
//              float left
//              transform scale(0.9)
//              color #666
//            .segmentation
//              color #ccc


</style>
