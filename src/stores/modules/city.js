import { getCityAll } from '@/service'
import { defineStore } from 'pinia'

const useCityStore = defineStore('city', {
  state: () => ({
    allCities: []
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