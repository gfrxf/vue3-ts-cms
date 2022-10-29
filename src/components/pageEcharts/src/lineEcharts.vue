<template>
    <div class="lineEcharts">
      <baseEchart :options="options"></baseEchart>
    </div>
</template>
<script setup lang='ts'>
import baseEchart from '@/base-ui/echart';
import {computed,withDefaults} from 'vue'
import { IDataType } from '../types/index';
const props =withDefaults( defineProps<{
  lineData:IDataType
  title?:string
  xLabels: string[]
    values: any[]
}>(),{
  title:''
})

const options = computed(() =>{
  return{
    title:  props.title,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {

  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: props.xLabels
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
   
    {
      name: '分别销量',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data:  props.values
    },

  ]
  }
})
</script>


<style lang='less' scoped>

</style>
