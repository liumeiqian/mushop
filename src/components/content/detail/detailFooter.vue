<template>
  <div>
    <footer class="foot">
      <a href="cart.html">
        <div class="icon">
          <img src="@/assets/images/detaail/iconCart.jpg" alt="" />
          <p>2</p>
        </div>
        <p>购物车</p>
      </a>
      <a href="#">
        <p>加入购物车</p>
      </a>
      <a href="confirm.html">
        <p>立即购买</p>
      </a>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.foot {
  width: 100%;
  height: 1.14rem;
  background-color: #fff;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
}

.foot a {
  display: block;
  text-align: center;
}

.foot a:nth-child(1) {
  width: 1.72rem;
  box-sizing: border-box;
  border-top: 1px solid #f1f1f1;
  font: 0.18rem/0.43rem "微软雅黑";
  color: #878787;
}

.foot a:nth-child(1) .icon {
  padding-top: 0.26rem;
  position: relative;
}

.foot a:nth-child(1) .icon img {
  width: auto;
  height: 0.45rem;
}

.foot a:nth-child(1) .icon p {
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

.foot a:nth-child(2) {
  flex: 1;
  background-color: #f26b11;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
}

.foot a:nth-child(3) {
  flex: 1;
  background-color: #e43a3d;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
}
</style>