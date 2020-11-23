<template>
  <div>
    <nav class="navbar">
      <ul class="clearfix">
        <li :class="[num==item.id-1?'select':'']" @click="num=item.id-1" v-for="item in list" :key="item.id"><a href="#">{{item.name}}</a></li>
      </ul>
      <p class="arrow"></p>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      list:[
        {
          id: 1,
          name: '推荐',
        },
        {
          id: 2,
          name: '女装',
        },
        {
          id: 3,
          name: '鞋包',
        },
        {
          id: 4,
          name: '居家',
        },
        {
          id: 5,
          name: '母婴儿童',
        },
        {
          id: 6,
          name: '美食',
        },
        {
          id: 7,
          name: '男装',
        },
      ]
    }
  },
};
</script>

<style scoped>
.navbar {
  background-color: #fff;
  overflow: hidden;
  position: relative;
  padding-top: 1.5rem;
}

.navbar ul {
  padding-top: 0.23rem;
  padding-left: 0.12rem;
  width: 10rem;
}

.navbar ul li {
  float: left;
}

.navbar ul li.select {
  position: relative;
}

.navbar ul li.select::after {
  content: "";
  display: block;
  width: 0.01rem;
  height: 0.32rem;
  background-color: #f1f1f1;
  position: absolute;
  top: 0;
  right: 0;
}

.navbar ul li.select a {
  border-bottom-color: #ff003d;
  color: #f70047;
}

.navbar ul li a {
  display: block;
  height: 0.31rem;
  font: 0.28rem/0.31rem "微软雅黑";
  color: #212121;
  padding-bottom: 0.19rem;
  border-bottom: 0.04rem solid transparent;
  margin: 0 0.2rem;
}

.navbar .arrow {
  width: 0.75rem;
  height: 0.67rem;
  background: #ffffff url(../../assets/images/index/arrow.jpg) no-repeat 0.2rem
    0.2rem;
  background-size: 0.35rem 0.21rem;
  position: absolute;
  right: 0;
  top: 1.61rem;
}
</style>