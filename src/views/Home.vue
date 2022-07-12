<template>
  <div class="home">
    <Header></Header>
    <van-tabs v-model="activeName" title-active-color="#b0352f" title-inactive-color="#000" color="#b0352f">
      <van-tab title="推荐" name="recommend" class="recommend-style" ref="recommend">
        <div class="section" ref="section">
          <div>
            <Swiper></Swiper>
            <Icons></Icons>
            <Recommend></Recommend>
          </div>
        </div>
      </van-tab>
      <van-tab title="金骏眉" name="tea1"></van-tab>
      <van-tab title="大红袍" name="tea2"></van-tab>
      <van-tab title="铁观音" name="tea3"></van-tab>
      <van-tab title="绿茶" name="tea4"></van-tab>
      <van-tab title="紫砂壶" name="tea5"></van-tab>
      <van-tab title="漳平水仙" name="tea6"></van-tab>
    </van-tabs>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/common/Tabbar.vue'
import Header from '../components/home/Header.vue'
import Swiper from '../components/home/Swiper.vue'
import Icons from '../components/home/Icons.vue'
import Recommend from '../components/home/Recommend.vue'
import BScroll from '@better-scroll/core'
export default {
  name: 'home',
  components: { Tabbar, Header, Swiper, Icons, Recommend },
  data() {
    return {
      activeName: 'recommend',
    }
  },
  mounted() {
    this.$nextTick(() => {
      let scroll = new BScroll(this.$refs.section, {
        scrollY: true,
        click: true,
      })
    })
  },
}
</script>
<style scoped>
.recommend-style {
  background-color: #f5f5f5;
}
.section {
  height: 80vh;
  overflow: hidden;
}
</style>
