<script setup>
import { computed } from 'vue'
const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
const itemStore = computed(() => {
  return Number(props.itemData.commentScore)
})
</script>

<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="infos">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="price">
          <van-rate :model-value="itemStore" color="#fff" :size="15" readonly  allow-half/>
          <div class="news">{{ itemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
.house-item {
  width: 50%;

  .item-inner {
    position: relative;
    margin: 5px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;

    .cover {
      img {
        width: 100%;
      }
    }

    .infos {
      position: absolute;
      bottom: 0;
      padding: 8px 10px;
      // background-color: #fff;
      color: #fff;

      .summary {
        font-size: 12px;
      }

      .name {
        margin: 5px 0;
        overflow: hidden;
      }

      .price {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        .news {}
      }
    }
  }
}
</style>