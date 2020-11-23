<template>
  <div>
    <ul class="iMenu">
      <!-- <li v-for="item in list" :key="item.id">
        <a href="javascript:;">
          <img :src="item.img" alt="" />
          <p>{{item.name}}</p>
        </a>
      </li> -->
      <li>
        <a href="javascript:;">
          <img src="../../assets/images/index/indexicon1.jpg" alt="" />
          <p>限时抢购</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../../assets/images/index/indexicon2.jpg" alt="" />
          <p>积分商城</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../../assets/images/index/indexicon3.jpg" alt="" />
          <p>联系我们</p>
        </a>
      </li>
      <li>
        <router-link tag="span" to="/sort">
          <a href="javascript:;">
            <img src="../../assets/images/index/indexicon4.jpg" alt="" />
            <p>商品分类</p>
          </a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "限时抢购",
          img: require("../../assets/images/index/indexicon1.jpg"),
        },
        {
          id: 2,
          name: "积分商城",
          img: require("../../assets/images/index/indexicon2.jpg"),
        },
        {
          id: 3,
          name: "联系我们",
          img: require("../../assets/images/index/indexicon3.jpg"),
        },
        {
          id: 4,
          name: "商品分类",
          img: require("../../assets/images/index/indexicon4.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.iMenu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 1.79rem;
  width: auto;
  background-color: #fff;
}

.iMenu li {
  text-align: center;
}

.iMenu li a img {
  height: 0.62rem;
  width: auto;
}

.iMenu li a p {
  font: 0.28rem/0.69rem "微软雅黑";
  color: #5b5b5b;
}
</style>