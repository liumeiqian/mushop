<template>
  <div>
    <div class="head">
      <div class="back">
        <img src="@/assets/images/arrowLeft.jpg" @click="$router.back()" alt="" />
      </div>
      <p class="title">
        <img src="@/assets/images/logo.jpg" alt="" />
      </p>
      <div class="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="search">
      <a href="#"><i></i>搜索商品</a>
    </div>

    <search-list></search-list>
  </div>
</template>

<script>
import topTitle from "@/components/content/common/topTitle";
import searchList from '@/components/content/home/searchList'

export default {
  components: {
    topTitle,
    searchList
  },
};
</script>

<style scoped>
.back {
  width: 0.64rem;
}
.back img {
  width: 0.24rem;
}
.menu {
  width: 0.64rem;
  display: flex;
  justify-content: space-between;
  font: 0.32rem "微软雅黑" !important;
  color: #fff;
}

.menu span {
  display: inline-block;
  text-align: right;
  width: 0.12rem;
  height: 0.12rem;
  background-color: #000;
  border-radius: 50%;
}
.head {
  height: 0.85rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.43rem 0.29rem 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 92vw;
  z-index: 1000;
}

.title {
  text-align: center;
  flex: 1;
  font: 0.35rem "微软雅黑";
  color: #fff;
}
.title img {
  width: auto;
  height: 0.29rem;
  padding-top: 0.1rem;
}

.search {
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 0.24rem;
}

.search a {
  display: block;
  width: 6.23rem;
  height: 0.77rem;
  background-color: #f26b11;
  border-radius: 0.36rem;
  text-align: center;
  font: 0.26rem/0.77rem "微软雅黑";
  color: #fff;
  margin: 0 auto;
}

.search a i {
  display: inline-block;
  height: 0.27rem;
  width: 0.26rem;
  background: url(../../assets/images/list/search.jpg) no-repeat 0 0;
  background-size: 0.26rem 0.27rem;
  margin-right: 0.2rem;
  vertical-align: middle;
}
</style>