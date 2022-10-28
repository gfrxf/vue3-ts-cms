<template>
    <div class="pieEcharts">
      <baseEchart :options="options"></baseEchart>
    </div>
</template>
<script setup lang='ts'>
import baseEchart from '@/base-ui/echart';

const options ={
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
}
</script>


<style lang='less' scoped>

</style>
