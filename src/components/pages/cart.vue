<template>
  <div>
    <top-title></top-title>
    <!-- <cart-list></cart-list> -->
    <div class="list">
      <!-- <ul class="con">
        <li
          class="clearfix"
          :class="[item.show ? 'move' : '']"
          v-for="(item, index) of list"
          :key="item.id"
          @touchstart="tstart($event, index)"
          @touchmove="tmove($event, index)"
        >
          <div class="check">
            <input
              type="checkbox"
              id="check"
              v-model="item.checked"
              @change="checkOne"
            />
          </div>
          <div class="pic"><img :src="item.img" alt="" /></div>
          <div class="text">
            <h3>{{ item.title }}</h3>
            <h4>
              规格：<span>{{ item.weight }}</span>
            </h4>
            <p>&yen;{{ item.price.toFixed(2) }}</p>
          </div>
          <div class="btn clearfix">
            <a href="javascript:;" @click="sub(index)">-</a
            ><input
              type="text"
              :value="item.num"
              :v-model="list[index].num"
            /><a href="javascript:;" @click="add(index)">+</a>
          </div>
          <div class="del" @click="del(index)">
            <a href="javascript:;" class="deb">删除</a>
          </div>
        </li>
      </ul> -->

      <div class="cartInfo" v-for="item in cartList" :key="item.id">
        <van-checkbox></van-checkbox>
        <van-swipe-cell>
          <van-card
            :num="item.num"
            :price="item.price.toFixed(2)"
            desc="描述信息"
            :title="item.goodsname"
            class="goods-card"
            :thumb="
              item.img
                ? $imgUrl + item.img
                : 'https://img.yzcdn.cn/vant/cat.jpeg'
            "
          />
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
      </div>

      <!-- <div class="sett">
        <div class="all">
          <label for="all">
            <input
              type="checkbox"
              id="all"
              v-model="checkAll"
              @change="checkedAll"
            />
            全选
          </label>
        </div>

        <div class="txt">
          <h3>
            总计：<span>{{ allPrice.toFixed(2) }}</span>
          </h3>
          <p>不含运费，已优惠&yen;0.00</p>
        </div>

        <div class="go">
          <router-link to="/confirm"
            ><a href="confirm.html">去结算({{ num }}件)</a></router-link
          >
        </div>
      </div> -->

      <van-submit-bar :price="3050" button-text="提交订单" @submit="goOrder">
        <van-checkbox>全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import topTitle from "@/components/content/common/topTitle";
import { getCartList, getCartDelete } from "../../util/axios";

export default {
  components: {
    topTitle,
  },
  data() {
    return {
      goodsNum: 1,
      cartList: [],
      userInfo: "",
      // checkAll: false,
      // clientX: 0,
      // list: [
      //   {
      //     id: 1,
      //     num: 1,
      //     title: "欧莱雅面霜",
      //     img: require("@/assets/images/cart/shop_4.jpg"),
      //     weight: "50g",
      //     price: 123.0,
      //     checked: false,
      //     show: false,
      //   },
      // ],
    };
  },
  mounted() {
    this.userInfo = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : "";
    this.cartListInfo();
  },
  methods: {
    cartListInfo() {
      getCartList({
        uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
      }).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.cartList = res.list;
        }
      });
    },
    // ----------------------------
    // checkedAll() {
    //   this.list.map((item) => (item.checked = this.checkAll));
    // },
    // checkOne() {
    //   this.checkAll = this.list.every((item) => item.checked);
    // },
    // add(i) {
    //   this.list[i].num >= 9 ? 9 : this.list[i].num++;
    // },
    // sub(i) {
    //   this.list[i].num <= 1 ? 1 : this.list[i].num--;
    // },
    // del(i) {
    //   this.list.splice(i, 1);
    // },
    // tstart(e, i) {
    //   let touch = e.changedTouches[0];
    //   this.clientX = touch.clientX;
    // },
    // tmove(e, i) {
    //   let touch = e.changedTouches[0];
    //   let nx = touch.clientX;
    //   let x = this.clientX - nx;
    //   if (x > 40) {
    //     this.list[i].show = true;
    //   } else if (x > -40) {
    //     this.list[i].show = false;
    //   }
    // },
  },
  computed: {
    // num() {
    //   let n = 0;
    //   this.list.forEach((item) => {
    //     if (item.checked) {
    //       n += item.num;
    //     }
    //   });
    //   return n;
    // },
    // allPrice() {
    //   let n = 0;
    //   this.list.forEach((item) => {
    //     if (item.checked) {
    //       n += item.price * item.num;
    //     }
    //   });
    //   return n;
    // },
  },
};
</script>

