<template>
  <div>
    <!-- 商品列表 -->
    <van-card
      v-for="item in goodsList"
      :key="item.id"
      :price="item.price.toFixed(2)"
      desc="好东西"
      :title="item.goodsname"
      :thumb="item.img ? $imgUrl + item.img : ''"
      @click="goDetail(item.id)"
    />
  </div>
</template>

<script>
import { getGoods } from "../../../util/axios";
export default {
  data() {
    return {
      goodsList: [],
    };
  },
  mounted() {
    getGoods({
      id: this.$route.query.id,
    }).then((res) => {
      if (res.code == 200) {
        this.goodsList = res.list;
      }
    });
  },
  methods: {
    goDetail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id,
        },
      });
    },
  },
};
</script>

<style scoped>
.list {
  padding: 0 0.24rem;
}

.list li {
  width: 100%;
  display: flex;
  padding-top: 0.26rem;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid #d1d1d1;
}

.list li .pic {
  height: 1.6rem;
  width: auto;
  display: inline-block;
  margin-right: 0.4rem;
}

.list li .pic img {
  width: auto;
  height: 1.6rem;
}

.list li .text h3 {
  font: 0.26rem/0.36rem "微软雅黑";
  color: #333;
}

.list li .text h4 {
  font: 0.26rem/0.56rem "微软雅黑";
  color: #e5393c;
}

.list li .text h4 span {
  font: 0.3rem/0.56rem Arial;
}

.list li .text p {
  font: 0.26rem/0.37rem Arial;
  color: #9a9a9a;
}

.list li .text p span {
  font: 0.24rem/0.37rem "微软雅黑";
}
</style>