<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
      <Hycard title="分类商品数量(饼图)">
        <pieEcharts></pieEcharts>

      </Hycard>
      </el-col>
      <el-col :span="10">
        <Hycard title="不同城市商品销量"></Hycard>
      </el-col>
      <el-col :span="7">
        <Hycard title="分类商品数量(玫瑰图)"></Hycard>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <Hycard title="分类商品的销量">

        </Hycard>
      </el-col>
      <el-col :span="12">
        <Hycard title="分类商品的收藏">

        </Hycard>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,onMounted,computed } from "vue";
import {useStore} from '@/store'
import Hycard from '@/base-ui/card'
import {pieEcharts} from '@/components/pageEcharts/index'
export default defineComponent({
  name: "dashboard",
  components:{
    Hycard,
    pieEcharts

  },
  setup() {
const store = useStore()
store.dispatch('dashboard/getDashboardDataAction')

    return {

    };
  },
});
</script>

<style scoped lang="less">
.content-row {
  margin-top: 20px;
}</style>
