<template>
    <div class="baseEchart">
      <div ref="echartDivRef"  :style="{ width: width, height: height }"></div>

    </div>
</template>
<script setup  lang='ts'>
import {ref,onMounted} from 'vue'
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchatrs'


// 定义props
const props = withDefaults(
  defineProps<{
    width?:string,
    height?:string,
    options:EChartsOption
  }>(),{
    width:'100%',
    height:'360px'
  })
  const echartDivRef = ref<HTMLElement>()
onMounted(()=>{
  const { setOptions } = useEchart(echartDivRef.value!)
  setOptions(props.options)
})

</script>



<style lang='less' scoped>

</style>
