<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
      <Hycard title="分类商品数量(饼图)">
        <pieEcharts :pieData="categoryGoodsCount"></pieEcharts>

      </Hycard>
      </el-col>
      <el-col :span="10">
        <Hycard title="不同城市商品销量">
<mapEcharts :mapData="addressGoodsSale"></mapEcharts>

        </Hycard>
      </el-col>
      <el-col :span="7">
        <Hycard title="分类商品数量(玫瑰图)">
        <roseEcharts :roseData="categoryGoodsCount"></roseEcharts>
        </Hycard>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <Hycard title="分类商品的销量">
          <lineEcharts v-bind="categoryGoodsSale"></lineEcharts>
        </Hycard>
      </el-col>
      <el-col :span="12">
        <Hycard title="分类商品的收藏">
          <barEcharts v-bind="categoryGoodsFavor"></barEcharts>
        </Hycard>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,onMounted,computed } from "vue";
import {useStore} from '@/store'
import Hycard from '@/base-ui/card'
import {pieEcharts,roseEcharts,lineEcharts,barEcharts,mapEcharts} from '@/components/pageEcharts/index'
export default defineComponent({
  name: "dashboard",
  components:{
    Hycard,
    pieEcharts,
    roseEcharts,
    lineEcharts,
    barEcharts,
    mapEcharts

  },
  setup() {
const store = useStore()
    // 请求数据
store.dispatch('dashboard/getDashboardDataAction')
 // 获取数据
const categoryGoodsCount = computed(()=>{
  return store.state.dashboard.categoryGoodsCount.map((item:any) =>{
    return {
      name:item.name,
      value:item.goodsCount
    }
  })
})
const categoryGoodsSale = computed(() =>{
  const xLabels :string[] =[]
  const values :any[]=[]
  const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
  for(const item of categoryGoodsSale){
    xLabels.push(item.name)
    values.push(item.goodsCount)
  }
  return {xLabels,values}
})
const categoryGoodsFavor = computed(()=>{
  const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for( const item of categoryGoodsFavor){
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
})
const addressGoodsSale = computed(() =>{
  return store.state.dashboard.addressGoodsSale.map((item:any) =>{
    return {name:item.address,value:item.count}
  })
})
    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    };
  },
});
</script>

<style scoped lang="less">
.content-row {
  margin-top: 20px;
}</style>
