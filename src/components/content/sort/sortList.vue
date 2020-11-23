<template>
  <div class="box">
    <!-- 导航栏 -->
    <van-nav-bar
      :title="$route.meta.name"
      left-arrow
      @click-left="$router.back()"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="box">
      <!-- 一级分类 -->
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item
          v-for="item in firstList"
          :key="item.id"
          :title="item.catename"
        />
      </van-sidebar>
      <!-- 二级分类 -->
      <van-grid :border="false" :column-num="3">
        <van-grid-item
          v-for="item in secondList"
          :key="item.id"
          :to="'/search?id=' + item.id"
        >
          <van-image :src="item.img ? $imgUrl + item.img : ''" />
          <p>{{ item.catename }}</p>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { getCateTree } from "../../../util/axios";

export default {
  data() {
    return {
      activeKey: 0,
      firstList: [],
      secondList: [],
    };
  },
  mounted() {
    this.getCateTreeList();
  },
  methods: {
    onChange(e) {
      this.secondList = this.firstList[e].children;
    },
    getCateTreeList() {
      getCateTree().then((res) => {
        // console.log(res, '树');
        if (res.code == 200) {
          this.firstList = res.list;
          this.secondList = this.firstList[this.activeKey].children;
        }
      });
    },
  },
};
</script>

<style scoped>
.box {
  display: flex;
  margin-top: 0.56rem;
}
.van-grid {
  flex: 1;
}
</style>