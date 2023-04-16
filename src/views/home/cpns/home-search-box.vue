<script setup>
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { formatMonthDay, getDiffDays } from '@/utils/format_date'

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

const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

const nowDate = new Date()
const newDate = new Date().setDate(nowDate.getDate() + 2)

const startDate = ref(formatMonthDay(nowDate))
const endDate = ref(formatMonthDay(newDate))
const stayCount = ref(getDiffDays(nowDate, newDate))

const showCalendar = ref(false)
const onConfirm = (value) => {
  const selcetStartValue = value[0]
  const selcetEndValue = value[1]
  startDate.value = formatMonthDay(selcetStartValue)
  endDate.value = formatMonthDay(selcetEndValue)
  showCalendar.value = false
  stayCount.value = getDiffDays(selcetStartValue, selcetEndValue)
}
const formatter = (day) => {
  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }
  return day
}
</script>

<template>
  <div class="search-box">
    <div class="section location bottom-gray-line ">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
    <div class="section date-range bottom-gray-line " @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共{{ stayCount }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </div>

    <van-calendar v-model:show="showCalendar" type="range" color="#ff9854" :round="false" :show-confirm="false"
      :formatter="formatter" @confirm="onConfirm" />
  </div>
</template>


<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
}

.location {

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
      font-size: 12px;
      color: #666;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}

.date-range {

  .start {
    flex: 1;
    display: flex;
    align-items: center;
    height: 44px;


  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}
</style>