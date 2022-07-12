<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
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
          imgUrl: './images/swiper1.jpeg',
        },
        {
          id: 2,
          imgUrl: './images/swiper2.jpeg',
        },
        {
          id: 3,
          imgUrl: './images/swiper3.jpeg',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style scoped></style>
