import hyRquest from "@/service";
enum DashboardAPI{
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}
export function getCategoryGoodsCount(){
return hyRquest.get({
  url:DashboardAPI.categoryGoodsCount
})
}

export function getCategoryGoodsSale() {
  return hyRquest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return hyRquest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddressGoodsSale() {
  return hyRquest.get({
    url: DashboardAPI.addressGoodsSale
  })
}

