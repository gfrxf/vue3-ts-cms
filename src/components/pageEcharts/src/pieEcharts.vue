<template>
    <div class="pieEcharts">
      <baseEchart :options="options"></baseEchart>
    </div>
</template>
<script setup lang='ts'>
import {computed} from 'vue'
import baseEchart from '@/base-ui/echart';
import { IDataType } from '../types/index';
const props = defineProps<{
pieData:IDataType
}>()
const options = computed(() =>{
  return {
  title: {
    text: '分类数据',
    // subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '分类数据',
      type: 'pie',
      radius: '50%',
      data: props.pieData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
})
</script>


<style lang='less' scoped>

</style>
