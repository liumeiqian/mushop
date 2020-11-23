<template>
  <div>
    <div class="com">
      <!-- tab标签页 -->
      <van-tabs type="card">
        <van-tab title="发现新品">
          <van-card
            v-for="item in newsList"
            :key="item.id"
            num="2"
            :price="item.price.toFixed(2)"
            desc="描述信息"
            :title="item.goodsname"
            :thumb="item.img ? $imgUrl + item.img : ''"
          />
        </van-tab>
        <van-tab title="热门推荐">
          <van-card
            v-for="item in hotsList"
            :key="item.id"
            num="2"
            :price="item.price.toFixed(2)"
            desc="描述信息"
            :title="item.goodsname"
            :thumb="item.img ? $imgUrl + item.img : ''"
          />
        </van-tab>
        <van-tab title="全部商品">
          <van-card
            v-for="item in goodsList"
            :key="item.id"
            num="2"
            :price="item.price.toFixed(2)"
            desc="描述信息"
            :title="item.goodsname"
            :thumb="item.img ? $imgUrl + item.img : ''"
          />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { getIndexGoods } from "../../util/axios";
export default {
  data() {
    return {
      newsList: [],
      hotsList: [],
      goodsList: [],
    };
  },
  mounted() {
    this.getIndexGoodsList();
  },
  methods: {
    getIndexGoodsList() {
      getIndexGoods().then((res) => {
        if (res.code == 200) {
          console.log(res, "aaa");
          this.newsList = res.list[0].content;
          this.hotsList = res.list[1].content;
          this.goodsList = res.list[2].content;
        }
      });
    },
  },
};
</script>

<style scoped>
.com {
  background-color: #fff;
  margin-top: 0.32rem;
  padding: 0.2rem 0.2rem 1.21rem;
}

.com .tiBar {
  display: flex;
  margin-bottom: 0.32rem;
}

.com .tiBar li {
  flex: 1px;
  text-align: center;
  height: 0.68rem;
  border: 1px solid #e4e4e4;
  border-right: 0;
  font: 0.28rem/0.68rem "微软雅黑";
  color: #0e0e0e;
}

.com .tiBar li:last-child {
  border-right: 1px solid #e4e4e4;
}

.topBarshow {
  background-color: #f26b11;
  border-color: #f26b11;
  color: #fff !important;
}

.com .list li {
  height: 2.68rem;
  padding-top: 0.31rem;
  box-shadow: 0 0 0.06rem 0.06rem #f6f6f6;
  margin-bottom: 0.34rem;
}

.com .list li .pic {
  height: 2.44rem;
  width: 2.15rem;
  padding-top: 0.24rem;
  padding-left: 0.37rem;
  margin-right: 0.51rem;
}

.com .list li .pic img {
  height: auto;
  width: 2.15rem;
}

.com .list li .text h5 {
  font: 0.3rem/0.57rem "微软雅黑";
  color: #222222;
}

.com .list li .text p {
  font: 0.18rem/0.58rem "微软雅黑";
  color: #909090;
}

.com .list li .text .price {
  font: 0.2rem/0.52rem "微软雅黑";
  color: #ee3442;
}

.com .list li .text .price span {
  font: 0.24rem/0.52rem "微软雅黑";
}

.com .list li .text a {
  display: block;
  width: 1.64rem;
  height: 0.52rem;
  background-color: #f26b11;
  font: 0.22rem/0.52rem "微软雅黑";
  color: #fff;
  text-align: center;
  border-radius: 0.04rem;
}
</style>