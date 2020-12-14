<template>
  <div class="search">
    <HeaderTop title="搜索"/>
    <form class="search_form" @submit.prevent="search">
      <input type="search" class="search_input" placeholder="请输入商家名称" v-model="keyWord">
      <input type="submit" class="search_submit">
    </form>
    <div class="list" v-if="!noSearchShops">
      <ul class="list_container">
        <router-link :to="{path:'/shop',query:{id:item.id}}" tag="li"
                     v-for="(item,index) in searchShops" :key="index"
                     class="list_li">
          <div class="item_left">
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg"
                 class="item_left_img">
          </div>
          <div class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{ item.name }}</span>
              </p>
              <p>月售 {{ item.month_sales || item.recent_order_num }} 单</p>
              <p>{{ item.delivery_fee || item.float_minimum_order_amount }} 元起送 / 距离{{ item.distance }}</p>
            </div>

          </div>

        </router-link>
      </ul>
    </div>
    <div class="search_none" v-else>很抱歉！无搜索结果</div>

  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      keyWord: '',
      imgBaseUrl: 'http://cangdu.org:8001/img/',
      noSearchShops: false
    }
  },
  components: {
    HeaderTop
  },
  computed: {
    ...mapState(['searchShops'])
  },
  methods: {
    search() {
      const keyword = this.keyWord.trim()
      if (keyword) {
        this.$store.dispatch("getSearchShop", keyword)
      }
    }
  },
  watch: {
    searchShops(value) {
      if (!value.length) {
        this.noSearchShops = true
      } else {
        this.noSearchShops = false
        this.$nextTick(()=>{
          new BScroll('.list',{
            click:true
          })
        })
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.search
  width 100%
  height 100%
  overflow auto
  background-color #fff

  .search_form
    clearFix()
    width 100%
    margin-top 45px
    background-color #fff
    padding 12px 8px
    position absolute

    input
      height 35px
      padding 0px 4px
      border-radius 2px
      font-weight bold
      outline none

      &.search_input
        float left
        width 78%
        display inline-block
        border 2px solid #f2f2f2
        font-size 14px
        color #333
        background-color #f2f2f2

        &:focus
          border 2px solid #02a774

      &.search_submit
        float right
        width 15%
        display inline-block
        margin-right 3%
        background-color #02a774
        color #fff
        font-size 16px
        border 2px solid #02a774
  .list
    .list_container
      background-color #fff
      .list_li
        display flex
        justify-content center
        padding 10px
        border-bottom 1px solid $bc
        .item_left
          margin-right 10px
          .item_left_img
            width 50px
            height 50px
            display block
        .item_right
          font-size 12px
          flex 1
          .item_right_text
            p
              line-height 12px
              margin-bottom 10px
              &:last-child
                margin-bottom 0
  .search_none
    margin 0 auto
    color #333
    background-color #fff
    text-align center
    font-size 16px
    line-height 16px



</style>
