<template>
    <div class="hyTable">
      <el-table :data="userList" border style="width: 100%">
        <template v-for="propItem in propList" :key="propItem.prop">
          <el-table-column align="center" v-bind="propItem">
          <template #default = "scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{scope.row[propItem.prop]}}
            </slot>

          </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
</template>
<script  lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  props:{
    userList:{
      type:Array,
      require:true
    },
    propList:{
      type:Array,
      require:true
    },
  },
 setup() {
 return {}
 }
})
</script>



<style lang='less' scoped>

</style>
