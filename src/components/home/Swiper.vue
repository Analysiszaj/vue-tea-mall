<template>
  <div class="swipe">
    <van-swipe class="swiper-main" :autoplay="3000" indicator-color="#b0352f">
      <van-swipe-item v-for="(item, key) in swipeList" :key="key">
        <img :src="item.imgUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipeList: [
        {
          id: 1,
          imgUrl: './images/swipe1.jpeg',
        },
        {
          id: 2,
          imgUrl: './images/swipe2.jpeg',
        },
        {
          id: 3,
          imgUrl: './images/swipe3.jpeg',
        },
      ],
    }
  },
}
</script>

<style scoped>
.swiper-main {
  width: 100%;
  height: 4.4rem;
}
.swiper-main img {
  width: 100%;
  height: 4.4rem;
}
::v-deep .van-swipe__indicator {
  background-color: white;
  opacity: 1;
}
</style>
