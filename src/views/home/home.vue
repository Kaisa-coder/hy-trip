<script setup>
import { ref } from 'vue';
import HomeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox from './cpns/home-search-box.vue';
import HomeCategories from './cpns/home-categories.vue'
import useHomeStore from '@/stores/modules/home'

const homeStroe = useHomeStore()
homeStroe.fetchHotSuggests()
homeStroe.fetchCategoriesData()
</script>

<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearchBox></HomeSearchBox>
    <HomeCategories></HomeCategories>
  </div>
</template>


<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>