<template>
  <div>
    <ShopHeader/>
  </div>
</template>

<script>
import ShopHeader from "../../components/ShopHeader/ShopHeader";

export default {
  components: {
    ShopHeader
  },
  mounted() {
    this.$store.dispatch('getShopInfo')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
