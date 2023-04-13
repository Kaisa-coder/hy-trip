<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const cityClick = () => {
  router.push('/city')
}
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log(res)
    },
    (err) => {
      console.log(err)
    }
  )
}


</script>

<template>
  <div class="search-box">
    <div class="city" @click="cityClick">广州</div>
    <div class="position" @click="positionClick">
      <span class="text">我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="">
    </div>
  </div>
</template>


<style lang="less" scoped>
.search-box {

  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    font-size: 15px;
    color: #333;
  }

  .position {
    display: flex;
    align-items: center;
    width: 74px;

    .text {
      position: relative;
      top: 2px;
      color: #666;
      font-size: 12px;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }

}
</style>