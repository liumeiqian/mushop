<template>
  <div>
    <div class="mer">
      <div>
        <img src="@/assets/images/main/iconMine_1.jpg" alt="" />
        <p>全部订单</p>
      </div>
      <div>
        <img src="@/assets/images/main/iconMine_2.jpg" alt="" />
        <p>待付款</p>
      </div>
      <div>
        <img src="@/assets/images/main/iconMine_3.jpg" alt="" />
        <p>待收货</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mer {
  height: 1.08rem;
  width: auto;
  background-color: #fff;
  padding: 0 0.56rem;
  padding-top: 0.34rem;
  display: flex;
  justify-content: space-between;
}

.mer div {
  text-align: center;
}

.mer div img {
  width: 0.34rem;
  height: 0.34rem;
}

.mer div p {
  font: 0.24rem/0.6rem "微软雅黑";
  color: #676767;
}

.mer div:nth-child(2) img {
  width: 0.38rem;
  height: 0.3rem;
}

.mer div:nth-child(3) img {
  width: 0.34rem;
  height: 0.29rem;
}
</style>