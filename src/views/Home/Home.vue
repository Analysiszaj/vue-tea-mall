<template>
  <div class="home">
    <Header></Header>
    <ly-tabs v-model="value" activeColor="#b0352f">
      <ly-tab-item name="1" title="推荐" />
      <ly-tab-item name="2" title="金骏眉" />
      <ly-tab-item name="3" title="大红袍" />
      <ly-tab-item name="4" title="铁观音" />
      <ly-tab-item name="5" title="绿茶" />
      <ly-tab-item name="6" title="紫砂壶" />
    </ly-tabs>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../../components/common/Tabbar.vue'
import Header from './components/Header.vue'
export default {
  name: 'home',
  components: { Tabbar, Header },
  data() {
    return {
      value: '1',
    }
  },
}
</script>
<style scoped></style>
