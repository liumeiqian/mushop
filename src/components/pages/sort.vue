<template>
  <div>
    <top-title>
      <div slot="cont">
        <p class="title">商品分类</p>
      </div>
    </top-title>
    <sort-list></sort-list>
  </div>
</template>

<script>
import topTitle from '@/components/content/common/topTitle';
import sortList from '@/components/content/sort/sortList';

export default {
  components: {
    topTitle,
    sortList
  }
}
</script>

<style>

</style>