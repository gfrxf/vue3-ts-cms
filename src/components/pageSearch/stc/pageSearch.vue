<template>
  <div class="pageSearch">
    <div class="search">
      <Hyform v-bind="searchFormConfig" v-model="formData">
        <template #header>
          <div class="header">高级检索</div>
        </template>
        <template #footer>
          <div class="btmbox">
            <el-button type="primary" @click="handleResetClick" icon="refresh">重置</el-button>
            <el-button type="primary" icon="search">搜索</el-button>
          </div>
        </template>
      </Hyform>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Hyform, { IFromItem, IFrom } from "../../../base-ui/form";

export default defineComponent({
  components: {
    Hyform,
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const formItems = props.searchFormConfig?.formItems ??[]
    const formOriginData:any ={}
    for(const item of formItems){
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData);
    // 优化当用户点击重置时
    const handleResetClick = () =>{
      // formData.value = formOriginData
      // for(const key in formOriginData){
      //   formData.value[`${key}`] = formOriginData[key]
      // }
      formData.value = formOriginData
    }
    return {
      formData,
      handleResetClick
    };
  },
});
</script>

<style lang="less" scoped>
.header {
  color: tomato;
  font-weight: bold;
}
.btmbox {
  text-align: right;
  margin-right: 20px;
  padding: 0 25px 20px;
}
</style>
