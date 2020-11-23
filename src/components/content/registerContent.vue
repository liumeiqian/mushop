<template>
  <div>
    <div class="content">
      <div class="con_item clearfix">
        <p class="item_title"><span>昵</span><span>称:</span></p>
        <input
          type="text"
          v-model="userInfo.username"
          @keyup="trim"
          @blur="onblur($event, 'name')"
        />
        <p class="err" v-show="err.name">昵称不能为空</p>
      </div>
      <div class="con_item clearfix">
        <p class="item_title"><span>手</span><span>机</span><span>号:</span></p>
        <input
          type="text"
          v-model="userInfo.tel"
          @keyup="trim"
          @blur="onblur($event, 'tel')"
        />
        <p class="err" v-show="err.tel">手机号不能为空</p>
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
      <div class="con_item clearfix">
        <p class="item_title"><span>验</span><span>证</span><span>码:</span></p>
        <input
          type="text"
          v-model="userInfo.code"
          @keyup="trim"
          @blur="onblur($event, 'code')"
        />
        <span v-show="!isCode" @click="getCode">获取验证码</span>
        <span v-show="isCode">重新发送({{ time }})</span>
        <p class="err" v-show="err.code">验证码错误</p>
      </div>
      <a href="javascript:;" class="next" @click="next">下一步</a>
      <div class="gree">
        <input type="checkbox" v-model="userInfo.isGree" />
        我已阅读并同意使用条款和隐私政策
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCode: false,
      time: 60,
      timer: null,
      rg: /\w+/,
      err: {
        name: false,
        tel: false,
        pwd: false,
        code: false,
      },
      // err: false,
      userInfo: {
        username: "",
        tel: "",
        password: "",
        code: "",
        isGree: false,
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
    next() {
      if (this.userInfo.isGree === false) {
        alert("请同意协议");
      } else if (
        this.userInfo.username == "" ||
        this.userInfo.tel == "" ||
        this.userInfo.password == "" ||
        this.userInfo.code == ""
      ) {
        alert("内容不能为空");
      } else {
        location.href = "./login.html";
      }
    },
    getCode() {
      clearInterval(this.timer);
      this.isCode = !this.isCode;
      this.timer = setInterval(() => {
        this.time--;
        if (this.time <= 0) {
          clearInterval(this.timer);
          this.isCode = !this.isCode;
          this.time = 60;
        }
      }, 1000);
    },
    trim() {
      this.userInfo.username = this.rg.exec(this.userInfo.username)
        ? this.rg.exec(this.userInfo.username)
        : "";
      this.userInfo.tel = this.rg.exec(this.userInfo.tel)
        ? this.rg.exec(this.userInfo.tel)
        : "";
      this.userInfo.password = this.rg.exec(this.userInfo.password)
        ? this.rg.exec(this.userInfo.password)
        : "";
      this.userInfo.code = this.rg.exec(this.userInfo.code)
        ? this.rg.exec(this.userInfo.code)
        : "";
    },
  },
};
</script>

<style scoped>
.content {
  padding: 2rem 0.5rem 0;
}

.content .con_item {
  border-bottom: 1px solid #000;
  display: flex;
  margin-bottom: 0.4rem;
  position: relative;
}

.content .con_item .item_title {
  font: 0.3rem/0.7rem "微软雅黑";
  width: 1rem;
  float: left;
  display: flex;
  justify-content: space-between;
}

.content .con_item input {
  flex: 1;
  font: 0.3rem/0.7rem "微软雅黑";
  margin: 0 0.2rem;
  float: left;
  /* border: 1px solid #aff; */
}

.content .con_item > span {
  font: 0.2rem/0.6rem "微软雅黑";
  color: #666;
  margin-right: 0.1rem;
}
.content .next {
  display: block;
  width: 100%;
  height: 1rem;
  background-color: #f26b11;
  border-radius: 0.1rem;
  text-align: center;
  color: #fff;
  font: 0.4rem/1rem "微软雅黑";
}

.content .gree {
  margin-top: 0.3rem;
  font: 0.2rem/0.3rem "微软雅黑";
  color: #333;
}

.err {
  position: absolute;
  color: #f00;
  margin-bottom: 0.2rem;
  left: 0;
  bottom: -0.54rem;
  transition: all 1s;
}
</style>