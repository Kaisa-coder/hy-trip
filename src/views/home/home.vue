<script setup>
import { ref } from 'vue';
import HomeNavBar from './cpns/home-nav-bar.vue';
import useHomeStore from '@/stores/modules/home'
import HomeSearchBox from './cpns/home-search-box.vue';
import HomeCategories from './cpns/home-categories.vue'
import homeContent from './cpns/home-content.vue';

const homeStroe = useHomeStore()
homeStroe.fetchHotSuggests()
homeStroe.fetchCategoriesData()
homeStroe.fetchHouseListData()
</script>

<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearchBox></HomeSearchBox>
    <HomeCategories></HomeCategories>
    <homeContent></homeContent>
  </div>
</template>


<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>