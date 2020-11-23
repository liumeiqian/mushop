<template>
  <div>
    <top-title>
      <div slot="cont">
        <p class="title" style="background: #f26b11">商品详情</p>
      </div>
    </top-title>

    <!-- <detail-banner></detail-banner> -->
    <div class="head">
      <div class="banner">
        <img :src="goodsInfo.img ? $imgUrl + goodsInfo.img : ''" alt="" />
      </div>

      <div class="title">
        <h3>{{ goodsInfo.goodsname }}</h3>
        <h4>
          &yen;{{ goodsInfo.price }}
          <span>(此价格不与套装优惠同时享受)</span>
        </h4>
      </div>
    </div>

    <!-- <detail-type></detail-type> -->
    <div class="typeCon">
      <div class="type">
        <div class="pro">
          <h3>促销：<span>满减</span> <i>满2件9折；3件8折</i></h3>
          <img src="@/assets/images/detaail/arrow.jpg" alt="" />
        </div>

        <div class="num clearfix">
          <h3>购买数量</h3>
          <div class="btn clearfix">
            <!-- <a href="#">-</a><input type="text" value="1" /><a href="#">+</a> -->
            <van-stepper :max="5" v-model="value" />
          </div>
        </div>
        <div class="att">
          <h3>商品属性</h3>
          <p>
            {{ goodsInfo.specsname }}
            <!-- <a href="#">30g</a><a href="#">5g</a> -->
            <van-tag
              v-for="item in specsattr"
              :key="item"
              plain
              type="primary"
              >{{ item }}</van-tag
            >
          </p>
          <a href="javascript:;"><img src="@/assets/images/detaail/arrow.jpg" alt="" /></a>
        </div>
      </div>
    </div>

    <!-- <detail-info></detail-info> -->
    <div class="info">
      <div class="det">
        <h3>商品详情</h3>
        <h3 v-html="goodsInfo.description"></h3>
        <!-- <img src="@/assets/images/detaail/picDetail_3.jpg" alt="" />
        <img src="@/assets/images/detaail/picDetail_4.jpg" alt="" />
        <img src="@/assets/images/detaail/picDetail_5.jpg" alt="" />
        <img src="@/assets/images/detaail/picDetail_6.jpg" alt="" />
        <img src="@/assets/images/detaail/picDetail_7.jpg" alt="" /> -->
      </div>
    </div>

    <!-- <detail-ass></detail-ass> -->
    <div class="assCon">
      <div class="ass">
        <h3>商品评价</h3>
        <div class="con">
          <p class="name">1235668fg</p>
          <h4>效果很好，物流到位，下次继续来！</h4>
          <div class="pic">
            <img src="@/assets/images/detaail/picDetail_9.jpg" alt="" />
            <img src="@/assets/images/detaail/picDetail_9.jpg" alt="" />
            <img src="@/assets/images/detaail/picDetail_9.jpg" alt="" />
          </div>
          <p class="time">2020-01-03</p>
        </div>
        <p class="more clearfix">共1000+条评论<a href="javascript:;">查看更多></a></p>
      </div>
    </div>

    <!-- <detail-footer></detail-footer> -->
    <div class="foote">
      <footer class="foot">
        <a href="javascript:;">
          <div class="icon">
            <img src="@/assets/images/detaail/iconCart.jpg" alt="" />
            <p>2</p>
          </div>
          <p>购物车</p>
        </a>
        <a href="javascript:;" @click="goCart">
          <p>加入购物车</p>
        </a>
        <a href="javascript:;">
          <p>立即购买</p>
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
import { getGoodsInfo, cartAdd } from "../../util/axios";
import { Toast } from "vant";

import topTitle from "@/components/content/common/topTitle";

export default {
  components: {
    topTitle,
  },
  data() {
    return {
      goodsInfo: [],
      value: 1,
      specsattr: [],
    };
  },
  mounted() {
    getGoodsInfo({
      id: this.$route.query.id,
    }).then((res) => {
      if (res.code == 200) {
        this.goodsInfo = res.list[0];
        this.specsattr = this.goodsInfo.specsattr
          ? this.goodsInfo.specsattr.split(",")
          : [];
      }
    });
  },
  methods: {
    goCart() {
      if (sessionStorage.getItem("userInfo")) {
        cartAdd({
          uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
          goodsid: this.goodsInfo.id,
          num: this.value,
        }).then((res) => {
          Toast.success(res.msg);
          this.$router.push({
            path: "/cart",
            query: {
              id: JSON.parse(sessionStorage.getItem("userInfo")).uid,
            },
          });
        });
      }else{
        Toast.fail('当前为登录，请先登录')
        this.$router.push('/login')
      }
    },
  },
};
</script>

<style scoped>
.head .banner img {
  display: block;
  width: 100%;
  height: 4rem;
  margin-top: 1.2rem;
}

.head .title {
  padding: 0.2rem 0.42rem 0.07rem 0.36rem;
  background-color: #fff;
}

.head .title h3 {
  font: 0.3rem/0.49rem "微软雅黑";
  color: #333333;
}

.head .title h4 {
  font: 0.3rem/0.79rem Arial "微软雅黑";
  color: #e3393a;
}

.head .title h4 span {
  font: 0.22rem/0.79rem "微软雅黑";
  color: #878787;
}
/*  */
.typeCon .type {
  background-color: #f1f1f1;
  padding-top: 0.17rem;
  position: relative;
}

.typeCon .type .pro {
  height: 0.98rem;
  padding: 0 0.23rem;
  border-bottom: 1px solid #f1f1f1;
  background-color: #fff;
}

.typeCon .type .pro h3 {
  font: 0.26rem/0.98rem "微软雅黑";
  color: #454545;
}

