<template>
  <div>
    <div class="head">
      <slot name="back">
        <div class="back">
          <img
            src="../../../assets/images/arrowLeft (2).jpg"
            alt="back"
            @click="$router.back()"
          />
        </div>
      </slot>
      <slot name="cont"><p class="title">购物车</p></slot>
      <slot name="menu">
        <div class="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.back {
  width: 0.64rem;
}
.back img {
  width: 0.24rem;
}
.menu {
  width: 0.64rem;
  display: flex;
  justify-content: space-between;
  font: 0.32rem "微软雅黑" !important;
  color: #fff;
}

.menu span {
  display: inline-block;
  text-align: right;
  width: 0.12rem;
  height: 0.12rem;
  background-color: #fff;
  border-radius: 50%;
}
.head {
  height: 0.85rem;
  background-color: #f26b11;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.43rem 0.29rem 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 92vw;
  z-index: 1000;
}

.title {
  text-align: center;
  flex: 1;
  font: 0.35rem "微软雅黑";
  color: #fff;
}

</style>