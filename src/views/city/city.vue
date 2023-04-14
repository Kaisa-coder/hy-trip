<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getCityAll } from '@/service/index'

const searchValue = ref('')
const router = useRouter()

const cancelClick = () => {
  router.back()
}

const tabActive = ref(0)

getCityAll().then(res => {
  console.log(res)
  const { data } = res
})
</script>

<template>
  <div class="city top-page">
    <van-search v-model="searchValue" placeholder="城市/区域位置" shape="round" show-action @cancel="cancelClick" />
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <van-tab title="国内·港澳台"></van-tab>
      <van-tab title="海外"></van-tab>
    </van-tabs>
  </div>
</template>


<style lang="less" scoped>
.city {}
</style>