<script setup>
import { computed } from 'vue';

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

const indexList = computed(() => {
  const list = props.groupData?.cities.map(item => item.group)
  list.unshift('#')
  return list
})
</script>

<template>
  <div class="city-group">
    <!-- <van-index-bar :sticky="false"> -->
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="item in groupData?.hotCities">
          <div class="city">{{ item.cityName }}</div>
        </template>
      </div>
      <template v-for="group in groupData?.cities">
        <van-index-anchor :index="group.group" />
        <template v-for="city in group.cities">
          <van-cell :title="city.cityName" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>


<style lang="less" scoped>


.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 5px 0;
  }
}
</style>