.typeCon .type .pro h3 span {
  display: inline-block;
  width: 0.64rem;
  height: 0.35rem;
  border: 1px solid #b0281a;
  border-radius: 0.04rem;
  font: 0.2rem/0.35rem "微软雅黑";
  color: #b0281a;
  text-align: center;
}

.typeCon .type .pro h3 i {
  font: 0.24rem/0.98rem "微软雅黑";
  color: #454545;
}

.typeCon .type .pro img {
  width: 0.35rem;
  height: 0.21rem;
  position: absolute;
  right: 0.2rem;
  top: 0.4rem;
}

.typeCon .type .num {
  height: 1.08rem;
  padding: 0 0.23rem;
  border-bottom: 1px solid #f1f1f1;
  background-color: #fff;
}

.typeCon .type .num h3 {
  float: left;
  font: 0.26rem/1.08rem "微软雅黑";
  color: #444444;
}

.typeCon .type .num .btn {
  float: right;
  width: auto;
  height: 0.6rem;
  font: 0.26rem/0.6rem "微软雅黑";
  color: #444444;
  text-align: center;
  padding-top: 0.25rem;
}

.typeCon .type .num .btn a {
  float: left;
  display: block;
  width: 0.62rem;
  height: 0.57rem;
  border: 0.01rem solid #454545;
  border-right: 0;
  border-top-left-radius: 0.04rem;
  border-bottom-left-radius: 0.04rem;
}

.typeCon .type .num .btn a:last-child {
  border: 0.01rem solid #454545;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0.04rem;
  border-bottom-right-radius: 0.04rem;
  border-left: 0;
}

.typeCon .type .num .btn input {
  float: left;
  width: 0.79rem;
  height: 0.57rem;
  border: 0.01rem solid #454545;
  text-align: center;
}

.typeCon .type .att {
  height: 1.9rem;
  padding: 0 0.23rem;
  position: relative;
  background-color: #fff;
}

.typeCon .type .att h3 {
  font: 0.26rem/0.8rem "微软雅黑";
  color: #444444;
  margin-top: 0.13rem;
}

.typeCon .type .att p {
  font: 0.26rem/0.59rem "微软雅黑";
  color: #b5b5b5;
}

.typeCon .type .att p a {
  display: inline-block;
  padding: 0 0.5rem;
  background-color: #e43a3d;
  font: 0.28rem/0.59rem "微软雅黑";
  color: #fff;
  margin-left: 0.7rem;
  border-radius: 0.03rem;
}

.typeCon .type .att p a:last-child {
  background-color: #e1e1e3;
  margin-left: 0.15rem;
}

.typeCon .type .att > a {
  display: block;
  width: 0.35rem;
  height: 0.21rem;
  position: absolute;
  right: 0.21rem;
  top: 0.42rem;
}

.typeCon .type .att > a img {
  width: 0.35rem;
  height: 0.21rem;
}

/*  */
.info .det {
  background-color: #f1f1f1;
  padding: 0.21rem 0;
}

.info .det h3 {
  font: 0.3rem/1rem "微软雅黑";
  color: #444444;
  padding-left: 0.25rem;
  background-color: #fff;
}

.info .det img {
  width: 100%;
  height: auto;
}
/*  */
.assCon .ass {
  padding: 0 0.23rem;
  background-color: #fff;
  margin-top: 0.3rem;
  padding-bottom: 1.14rem;
}

.assCon .ass h3 {
  font: 0.3rem/0.93rem "微软雅黑";
  color: #444444;
  border-bottom: 1px solid #f1f1f1;
}

.assCon .ass .con {
  border-bottom: 1px solid #f1f1f1;
}

.assCon .ass .con p {
  font: 0.26rem/0.56rem Arial;
  color: #666666;
}

.assCon .ass .con h4 {
  font: 0.26rem/0.53rem Arial;
  color: #454545;
}

.assCon .ass .con .pic {
  margin-top: 0.2rem;
  overflow: hidden;
  width: 100%;
}

.assCon .ass .con .pic img {
  float: left;
  margin: 0 0.09rem;
  width: 1.6rem;
  height: 1.51rem;
}

.assCon .ass .con .time {
  font: 0.26rem/0.77rem Arial;
  color: #999999;
  margin-top: 0.08rem;
}

.assCon .ass .more {
  height: 0.91rem;
  font: 0.24rem/0.91rem Arial;
  color: #999999;
}

.assCon .ass .more a {
  float: right;
  display: block;
  font: 0.24rem/0.91rem "微软雅黑";
  color: #999999;
}
/*  */

.foote .foot {
  width: 100%;
  height: 1.14rem;
  background-color: #fff;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
}

.foote .foot a {
  display: block;
  text-align: center;
}

.foote .foot a:nth-child(1) {
  width: 1.72rem;
  box-sizing: border-box;
  border-top: 1px solid #f1f1f1;
  font: 0.18rem/0.43rem "微软雅黑";
  color: #878787;
}

.foote .foot a:nth-child(1) .icon {
  padding-top: 0.26rem;
  position: relative;
}

.foote .foot a:nth-child(1) .icon img {
  width: auto;
  height: 0.45rem;
}

.foote .foot a:nth-child(1) .icon p {
  width: 0.24rem;
  height: 0.24rem;
  background-color: #e33b3b;
  color: #fff;
  font: 0.19rem/0.24rem Arial;
  border-radius: 50%;
  position: absolute;
  top: 0.24rem;
  right: 0.58rem;
}

.foote .foot a:nth-child(2) {
  flex: 1;
  background-color: #f26b11;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
}

.foote .foot a:nth-child(3) {
  flex: 1;
  background-color: #e43a3d;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
}
</style>