<template>
  <div>
    <div class="footBox">
      <router-link active-class="active" to="/home">
        <img src="../../assets/images/iconIndex2.jpg" alt="" />
        <p>首页</p>
      </router-link>
      <router-link active-class="active" to="/cart">
        <img src="../../assets/images/iconCart.jpg" alt="" />
        <p>购物车</p>
      </router-link>
      <router-link active-class="active" to="/main">
        <img src="../../assets/images/iconMine.jpg" alt="" />
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
};
</script>

<style scopde>
.footBox {
  width: 100%;
  height: 1.21rem;
  background-color: #fff;
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #ebebeb;
  position: fixed;
  left: 0;
  bottom: 0;
}

.footBox a {
  display: block;
  font: 0.2rem/0.2rem "微软雅黑";
  color: #878787;
  text-align: center;
}

.footBox a img {
  height: 0.53rem;
  width: auto;
  margin-bottom: 0.11rem;
}

.footBox .active {
  color: #f8700a;
}
</style>