<style scoped>
.list {
  margin-top: 1.3rem;
}
.goods-card {
  margin: 0;
  background-color: #fafafa;
}

.delete-button {
  height: 100%;
}
.cartInfo {
  display: flex;
}
.van-card {
  width: 92vw;
}
.van-checkbox {
  flex: 1;
  padding-left: 1vw;
}
.van-submit-bar{
  bottom: 1.2rem;
}
.list .con {
  width: 100%;
  overflow: hidden;
  padding-bottom: 2.6rem;
  padding-top: 1.28rem;
}

.list .con li {
  width: 7.94rem;
  height: 1.72rem;
  padding-left: 0.24rem;
  box-shadow: 0 0 0.06rem 0.06rem #f6f6f6;
  margin-top: 0.26rem;
}

.list .con li .check {
  padding-top: 0.7rem;
  width: 0.34rem;
  float: left;
}

.list .con li .pic {
  margin: 0 0.36rem 0 0.43rem;
  float: left;
  padding-top: 0.38rem;
}

.list .con li .pic img {
  height: 1.02rem;
  width: auto;
}

.list .con li .text {
  width: 2.49rem;
  height: 1.53rem;
  float: left;
  padding-top: 0.06rem;
  transition: all 500ms;
}

.list .con li .text h3 {
  font: 0.26rem/0.55rem "微软雅黑";
  color: #333333;
}

.list .con li .text h4 {
  font: 0.23rem/0.53rem "微软雅黑";
  color: #676767;
}

.list .con li .text h4 span {
  font: 0.24rem/0.53rem Arial;
}

.list .con li .text p {
  font: 0.32rem/0.45rem Arial;
  color: #e33939;
}

.list .con li .btn {
  width: 2.12rem;
  height: 0.59rem;
  font: 0.26rem/0.57rem Arial;
  text-align: center;
  padding-right: 0.11rem;
  float: left;
  padding-top: 0.89rem;
}

.list .con li .btn a {
  float: left;
  display: block;
  width: 0.62rem;
  height: 0.57rem;
  border: 1px solid #454545;
  border-right: 0;
  border-top-left-radius: 0.04rem;
  border-bottom-left-radius: 0.04rem;
  color: #444444;
}

.list .con li .btn a:last-child {
  border: 1px solid #454545;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0.04rem;
  border-bottom-right-radius: 0.04rem;
  border-left: 0;
}

.list .con li .btn input {
  float: left;
  width: 0.79rem;
  height: 0.57rem;
  border: 1px solid #454545;
  text-align: center;
}

.list .con li .del {
  width: 0.98rem;
  height: 1.72rem;
  background-color: #e43a3d;
  float: right;
}

.list .con li .del .deb {
  display: block;
  width: 0.98rem;
  height: 1.72rem;
  font: 0.24rem/1.72rem "微软雅黑";
  color: #fff;
  text-align: center;
}
.list .move {
  transform: translateX(-0.98rem);
}
.list .sett {
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 1.21rem;
  left: 0;
}

.list .sett .all {
  padding: 0 0.24rem;
  font: 0.24rem/1.14rem "微软雅黑";
  color: #666666;
}

.list .sett .txt {
  flex: 1;
  text-align: right;
  padding-right: 0.38rem;
}

.list .sett .txt h3 {
  font: 0.3rem/0.46rem "微软雅黑";
  color: #333333;
  padding-top: 0.15rem;
}

.list .sett .txt h3 span {
  color: #e43a3b;
}

.list .sett .txt p {
  font: 0.2rem/0.36rem "微软雅黑";
  color: #a4a4a4;
}

.list .sett .go {
  width: 2.47rem;
  text-align: center;
}

.list .sett .go a {
  display: block;
  width: 2.47rem;
  height: 100%;
  background-color: #f26b11;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
}
</style>