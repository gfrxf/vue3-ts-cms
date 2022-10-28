import * as echarts from 'echarts'
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
