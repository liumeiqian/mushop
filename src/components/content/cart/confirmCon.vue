<template>
  <div>
    <ul class="basic">
      <li>
        <div class="pic"><img src="@/assets/images/confirm/shop_4.jpg" alt="" /></div>
        <div class="text">
          <h4>雅诗兰黛护手霜</h4>
          <p>规格：50g</p>
        </div>
        <p class="pric">&yen;<span>123.00</span></p>
      </li>

      <li>
        <p>购买数量：</p>
        <div class="btn clearfix">
          <a href="#">-</a><input type="text" value="1" /><a href="#">+</a>
        </div>
      </li>

      <li>
        <p>配送方式</p>
        <p>XX快递</p>
      </li>

      <li>
        <p>优惠卷</p>
        <p>无可用</p>
      </li>

      <li>
        <p>使用积分</p>
        <div class="btn clearfix">
          <input type="text" placeholder="输入积分" />
          <a href="#">使用</a>
          <p>可用<span>50</span>积分</p>
        </div>
      </li>

      <li>
        <ul>
          <li>
            <h4>商品金额</h4>
            <p>&yen;123.00</p>
          </li>
          <li>
            <h4>运费</h4>
            <p>+&yen;0.00</p>
          </li>
          <li>
            <h4>优惠卷</h4>
            <p>-&yen;0.00</p>
          </li>
          <li>
            <h4>会员优惠</h4>
            <p>-&yen;0.00</p>
          </li>
          <li>
            <h4>积分抵扣</h4>
            <p>-&yen;0.00</p>
          </li>
        </ul>
      </li>
    </ul>

    <!-- 提交 -->

    <div class="bill">
      <h2>实付金额：<span>&yen;123.00</span></h2>
      <a href="#">提交订单</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.basic {
  margin-top: 0.12rem;
}

.basic > li {
  padding: 0 0.26rem;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
}

.basic > li:nth-child(1) {
  padding-top: 0.22rem;
}

.basic > li:nth-child(1) .pic {
  margin-right: 0.29rem;
}

.basic > li:nth-child(1) .pic img {
  height: 1.02rem;
  width: auto;
}

.basic > li:nth-child(1) .text {
  flex: 1;
  margin-top: 0.06rem;
}

.basic > li:nth-child(1) .text h4 {
  font: 0.24rem/0.47rem "微软雅黑";
  color: #5c5c5c;
}

.basic > li:nth-child(1) .text p {
  font: 0.24rem/0.47rem "微软雅黑";
  color: #b0b0b0;
}

.basic > li:nth-child(1) .pric {
  font: 0.2rem/0.3rem "微软雅黑";
  color: #f21b20;
  margin-top: 0.2rem;
}

.basic > li:nth-child(1) .pric span {
  font: 0.3rem/0.3rem "微软雅黑";
}

.basic > li:nth-child(2) {
  height: 1.4rem;
}

.basic > li:nth-child(2) p {
  font: 0.24rem/0.24rem "微软雅黑";
  color: #5e5e5e;
  padding-top: 0.54rem;
}

.basic > li:nth-child(2) .btn {
  text-align: center;
  font: 0.24rem/0.63rem "微软雅黑";
  color: #434343;
  padding-top: 0.36rem;
  border-bottom: 1px solid #f0f0f0;
}

.basic > li:nth-child(2) .btn a {
  float: right;
  display: block;
  width: 0.73rem;
  height: 0.63rem;
  border: 1px solid #4d4d4d;
  border-radius: 0.04rem;
  color: #434343;
}

.basic > li:nth-child(2) .btn input {
  float: right;
  width: 1.17rem;
  height: 0.64rem;
  border: 1px solid #4d4d4d;
  border-radius: 0.04rem;
  margin: 0 0.1rem;
  text-align: center;
  font: 0.24rem/0.63rem "微软雅黑";
}

.basic > li:nth-child(3) {
  font: 0.24rem/0.96rem "微软雅黑";
  color: #5e5e5e;
}

.basic > li:nth-child(4) {
  margin-top: 0.12rem;
  font: 0.24rem/1rem "微软雅黑";
  color: #5e5e5e;
  padding: 0;
  border-bottom: 0.02rem solid #f0f0f0;
}

.basic > li:nth-child(4) p {
  padding: 0 0.23rem;
}

.basic > li:nth-child(5) {
  height: 1rem;
}

.basic > li:nth-child(5) p {
  font: 0.24rem/1rem "微软雅黑";
  color: #5e5e5e;
}

.basic > li:nth-child(5) .btn {
  text-align: center;
  font: 0.22rem/0.7rem "微软雅黑";
  color: #434343;
}

.basic > li:nth-child(5) .btn input {
  float: left;
  width: 1.17rem;
  height: 0.7rem;
  border: 2px solid #d8d8d8;
  border-radius: 0.04rem;
  text-align: center;
  font: 0.22rem/0.7rem "微软雅黑";
  color: #434343;
  margin-top: 0.16rem;
}

.basic > li:nth-child(5) .btn input::-webkit-input-placeholder {
  color: #e6e6e6;
}

.basic > li:nth-child(5) .btn a {
  float: left;
  display: block;
  width: 0.74rem;
  height: 0.7rem;
  border: 2px solid #f4aa2f;
  border-radius: 0.04rem;
  color: #fff;
  background-color: #f26b11;
  margin: 0 0.1rem;
  margin-top: 0.16rem;
}

.basic > li:nth-child(5) .btn p {
  float: left;
  font: 0.24rem/1rem "微软雅黑";
  margin: 0;
  padding: 0;
}

.basic > li:nth-child(5) .btn p span {
  color: #da3b38;
}

.basic > li:nth-child(6) {
  margin-top: 0.11rem;
  padding-top: 0.24rem;
  padding-bottom: 0.19em;
  border-bottom: 1px solid #efefef;
  background-color: #fff;
  height: calc(2.15rem);
}

.basic > li:nth-child(6) > ul {
  width: 100%;
  height: 0.43rem;
}

.basic > li:nth-child(6) > ul > li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.basic > li:nth-child(6) > ul > li h4 {
  font: 0.24rem/0.43rem "微软雅黑";
  color: #5e5e5e;
}

.basic > li:nth-child(6) > ul > li p {
  font: 0.24rem/0.43rem "微软雅黑";
  color: #e03f35;
}

.bill {
  background-color: #fff;
  padding-bottom: 1.4rem;
}

.bill h2 {
  text-align: right;
  font: 0.35rem/0.35rem "微软雅黑";
  color: #616161;
  padding-right: 0.26rem;
  padding-top: 0.52rem;
}

.bill h2 span {
  color: #e43941;
}

.bill a {
  display: block;
  width: 3.55rem;
  height: 1.12rem;
  font: 0.3rem/1.12rem "微软雅黑";
  color: #fff;
  background-color: #f26b11;
  text-align: center;
  margin: 0.45rem auto 0;
  border-radius: 0.04rem;
}
</style>