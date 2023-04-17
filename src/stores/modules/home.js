import { defineStore } from "pinia";
// import hyRequest from "@/service/request/index"
import { getHomeHotSuggests, getHomeCategories } from "@/service";

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: []
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategoriesData() {
      const res = await getHomeCategories()
      this.categories = res.data
    }
  }
})

export default useHomeStore