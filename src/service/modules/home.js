import hyRequest from '@/service/request/index'

export function getHomeHotSuggests() {
  return hyRequest.get(
    { url: "/home/hotSuggests" }
  )
}

export function getHomeCategories() {
  return hyRequest.get({
    url: '/home/categories'
  })
}


export function getHomeHouseList(currentPage = 1) {
  return hyRequest.get({
    url: '/home/houselist',
    params: {
      page: currentPage
    }
  })
}