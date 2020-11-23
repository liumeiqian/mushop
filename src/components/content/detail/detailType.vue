<template>
  <div>
    <div class="type">
      <div class="pro">
        <h3>促销：<span>满减</span> <i>满2件9折；3件8折</i></h3>
        <img src="@/assets/images/detaail/arrow.jpg" alt="" />
      </div>

      <div class="num clearfix">
        <h3>购买数量</h3>
        <div class="btn clearfix">
          <a href="#">-</a><input type="text" value="1" /><a href="#">+</a>
        </div>
      </div>

      <div class="att">
        <h3>商品属性</h3>
        <p>规格<a href="#">30g</a><a href="#">5g</a></p>
        <a href="#"><img src="@/assets/images/detaail/arrow.jpg" alt="" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.type {
  background-color: #f1f1f1;
  padding-top: 0.17rem;
  position: relative;
}

.type .pro {
  height: 0.98rem;
  padding: 0 0.23rem;
  border-bottom: 1px solid #f1f1f1;
  background-color: #fff;
}

.type .pro h3 {
  font: 0.26rem/0.98rem "微软雅黑";
  color: #454545;
}

.type .pro h3 span {
  display: inline-block;
  width: 0.64rem;
  height: 0.35rem;
  border: 1px solid #b0281a;
  border-radius: 0.04rem;
  font: 0.2rem/0.35rem "微软雅黑";
  color: #b0281a;
  text-align: center;
}

.type .pro h3 i {
  font: 0.24rem/0.98rem "微软雅黑";
  color: #454545;
}

.type .pro img {
  width: 0.35rem;
  height: 0.21rem;
  position: absolute;
  right: 0.2rem;
  top: 0.4rem;
}

.type .num {
  height: 1.08rem;
  padding: 0 0.23rem;
  border-bottom: 1px solid #f1f1f1;
  background-color: #fff;
}

.type .num h3 {
  float: left;
  font: 0.26rem/1.08rem "微软雅黑";
  color: #444444;
}

.type .num .btn {
  float: right;
  width: auto;
  height: 0.6rem;
  font: 0.26rem/0.6rem "微软雅黑";
  color: #444444;
  text-align: center;
  padding-top: 0.25rem;
}

.type .num .btn a {
  float: left;
  display: block;
  width: 0.62rem;
  height: 0.57rem;
  border: 0.01rem solid #454545;
  border-right: 0;
  border-top-left-radius: 0.04rem;
  border-bottom-left-radius: 0.04rem;
}

.type .num .btn a:last-child {
  border: 0.01rem solid #454545;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0.04rem;
  border-bottom-right-radius: 0.04rem;
  border-left: 0;
}

.type .num .btn input {
  float: left;
  width: 0.79rem;
  height: 0.57rem;
  border: 0.01rem solid #454545;
  text-align: center;
}

.type .att {
  height: 1.9rem;
  padding: 0 0.23rem;
  position: relative;
  background-color: #fff;
}

.type .att h3 {
  font: 0.26rem/0.8rem "微软雅黑";
  color: #444444;
  margin-top: 0.13rem;
}

.type .att p {
  font: 0.26rem/0.59rem "微软雅黑";
  color: #b5b5b5;
}

.type .att p a {
  display: inline-block;
  padding: 0 0.5rem;
  background-color: #e43a3d;
  font: 0.28rem/0.59rem "微软雅黑";
  color: #fff;
  margin-left: 0.7rem;
  border-radius: 0.03rem;
}

.type .att p a:last-child {
  background-color: #e1e1e3;
  margin-left: 0.15rem;
}

.type .att > a {
  display: block;
  width: 0.35rem;
  height: 0.21rem;
  position: absolute;
  right: 0.21rem;
  top: 0.42rem;
}

.type .att > a img {
  width: 0.35rem;
  height: 0.21rem;
}
</style>