import { getCityAll } from '@/service'
import { defineStore } from 'pinia'

const useCityStore = defineStore('city', {
  state: () => ({
    allCities: [],
    currentCity: {
      cityName: '广州'
    }
  }),
  actions: {
    async fetchAllCitiesData() {
      const { data } = await getCityAll()
      this.allCities = data
    }
  },
  getters: {

  }
})

export default useCityStore