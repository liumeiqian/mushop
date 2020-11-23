<template>
  <div>
    <top-title>
      <div slot="cont">
        <p class="title">确认订单</p>
      </div>
    </top-title>

    <confirmaddr></confirmaddr>
    <confirm-con></confirm-con>
  </div>
</template>

<script>
import topTitle from '@/components/content/common/topTitle';
import confirmaddr from '@/components/content/cart/confirmaddr';
import confirmCon from '@/components/content/cart/confirmCon';

export default {
  components: {
    topTitle,
    confirmaddr,
    confirmCon,
  }
}
</script>

<style>

</style>