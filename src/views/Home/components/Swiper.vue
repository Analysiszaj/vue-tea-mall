<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in swiperList" :key="index">
        <img :src="item.imgurl" alt="" />
      </swiper-slide>
    </swiper>
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        speed: 1000,
      },
      swiperList: [
        {
          id: 1,
          imgUrl: './public/images/swipe1.jpeg',
        },
        {
          id: 2,
          imgUrl: './public/images/swipe1.jpeg',
        },
        {
          id: 3,
          imgUrl: './public/images/swipe1.jpeg',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style scoped></style>
