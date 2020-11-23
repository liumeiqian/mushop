<template>
  <div>
    <header class="headCon">
      <a href="javascript:;" class="logo"
        ><img src="../../assets/images/logo.jpg" alt="logo"
      /></a>
      <router-link tag="span" to="/search">
        <input type="button" class="search" value="寻找商品" />
      </router-link>
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.headCon .menu {
  width: 0.55rem;
  display: flex;
  justify-content: space-between;
}

.headCon .menu span {
  display: block;
  width: 0.12rem;
  height: 0.12rem;
  background-color: #000;
  border-radius: 50%;
}
.headCon {
  height: 0.85rem;
  width: 94vw;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.43rem 0.23rem 0;
  border-bottom: 0.01rem solid #e4e4e4;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}

.headCon .logo {
  margin-left: 0.01rem;
}

.headCon .logo img {
  width: auto;
  height: 0.29rem;
}

.headCon .search {
  width: 3.04rem;
  height: 0.39rem;
  background-color: #eeeeee;
  border-radius: 0.06rem;
  text-align: center;
  font: 0.18rem/0.39rem "微软雅黑";
}

.headCon input {
  color: #b2b2b2;
}
</style>