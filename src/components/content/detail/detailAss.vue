<template>
  <div>
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
      <p class="more clearfix">共1000+条评论<a href="#">查看更多></a></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ass {
  padding: 0 0.23rem;
  background-color: #fff;
  margin-top: 0.3rem;
  padding-bottom: 1.14rem;
}

.ass h3 {
  font: 0.3rem/0.93rem "微软雅黑";
  color: #444444;
  border-bottom: 1px solid #f1f1f1;
}

.ass .con {
  border-bottom: 1px solid #f1f1f1;
}

.ass .con p {
  font: 0.26rem/0.56rem Arial;
  color: #666666;
}

.ass .con h4 {
  font: 0.26rem/0.53rem Arial;
  color: #454545;
}

.ass .con .pic {
  margin-top: 0.2rem;
  overflow: hidden;
  width: 100%;
}

.ass .con .pic img {
  float: left;
  margin: 0 0.09rem;
  width: 1.6rem;
  height: 1.51rem;
}

.ass .con .time {
  font: 0.26rem/0.77rem Arial;
  color: #999999;
  margin-top: 0.08rem;
}

.ass .more {
  height: 0.91rem;
  font: 0.24rem/0.91rem Arial;
  color: #999999;
}

.ass .more a {
  float: right;
  display: block;
  font: 0.24rem/0.91rem "微软雅黑";
  color: #999999;
}
</style>