<template>
 <div >
   <div class="goods">
     <div class="menu-wrapper">
       <ul>
         <li class="menu-item " v-for="(good,index) in goods" :key="index"
             :class="{current:index===currentIndex}" @click="cliclMenuItem(index)"
         >

          <span class="text">
            <img :src="good.icon" class="icon" v-if="good.icon">
            {{ good.name }}
          </span>
         </li>
       </ul>
     </div>
     <div class="food-wrapper">
       <ul ref="foodsUl">
         <li class="food-list-hook" v-for="(good,index) in goods" :key="index">
           <h1 class="title">
             {{ good.name }}
           </h1>
           <ul>
             <li class="food-item" v-for="(food,index) in good.foods" :key="index" @click="showFood(food)">
               <div class="icon">
                 <img width="57" height="57" :src="food.icon">
               </div>
               <div class="content">
                 <h2 class="name">{{ food.name }}</h2>
                 <p class="desc">{{ food.description }}</p>
                 <div class="extra">
                   <span class="count">月售{{ food.sellCount }}份</span>
                   <span>好评率{{ food.rating }}%</span>
                 </div>
                 <div class="price">
                   <span class="now">￥{{ food.price }}</span>
                   <span class="old" v-if="food.oldPrice">{{ food.oldPrice }}</span>
                 </div>
               </div>

             </li>
           </ul>
         </li>
       </ul>
     </div>
   </div>
   <Food :food="food" ref="food"/>
 </div>

</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
import Food from "../../../components/Food/Food";
export default {
  data() {
    return {
      scrolly: 0,
      tops: [],
      food: {}
    }
  },
  components:{
    Food
  },
  computed: {
    ...mapState(['goods']),
    currentIndex() {
      const {scrolly, tops} = this
      const index = tops.findIndex((top, index) => {
        return scrolly >= tops[index] && scrolly < tops[index + 1]
      })
      return index
    }
  },
  mounted() {
    this.$store.dispatch('getShopGoods',()=>{
      this.$nextTick(()=>{
        this._initScroll()
        this._initTops()
      })
    })
  },
  methods: {
    _initTops() {
      const tops = []
      let top = 0
      tops.push(top)
      const lis = this.$refs.foodsUl.getElementsByClassName('food-list-hook');
      Array.prototype.slice.call(lis).forEach(li => {
        top += li.clientHeight
        tops.push(top)
      })
      this.tops = tops

    },
    _initScroll() {
      new BScroll('.menu-wrapper', {
        click: true

      })
      this.foodsScroll = new BScroll('.food-wrapper', {
        click: true,
        probeType: 2
      })

      this.foodsScroll.on('scroll', ({x, y}) => {
        this.scrolly = Math.abs(y)
      })
      this.foodsScroll.on('scrollEnd', ({x, y}) => {
        this.scrolly = Math.abs(y)
      })

    },
    cliclMenuItem(index) {
      const scrollY = this.tops[index]
      this.scrolly = scrollY
      this.foodsScroll.scrollTo(0, -scrollY, 300)
    },
    showFood(food){
      this.food=food
      this.$refs.food.toggleShow()
    }

  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../../common/stylus/mixins.styl"
.goods
  display flex
  position absolute
  top 195px
  bottom 46px
  background-color #fff
  overflow hidden
  width 100%

  .menu-wrapper
    width 80px
    flex 0 0 80px
    background #f3f5f7

    .menu-item
      display table
      height 54px
      width 56px
      line-height 14px
      padding 0 12px

      &.current
        position relative
        z-index 10
        margin-top -1px
        background #fff
        color #02a774
        font-weight 700

        .text
          border-none()

      .icon
        display inline-block
        width 12px
        height 12px
        margin-right 2px
        background-size 12px 12px
        background-repeat no-repeat

      .text
        font-size 12px
        width 56px
        vertical-align middle
        display table-cell
        bottom-border-1px(rgba(7, 17, 27, 0.1))


  .food-wrapper
    flex 1

    .title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size 12px
      color rgb(147, 153, 159)
      background #f3f5f7

    .food-item
      display flex
      margin 18px
      padding-bottom 18px
      bottom-border-1px(rgba(7, 17, 27, 0.1))

      &:last-child
        border-none()
        padding-bottom 0

      .icon
        flex 0 0 57px
        margin-right 10px

      .content
        flex 1

        .name
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(147, 153, 159)

        .desc, .extra
          line-height 10px
          font-size 10px
          color rgb(147, 153, 159)

        .desc
          line-height 12px
          margin-bottom 8px

        .extra
          .count
            margin-right 10px

        .price
          font-weight 700
          line-height 24px

          .now
            margin-right 9px
            font-size 14px
            color: rgb(240, 20, 20)

          .old
            text-decoration line-through
            font-size 10px
            color rgb(147, 153, 159)


</style>
