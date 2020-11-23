<template>
  <div>
    <ul class="con">
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
          ><input type="text" :value="item.num" :v-model="list[index].num" /><a
            href="javascript:;"
            @click="add(index)"
            >+</a
          >
        </div>
        <div class="del" @click="del(index)">
          <a href="javascript:;" class="deb">删除</a>
        </div>
      </li>
    </ul>

    <div class="sett">
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
        <router-link to="/confirm"><a href="confirm.html">去结算({{ num }}件)</a></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkAll: false,
      clientX: 0,
      list: [
        {
          id: 1,
          num: 1,
          title: "欧莱雅面霜",
          img: require("@/assets/images/cart/shop_4.jpg"),
          weight: "50g",
          price: 123.0,
          checked: false,
          show: false,
        },
        {
          id: 2,
          num: 1,
          title: "欧莱雅面霜",
          img: require("@/assets/images/cart/shop_4.jpg"),
          weight: "50g",
          price: 123.0,
          checked: false,
          show: false,
        },
        {
          id: 3,
          num: 1,
          title: "欧莱雅面霜",
          img: require("@/assets/images/cart/shop_4.jpg"),
          weight: "50g",
          price: 123.0,
          checked: false,
          show: false,
        },
        {
          id: 4,
          num: 1,
          title: "欧莱雅面霜",
          img: require("@/assets/images/cart/shop_4.jpg"),
          weight: "50g",
          price: 123.0,
          checked: false,
          show: false,
        },
        {
          id: 5,
          num: 1,
          title: "欧莱雅面霜",
          img: require("@/assets/images/cart/shop_4.jpg"),
          weight: "50g",
          price: 123.0,
          checked: false,
          show: false,
        },
      ],
    };
  },
  methods: {
    checkedAll() {
      this.list.map((item) => (item.checked = this.checkAll));
    },
    checkOne() {
      this.checkAll = this.list.every((item) => item.checked);
    },
    add(i) {
      this.list[i].num >= 9 ? 9 : this.list[i].num++;
    },
    sub(i) {
      this.list[i].num <= 1 ? 1 : this.list[i].num--;
    },
    del(i) {
      this.list.splice(i, 1);
    },
    tstart(e, i) {
      let touch = e.changedTouches[0];
      this.clientX = touch.clientX;
    },
    tmove(e, i) {
      let touch = e.changedTouches[0];
      let nx = touch.clientX;
      let x = this.clientX - nx;
      if (x > 40) {
        this.list[i].show = true;
      } else if (x > -40) {
        this.list[i].show = false;
      }
    },
  },
  computed: {
    num() {
      let n = 0;
      this.list.forEach((item) => {
        if (item.checked) {
          n += item.num;
        }
      });
      return n;
    },
    allPrice() {
      let n = 0;
      this.list.forEach((item) => {
        if (item.checked) {
          n += item.price * item.num;
        }
      });
      return n;
    },
  },
};
</script>

<style scoped>
.con {
  width: 100%;
  overflow: hidden;
  padding-bottom: 2.6rem;
  padding-top: 1.28rem;
}

.con li {
  width: 7.94rem;
  height: 1.72rem;
  padding-left: 0.24rem;
  box-shadow: 0 0 0.06rem 0.06rem #f6f6f6;
  margin-top: 0.26rem;
}

.con li .check {
  padding-top: 0.7rem;
  width: 0.34rem;
  float: left;
}

.con li .pic {
  margin: 0 0.36rem 0 0.43rem;
  float: left;
  padding-top: 0.38rem;
}

.con li .pic img {
  height: 1.02rem;
  width: auto;
}

.con li .text {
  width: 2.49rem;
  height: 1.53rem;
  float: left;
  padding-top: 0.06rem;
  transition: all 500ms;
}

.con li .text h3 {
  font: 0.26rem/0.55rem "微软雅黑";
  color: #333333;
}

.con li .text h4 {
  font: 0.23rem/0.53rem "微软雅黑";
  color: #676767;
}

.con li .text h4 span {
  font: 0.24rem/0.53rem Arial;
}

.con li .text p {
  font: 0.32rem/0.45rem Arial;
  color: #e33939;
}

.con li .btn {
  width: 2.12rem;
  height: 0.59rem;
  font: 0.26rem/0.57rem Arial;
  text-align: center;
  padding-right: 0.11rem;
  float: left;
  padding-top: 0.89rem;
}

.con li .btn a {
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

.con li .btn a:last-child {
  border: 1px solid #454545;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0.04rem;
  border-bottom-right-radius: 0.04rem;
  border-left: 0;
}

.con li .btn input {
  float: left;
  width: 0.79rem;
  height: 0.57rem;
  border: 1px solid #454545;
  text-align: center;
}

.con li .del {
  width: 0.98rem;
  height: 1.72rem;
  background-color: #e43a3d;
  float: right;
}

.con li .del .deb {
  display: block;
  width: 0.98rem;
  height: 1.72rem;
  font: 0.24rem/1.72rem "微软雅黑";
  color: #fff;
  text-align: center;
}
.move {
  transform: translateX(-0.98rem);
}
.sett {
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 1.21rem;
  left: 0;
}

.sett .all {
  padding: 0 0.24rem;
  font: 0.24rem/1.14rem "微软雅黑";
  color: #666666;
}

.sett .txt {
  flex: 1;
  text-align: right;
  padding-right: 0.38rem;
}

.sett .txt h3 {
  font: 0.3rem/0.46rem "微软雅黑";
  color: #333333;
  padding-top: 0.15rem;
}

.sett .txt h3 span {
  color: #e43a3b;
}

.sett .txt p {
  font: 0.2rem/0.36rem "微软雅黑";
  color: #a4a4a4;
}

.sett .go {
  width: 2.47rem;
  text-align: center;
}

.sett .go a {
  display: block;
  width: 2.47rem;
  height: 100%;
  background-color: #f26b11;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
}
</style>