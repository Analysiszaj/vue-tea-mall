<template>
  <div class="recommend">
    <div class="title">
      <h1>火爆推荐</h1>
    </div>
    <ul>
      <li v-for="(item, key) in recommendList" :key="key">
        <h2>
          <img :src="item.imgUrl" alt="" />
        </h2>
        <div class="item-content">
          <h3>{{ item.name }}</h3>
          <p>{{ item.content }}</p>
          <div class="price">
            <span>￥</span>
            <b>{{ item.price }}</b>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendList: [
        {
          id: 1,
          name: '铁观音2號250g',
          content: '核心产区滋味正',
          price: '128',
          imgUrl: './images/recommend1.jpeg',
        },
        {
          id: 2,
          name: '正山小种3號150g',
          content: '难以忘怀的桂花香',
          price: '99',
          imgUrl: './images/recommend1.jpeg',
        },
        {
          id: 3,
          name: '黑檀镂空六君子',
          content: '给生活一点精致的仪式感',
          price: '45',
          imgUrl: './images/recommend1.jpeg',
        },
      ],
    }
  },
}
</script>

<style scoped>
.title h1 {
  text-align: center;
  padding: 0.2667rem 0;
}
.title ::after {
  content: '';
  display: block;
  width: 0.2667rem;
  height: 0.2667rem;
  border-radius: 0.1333rem;
  background: red;
}
.recommend {
  margin-top: 15px;
  background-color: #fff;
}
.recommend h1 {
  font-size: 0.5rem;
}
.recommend ul li {
  position: relative;
  display: flex;
  justify-content: center;
}
.recommend ul li img {
  width: 9.6rem;
  height: 3.84rem;
  border-radius: 12px;
}
.recommend ul li > div {
  position: absolute;
  right: 0;
  top: 0;
}
.item-content {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 3.84rem;
  width: 5rem;
  padding: 0 0.2667rem;
  font-size: 0.4267rem;
}
</style>
