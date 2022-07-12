<template>
  <div class="icon-main">
    <div class="icon-items" v-for="(item, key) in iconsList" :key="key">
      <img :src="item.imgUrl" />
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconsList: [
        {
          id: 1,
          title: '自饮茶',
          imgUrl: './images/icon1.png',
        },
        {
          id: 2,
          title: '品牌茶',
          imgUrl: './images/icon2.png',
        },
        {
          id: 3,
          title: '茶具',
          imgUrl: './images/icon3.png',
        },
        {
          id: 4,
          title: '领福利',
          imgUrl: './images/icon4.png',
        },
        {
          id: 5,
          title: '官方验证',
          imgUrl: './images/icon5.png',
        },
      ],
    }
  },
}
</script>

<style scoped>
.icon-main {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 15px 0;
  background-color: #fff;
}
.icon-items {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon-items img {
  width: 1.0933rem;
  height: 1.0933rem;
}
.icon-items span {
  margin-top: 0.3rem;
  font-size: 0.4rem;
}
</style>
