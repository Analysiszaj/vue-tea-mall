<template>
  <div class="header">
    <a href="#" class="left">
      <i class="iconfont"></i>
    </a>
    <div class="search">
      <input type="text" placeholder="搜索您喜欢的..." />
    </div>
    <a href="#" class="right">
      <i class="iconfont"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {}
  },
}
</script>

<style scoped>
.header {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 1.1733rem;
  width: 100%;
  background-color: #b0352f;
}
.header .left {
  width: 2.2667rem;
  height: 100%;
  transform: skewX(10deg);
}
.header .left i {
  font-size: 1.7333rem;
  line-height: 1.1733rem;
  color: white;
}

.header .search {
  flex: 1;
  display: flex;
  align-items: center;
  border-radius: 0.8rem;
  /* width: 100%; */
  height: 0.8rem;
  font-size: 0.3733rem;
  padding-left: 0.8rem;
  border: 0;
  background-color: white;
  background: url('../../assets/images/search.png') 12px center no-repeat #fff;
  background-size: 0.2667rem;
}
.header .search input {
  border: none;
  outline: none;
}
.header .right {
  width: 1.1733rem;
  height: 1.1733rem;
  text-align: center;
  color: #fff;
  transform: skewX(10deg);
  margin-right: 0.1067rem;
}
.header .right i {
  line-height: 1.1733rem;
  font-size: 0.64rem;
}
</style>
