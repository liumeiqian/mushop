<template>
  <div>
    <div class="tit">
      <div class="name">
        <p>收货人：YouSu</p>
        <p>1000000</p>
      </div>
      <div class="address clearfix">
        <p>收货地址：</p>
        <i>北京市海定区隐泉路清林苑6号楼中公优就业总部3层</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tit {
  width: auto;
  height: 1.37rem;
  background-color: #fff;
  padding: 1.31rem 0.48rem 0 0.26rem;
}

.tit .name {
  font: 0.24rem/0.47rem "微软雅黑";
  color: #575757;
  display: flex;
  justify-content: space-between;
}

.tit .address {
  font: 0.24rem/0.3rem "微软雅黑";
  color: #575757;
  margin-top: 0.09rem;
}

.tit .address p {
  float: left;
  display: block;
}

.tit .address i {
  float: left;
  display: block;
  width: 5.2rem;
}
</style>