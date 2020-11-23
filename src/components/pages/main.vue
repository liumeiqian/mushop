<template>
  <div>
    <top-title>
      <div slot="cont"><p class="title">个人中心</p></div>
    </top-title>

    <div v-if="!userInfo">
      <div class="fileitem">
        <div class="file">
          <div class="pic"></div>
          <div class="name">
            <h3>XXX</h3>
          </div>
        </div>
      </div>

      <div class="v_btn">
        <van-button plain type="info" to="/login">未登录，点击登录</van-button>
      </div>
    </div>

    <div v-else>
      <div class="fileitem">
        <div class="file">
          <div class="pic"></div>
          <div class="name">
            <h3 v-html="userInfo.nickname"></h3>
            <h4>V1</h4>
          </div>
          <a href="#">每日签到</a>
        </div>
      </div>

      <div class="mainNav">
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

      <div class="mainItem">
        <ul class="item">
          <li>
            <p>
              <img src="@/assets/images/main/iconMine_4.jpg" alt="" />地址管理
            </p>
            <i><img src="@/assets/images/main/arrowRight.jpg" alt="" /></i>
          </li>
          <li>
            <p>
              <img src="@/assets/images/main/iconMine_5.jpg" alt="" />地址管理
            </p>
            <i><img src="@/assets/images/main/arrowRight.jpg" alt="" /></i>
          </li>
          <li>
            <p>
              <img src="@/assets/images/main/iconMine_6.jpg" alt="" />地址管理
            </p>
            <i><img src="@/assets/images/main/arrowRight.jpg" alt="" /></i>
          </li>
          <li>
            <p>
              <img src="@/assets/images/main/iconMine_7.jpg" alt="" />地址管理
            </p>
            <i><img src="@/assets/images/main/arrowRight.jpg" alt="" /></i>
          </li>
          <li>
            <p>
              <img src="@/assets/images/main/iconMine_8.jpg" alt="" />地址管理
            </p>
            <i><img src="@/assets/images/main/arrowRight.jpg" alt="" /></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import topTitle from "@/components/content/common/topTitle";

export default {
  components: {
    topTitle,
  },
  data() {
    return {
      userInfo: '',
    };
  },
  mounted() {
    this.userInfo = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : '';
  },
  methods: {
    quit() {
      sessionStorage.removeItem("userInfo");
      this.$router.push("/login");
    },
  },
};
</script>

<style scopde>
.v_btn {
  padding: 30px;
  text-align: center;
}

.fileitem {
  padding-top: 1.28rem;
}
.fileitem .file {
  height: 2.06rem;
  width: 90.2vw;
  background-color: #f26b11;
  padding: 0 0.38rem 0 0.32rem;
  display: flex;
  justify-content: space-between;
}

.fileitem .file .pic {
  width: 1.41rem;
  height: 1.41rem;
  margin-top: 0.28rem;
  border-radius: 50%;
  border: 0.05rem solid #fff;
  background: #863301 url(../../assets/images/main/mine.png) no-repeat center;
  background-size: 1.41rem 1.41rem;
}

.fileitem .file .name {
  flex: 1;
  padding-top: 0.61rem;
  padding-left: 0.25rem;
}

.fileitem .file .name h3 {
  font: 0.3rem/0.51rem "微软雅黑";
  color: #fff;
}

.fileitem .file .name h4 {
  font: italic 0.28rem/0.44rem "微软雅黑";
  color: #271418;
}

.fileitem .file > a {
  display: block;
  width: 1.59rem;
  height: 0.71rem;
  margin-top: 0.77rem;
  background-color: #fff;
  font: 0.26rem/0.71rem "微软雅黑";
  color: #fb6b0b;
  text-align: center;
  border-radius: 0.04rem;
}
/*  */
.mainNav .mer {
  height: 1.08rem;
  width: auto;
  background-color: #fff;
  padding: 0 0.56rem;
  padding-top: 0.34rem;
  display: flex;
  justify-content: space-between;
}

.mainNav .mer div {
  text-align: center;
}

.mainNav .mer div img {
  width: 0.34rem;
  height: 0.34rem;
}

.mainNav .mer div p {
  font: 0.24rem/0.6rem "微软雅黑";
  color: #676767;
}

.mainNav .mer div:nth-child(2) img {
  width: 0.38rem;
  height: 0.3rem;
}

.mainNav .mer div:nth-child(3) img {
  width: 0.34rem;
  height: 0.29rem;
}

/*  */
.mainItem .item {
  background-color: #f1f1f1;
  padding-top: 0.2rem;
  /* height: 5.82rem; */
}

.mainItem .item li {
  height: 1.12rem;
  width: 100%;
  padding: 0 0.37rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #d9d9d9;
  background-color: #fff;
}

.mainItem .item li p {
  font: 0.26rem/0.36rem "微软雅黑";
  color: #606060;
}

.mainItem .item li p img {
  width: auto;
  height: 0.4rem;
  margin-right: 0.26rem;
}

.mainItem .item li i img {
  width: 0.19rem;
  height: 0.26rem;
}
</style>