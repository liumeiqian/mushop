<template>
  <div>
    <div class="limit">
      <div class="limTime">
        <h3><i></i>限时秒杀</h3>
        <p>每天零点场 好货秒不停</p>
        <h4>
          <span>02</span>：<span>16</span>：<span>45</span><span>秒杀</span>
        </h4>
        <a href="#">
          <img src="../../assets/images/index/shop_5.jpg" alt="" />
          <div>&yen;<span>14.8</span></div>
        </a>
      </div>
      <div class="wrap">
        <div class="new">
          <div class="text">
            <h3>品牌上新<span>折</span></h3>
            <p>每日9点 抢大牌</p>
            <img src="../../assets/images/index/brand.jpg" alt="" />
          </div>
          <div class="pic"><img src="../../assets/images/index/shop_1.jpg" alt="" /></div>
        </div>
        <div class="bottom">
          <div class="day">
            <h3>每日十件</h3>
            <p>只为你选好货</p>
            <img src="../../assets/images/index/indexship2.jpg" alt="" />
          </div>
          <div class="pie">
            <h3>拼啊</h3>
            <p>超级好价拼团</p>
            <img src="../../assets/images/index/shop_3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.limit {
  display: flex;
  background-color: #fff;
  margin-top: 0.29rem;
  height: 3.77rem;
  width: auto;
  padding-left: 0.2rem;
}

.limit > div {
  flex: 1;
}

.limit .limTime {
  border-right: 0.01rem solid #f0f0f0;
}

.limit .limTime h3 {
  font: normal 0.28rem/0.37rem "微软雅黑";
  color: #ff3988;
  padding-top: 0.14rem;
}

.limit .limTime h3 i {
  display: inline-block;
  height: 0.31rem;
  width: 0.33rem;
  background: url(../../assets/images/index/timer.jpg) no-repeat 0 0;
  background-size: 0.33rem 0.31rem;
  vertical-align: middle;
  margin-right: 0.12rem;
}

.limit .limTime p {
  font: 0.22rem/0.29rem "微软雅黑";
  color: #787878;
}

.limit .limTime h4 {
  font: 0.26rem/0.43rem "微软雅黑";
  color: #202020;
  vertical-align: middle;
  padding-top: 4px;
}

.limit .limTime h4 span {
  font: 0.26rem/0.43rem "微软雅黑";
  color: #fff;
  display: inline-block;
  width: 0.43rem;
  height: 0.43rem;
  background-color: #27272f;
  border-radius: 0.05rem;
  text-align: center;
}

.limit .limTime h4 span:last-child {
  height: 0.4rem;
  width: 0.96rem;
  border-radius: 0;
  background-color: transparent;
  background: url(../../assets/images/index/bg.jpg) no-repeat 0 0;
  background-size: 0.96rem 0.4rem;
  margin-left: 0.26rem;
  line-height: 0.4rem;
  color: #000;
}

.limit .limTime a {
  display: block;
  margin: 0.29rem 0 0 0.39rem;
  position: relative;
}

.limit .limTime a img {
  height: 2rem;
  width: auto;
}

.limit .limTime a > div {
  width: 0.84rem;
  height: 0.84rem;
  border-radius: 50%;
  background-color: #ff3179;
  text-align: center;
  color: #fff;
  position: absolute;
  bottom: 0.09rem;
  right: 0.3rem;
  font: 0.16rem/0.84rem "微软雅黑";
}

.limit .limTime a > div span {
  font: 0.24rem/0.84rem "微软雅黑";
}

.limit .wrap .new {
  height: 1.88rem;
  padding-left: 0.18rem;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
}

.limit .wrap .new .text h3 {
  font: normal 0.28rem/0.37rem "微软雅黑";
  color: #ff3988;
  padding-top: 0.14rem;
}

.limit .wrap .new .text h3 span {
  display: inline-block;
  width: 0.33rem;
  height: 0.25rem;
  color: #fff;
  font: normal 0.18rem/0.25rem "微软雅黑";
  text-align: center;
  vertical-align: middle;
  margin-left: 0.09rem;
  margin-top: -0.03rem;
  border-radius: 0.02rem;
  background: linear-gradient(90deg, #fe104b, #ff389a);
}

.limit .wrap .new .text p {
  font: 0.22rem/0.29rem "微软雅黑";
  color: #787878;
}

.limit .wrap .new .text img {
  margin-top: 0.23rem;
  margin-left: 0.05rem;
  width: auto;
  height: 0.32rem;
}

.limit .wrap .new .pic {
  margin: 0.05rem 0.29rem 0.04rem 0;
}

.limit .wrap .new .pic img {
  width: 1.28rem;
  height: 1.78rem;
}

.limit .wrap .bottom {
  display: flex;
}

.limit .wrap .bottom .day {
  flex: 1;
  padding-left: 0.18rem;
  border-right: 1px solid #f0f0f0;
}

.limit .wrap .bottom .day h3 {
  font: normal 0.28rem/0.37rem "微软雅黑";
  color: #ff3988;
  padding-top: 0.14rem;
}

.limit .wrap .bottom .day p {
  font: 0.22rem/0.29rem "微软雅黑";
  color: #787878;
}

.limit .wrap .bottom .day img {
  display: block;
  width: 0.64rem;
  height: 1.02rem;
  margin: 0.05rem auto 0;
}

.limit .wrap .bottom .pie {
  flex: 1;
  padding-left: 0.18rem;
}

.limit .wrap .bottom .pie h3 {
  font: normal 0.28rem/0.37rem "微软雅黑";
  color: #ff3988;
  padding-top: 0.14rem;
}

.limit .wrap .bottom .pie p {
  font: 0.22rem/0.29rem "微软雅黑";
  color: #787878;
}

.limit .wrap .bottom .pie img {
  display: block;
  width: 1.04rem;
  height: 0.88rem;
  margin: 0.13rem auto 0;
}
</style>