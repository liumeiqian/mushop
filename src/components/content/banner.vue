<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item of bannerList" :key="item.id">
        <img class="img" :src="item.img ? $imgUrl + item.img : ''" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getBanner } from "../../util/axios";
export default {
  data() {
    return {
      bannerList: []
    }
  },
  mounted() {
    this.getBannerList();
  },
  methods: {
    getBannerList() {
      getBanner().then((res) => {
        if (res.code == 200) {
          this.bannerList = res.list;
        }
      });
    },
  },
};
</script>

<style scoped>
.img {
  width: 100%;
  height: 4rem;
}
</style>