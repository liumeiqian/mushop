<template>
  <div>
    <top-bar></top-bar>
    <top-nav></top-nav>
    <banner></banner>
    <i-menu></i-menu>
    <limt></limt>
    <adv></adv>
    <com-list></com-list>

  </div>
</template>

<script>
import topBar from '../content/topBar';
import topNav from '../content/topNav';
import banner from '../content/banner';
import iMenu from '@/components/content/iMenu';
import limt from '@/components/content/limt';
import adv from '@/components/content/adv';
import comList from '@/components/content/comList';

export default {
  components: {
    topBar,
    topNav,
    banner,
    iMenu,
    limt,
    adv,
    comList,
  }
}
</script>

<style scoped>

</style>