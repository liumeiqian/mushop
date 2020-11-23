<template>
  <div>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import foot from '@/components/content/footer'

export default {
  components: {
    foot
  }
}
</script>

<style scoped>

</style>