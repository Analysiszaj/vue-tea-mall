<template>
  <div class="tabbar">
    <ul>
      <li v-for="(item, index) in routerList" :key="index" @click="switchTab(item.path)">
        <img :src="isSelect(item.path) ? item.selected : item.active" :alt="item.title" />
        <span :style="isSelect(item.path) ? 'color: red' : ''">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data() {
    return {
      routerList: [
        {
          title: '首页',
          path: '/home',
          active: './images/home.png',
          selected: './images/home-select.png',
        },
        {
          title: '分类',
          path: '/List',
          active: './images/list.png',
          selected: './images/list-select.png',
        },
        {
          title: '购物车',
          path: '/Cart',
          active: './images/cart.png',
          selected: './images/cart-select.png',
        },
        {
          title: '我的',
          path: '/My',
          active: './images/people.png',
          selected: './images/people-select.png',
        },
      ],
    }
  },
  methods: {
    // Tabbar页面切换
    switchTab(path) {
      // 重复点击
      if (this.$route.path === path) return
      this.$router.replace(path)
    },
    // 选中页面判断
    isSelect(path) {
      return this.$route.path.includes(path)
    },
  },
}
</script>

<style scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 1.6rem;
  background: #fff;
}
.tabbar ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
}
.tabbar ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tabbar ul li img {
  width: 0.8267rem;
  height: 0.8267rem;
}
.tabbar ul li span {
  font-size: 0.4267rem;
}
</style>
