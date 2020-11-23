<template>
  <div>
    <top-title>
      <div slot="cont">
        <p class="title">登录</p>
      </div>
      <div slot="menu">
        <div class="menu">
          <router-link tag="i" to="/register">注册</router-link>
        </div>
      </div>
    </top-title>

    <div class="log">
      <div class="content">
        <div class="con_item clearfix">
          <p class="item_title">
            <span>手</span><span>机</span><span>号:</span>
          </p>
          <input
            type="text"
            v-model="userInfo.phone"
            @keyup="trim"
            @blur="onblur($event, 'phone')"
          />
          <p class="err" v-show="err.phone">手机号不能为空</p>
        </div>
        <div class="con_item clearfix">
          <p class="item_title"><span>密</span><span>码:</span></p>
          <input
            type="password"
            v-model="userInfo.password"
            @keyup="trim"
            @blur="onblur($event, 'pwd')"
          />
          <p class="err" v-show="err.pwd">密码不能为空</p>
        </div>
        <p><a href="">忘记密码</a></p>
        <a href="javascript:;" class="next" @click="login">登录</a>
      </div>
    </div>
  </div>
</template>

<script>
import topTitle from "@/components/content/common/topTitle";
import { getLogin } from "../../util/axios";
import { Toast } from "vant";

export default {
  components: {
    topTitle,
  },
  data() {
    return {
      phone: "",
      password: "",
      rg: /\w+/,
      err: {
        phone: false,
        pwd: false,
      },
      userInfo: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    onblur(e, i) {
      if (e.target.value === "") {
        this.err[i] = true;
      } else {
        this.err[i] = false;
      }
    },
    login() {
      if (this.userInfo.phone == "" || this.userInfo.password == "") {
        this.err = true;
        return;
      }
      getLogin(this.userInfo).then((res) => {
        if (res.code == 200) {
          Toast.success(res.msg);
          sessionStorage.setItem("userInfo", JSON.stringify(res.list));
          this.$router.push("/main");
        } else {
          Toast.fail(res.msg);
        }
      });
    },
    trim() {
      this.userInfo.phone = this.rg.exec(this.userInfo.phone)
        ? this.rg.exec(this.userInfo.phone)
        : "";
      this.userInfo.password = this.rg.exec(this.userInfo.password)
        ? this.rg.exec(this.userInfo.password)
        : "";
    },
  },
};
</script>

<style scoped>
.log .content {
  padding: 2rem 0.5rem 0;
}

.log .content .con_item {
  border-bottom: 1px solid #000;
  display: flex;
  margin-bottom: 0.4rem;
  position: relative;
}

.log .content .con_item .item_title {
  font: 0.3rem/1rem "微软雅黑";
  width: 1rem;
  float: left;
  display: flex;
  justify-content: space-between;
}

.log .content .con_item input {
  flex: 1;
  font: 0.3rem/1rem "微软雅黑";
  margin: 0 0.2rem;
  float: left;
  /* border: 1px solid #aff; */
}

.log .content > p {
  text-align: right;
  margin: 0 0.1rem 0.2rem 0;
  font: 0.2rem/0.6rem "微软雅黑";
}
.log .content > p a {
  text-align: right;
  color: #999;
}

.log .content .next {
  display: block;
  width: 100%;
  height: 1rem;
  background-color: #f26b11;
  border-radius: 0.1rem;
  text-align: center;
  color: #fff;
  font: 0.4rem/1rem "微软雅黑";
}

.log .err {
  position: absolute;
  color: #f00;
  margin-bottom: 0.2rem;
  left: 0;
  bottom: -0.54rem;
  transition: all 1s;
}
</style>