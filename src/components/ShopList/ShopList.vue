<template>
  <div class="shop_container">
    <ul class="shop_list">
      <li class="shop_li">
        <a>
          <div class="shop_left">
            <img src="./images/shop/1.jpg" class="shop_image">
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">11111</h4>
              <ul class="shop_detail_ul">
                <li class="support">x</li>
                <li class="support">x</li>
                <li class="support">x</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star start-24">
                  <span class="start-item on"/>
                  <span class="start-item on"/>
                  <span class="start-item on"/>
                  <span class="start-item half"/>
                  <span class="start-item off"/>
                </div>
                <div class="rating_section">3.5</div>
                <div class="order_section">月售100单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_left">硅谷专送</span>
                <span class="delivery_style delivery_right">准时达</span>

              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20 起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.shop_container
  margin-bottom 50px

  .shop_list
    .shop_li
      bottom-border-1px(#e4e4e4)
      width 100%

      > a
        clearFix()
        display block
        box-sizing border-box
        padding 15px 8px
        width 100%

        .shop_left
          float left
          box-sizing border-box
          width 23%
          height 75px
          padding-right 10px

          .shop_image
            width 100%
            height 100%
            display block

        .shop_right
          float right
          width 77%

          .shop_detail_header
            clearFix()
            width 100%

            .shop_title
              float left
              width 200px
              color #333
              font-size 16px
              line-height 16px
              font-weight 700

              &::before
                content '品牌'
                display inline-block
                font-size 11px
                line-height 11px
                color #333
                background #ffd930
                padding 2px 2px
                border-radius 2px
                margin-right 5px

            .shop_detail_ul
              float right
              margin-top 3px

              .support
                float left
                font-size 10px
                border 1px solid #f1f1f1
                padding 0 2px
                border-radius 2px
          .shop_rating_order
            clearFix( )
            width 100%
            margin-top 10px
            margin-bottom 10px
            .shop_rating_order_left
              float left
              color #ff9a0d
              .star
                float left
                font-size 0
                .start-item
                  display inline-block
                  background-repeat no-repeat
                &.start-48
                  .start-item
                    width 20px
                    height 20px
                    margin-right 22px
                    background-size 20px 20px
                    &:last-child
                      margin-right 0
                    &.on
                      bg-image('./images/stars/star48_on')
                    &.half
                      bg-image('./images/stars/star48_half')
                    &.off
                      bg-image('./images/stars/star48_off')
                &.start-36
                  .start-item
                    width 15px
                    height 15px
                    margin-right 6px
                    background-size 15px 15px
                    &:last-child
                      margin-right 0
                    &.on
                      bg-image('./images/stars/star36_on')
                    &.half
                      bg-image('./images/stars/star36_half')
                    &.off
                      bg-image('./images/stars/star36_off')
                &.start-24
                  .start-item
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



</style>
