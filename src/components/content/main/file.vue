<template>
  <div>
    <div class="file">
      <div class="pic"></div>
      <div class="name">
        <h3>油壶</h3>
        <h4>V1</h4>
      </div>
      <a href="#">每日签到</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.file {
  height: 2.06rem;
  width: 90.2vw;
  background-color: #f26b11;
  padding: 0 0.38rem 0 0.32rem;
  display: flex;
  justify-content: space-between;
}

.file .pic {
  width: 1.41rem;
  height: 1.41rem;
  margin-top: 0.28rem;
  border-radius: 50%;
  border: 0.05rem solid #fff;
  background: #863301 url(../../../assets/images/main/mine.png) no-repeat center;
  background-size: 1.41rem 1.41rem;
}

.file .name {
  flex: 1;
  padding-top: 0.61rem;
  padding-left: 0.25rem;
}

.file .name h3 {
  font: 0.3rem/0.51rem "微软雅黑";
  color: #fff;
}

.file .name h4 {
  font: italic 0.28rem/0.44rem "微软雅黑";
  color: #271418;
}

.file > a {
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
</style>