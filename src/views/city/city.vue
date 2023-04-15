<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getCityAll } from '@/service/index'
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { computed } from '@vue/reactivity';
import cityGroup from './cpns/city-group.vue';

const searchValue = ref('')
const router = useRouter()

const cancelClick = () => {
  router.back()
}

const tabActive = ref(0)

// const allCity = ref()
// getCityAll().then(res => {
//   const { data } = res
//   allCity.value = data
// })

const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)
const currentGroup = computed(() => allCities.value[tabActive.value])
</script>

<template>
  <div class="city top-page">
    <div class="top">
      <van-search v-model="searchValue" placeholder="城市/区域位置" shape="round" show-action @cancel="cancelClick" />
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key, index) in allCities">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- <cityGroup :group-data="currentGroup" /> -->
      <template v-for="(value, key, index) in allCities">
        <cityGroup v-show="tabActive === key" :group-data="value" />
      </template>
    </div>
  </div>
</template>


<style lang="less" scoped>
.city {
  // .top {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  // }

  // .content {
  //   margin-top: 98px;
  // }

  .top{
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>