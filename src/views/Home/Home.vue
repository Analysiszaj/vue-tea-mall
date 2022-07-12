<template>
  <div class="home">
    <Header></Header>
    <ly-tabs v-model="selectedId" activeColor="#b0352f">
      <ly-tab-item name="1" title="推荐" />
      <ly-tab-item name="2" title="金骏眉" />
      <ly-tab-item name="3" title="大红袍" />
      <ly-tab-item name="4" title="铁观音" />
      <ly-tab-item name="5" title="绿茶" />
      <ly-tab-item name="6" title="紫砂壶" />
      <ly-tab-item name="7" title="漳平水仙" />
      <ly-tab-item name="8" title="普洱" />
    </ly-tabs>
    <section>
      <swiper></swiper>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../../components/common/Tabbar.vue'
import Swiper from './components/Swiper.vue'
import Header from './components/Header.vue'
export default {
  name: 'home',
  components: { Tabbar, Header, Swiper },
  data() {
    return {
      selectedId: '1',
    }
  },
}
</script>
<style scoped></style>
