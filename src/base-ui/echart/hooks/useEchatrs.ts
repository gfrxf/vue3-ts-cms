import * as echarts from 'echarts'
import chinaMapData from '../data/china.json'

echarts.registerMap('china', chinaMapData)
export default function(el:HTMLElement){
  const echartInstance = echarts.init(el)
  const setOptions = (potions:echarts.EChartsCoreOption) =>{
    echartInstance.setOption(potions)
  }
  window.addEventListener('resize',() =>{
    echartInstance.resize()
  })
  const updateSize = ()=>{
    echartInstance.resize()
  }
  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
