<template>
    <div class="roseEcharts">
    <baseEchart :options="options"></baseEchart>
    </div>
</template>
<script setup lang='ts'>
import baseEchart from '@/base-ui/echart';
import {computed} from 'vue'
import { IDataType } from '../types/index';
const props =defineProps<{
  roseData:IDataType
}>()
const options = computed(() =>{
  return{
    legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [10, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: props.roseData
    }
  ]
  }
})
</script>


<style lang='less' scoped>

</style>
