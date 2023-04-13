<script setup>
import tabBar from '@/components/tab-bar/tab-bar.vue';
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
  <div class="app">
    <RouterView></RouterView>
    <!-- <tab-Bar v-if="!route.meta.hideTabBar"></tab-Bar> -->
    <tab-Bar></tab-Bar>
  </div>
</template>

<style  scoped></style>
