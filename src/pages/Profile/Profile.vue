<template>
  <div class="profile">
    <HeaderTop title="我的"/>
    <div class="profile_number">
      <router-link to="/login" class="profile_link">
        <div class="profile_img">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="profile_userinfo">
          <p class="user_info_top">登录/注册</p>
          <p>
            <span class="user_icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>
    </div>
    <div class="profile_info_data">
      <ul class="info_data_list" >
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top">
            <span>0.00</span>
            元
          </span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top">
            <span>0</span>
            个
          </span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top">
            <span>0</span>
            分
          </span>
          <span class="info_data_bottom">我的积分</span>
        </a>

      </ul>

    </div>
    <div class="profile_my_order">
      <a href="havascript:;" class="my_order">
        <span>
          <i class="iconfont icon-order-s"></i>
        </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>

        </div>
      </a>
      <a href="havascript:;" class="my_order">
        <span>
          <i class="iconfont icon-jifen"></i>
        </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>

        </div>
      </a><a href="havascript:;" class="my_order">
        <span>
          <i class="iconfont icon-vip"></i>
        </span>
      <div class="my_order_div">
        <span>硅谷外卖会员卡</span>
        <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>

      </div>
    </a><a href="havascript:;" class="my_order">
        <span>
          <i class="iconfont icon-fuwu"></i>
        </span>
      <div class="my_order_div">
        <span>服务中心</span>
        <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>

      </div>
    </a>
    </div>

  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import App from "../../App";

export default {
  components: {
    App,
    HeaderTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.profile
  width 100%
  height 100%
  background-color #fff
  .profile_number
    background-color #02a774
    margin-top 45px
    .profile_link
      position relative
      clearFix()
      display block
      padding 20px 10px
      .profile_img

        float left
        width:60px
        height:60px
        border-radius 50%
        overflow hidden

        .icon-person
          font-size 62px
          background #e4e4e4
      .profile_userinfo
        float left
        margin-top 5px
        margin-left 15px
        >p
          font-weight 700
          font-size 18px
          color #fff
          &.user_info_top
            padding-bottom 8px
        .user_icon
          display inline-block
          width:20px
          height:20px
          margin-left -15px
          margin-right 5px
          .icon-mobile
            font-size 30px
            vertical-align text-top
        .icon-mobile-number
          font-size 14px
          color #fff
      .arrow
        position absolute
        top 50%
        transform translateY(-50%)
        right 15px
        width:12px
        height:12px
        .icon-jiantou1
          font-size 5px
          color #fff



  .profile_info_data
    width 100%
    bottom-border-1px(#e4e4e4)
    background #fff
    overflow hidden
    .info_data_list
      clearFix()

      .info_data_link
        float left
        width 33%
        text-align center
        border-right 1px solid #f1f1f1
        .info_data_top
          display block
          width 100%
          font-size 14px
          color #333
          padding 15px 5px 10px
          span
            display inline-block
            font-size 30px
            color #f90
            font-weight 700
            padding-bottom 10px
        .info_data_bottom
          display block
          font-size 14px
          color #666d
          padding-bottom 10px
          font-weight 400
      .info_data_link:nth-of-type(2)
        .info_data_top
          span
            color #ff5f3e
      .info_data_link:nth-of-type(3)
        border 0
        .info_data_top
          span
            color #6ac20b





  .profile_my_order
    width 100%
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .my_order
      display flex
      bottom-border-1px(#e4e4e4)
      align-items center
      padding-left 15px
      >span
        display flex
        align-items center
        width 20px
        height 20px
        >.iconfont
          margin-left -10px
          font-size 30px
        .icon-order-s
          color #02a774
        .icon-jifen
          color #ff5f3e
        .icon-vip
          color #f90
        .icon-fuwu
          color #02a774
      .my_order_div
        width 100%
        padding 18px 10px 18px 0
        font-size 16px
        color #333
        display flex
        justify-content space-between
        span
          display block
          .my_order_icon
            width:10px
            height:10px
            .icon-jiantou1
              color #bbb
              font-size 10px


</style>
