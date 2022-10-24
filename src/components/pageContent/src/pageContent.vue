<template>
  <div class="pageContent">
    <Hytable :listData="dataList" v-bind="contentTableConfig">
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
      </template>
      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button size="mini" :type="scope.row.enable ? 'success' : 'danger'">
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-button>
      </template>
      <template #createAt="scope">
        <strong>
          {{ $filters.formatTime(scope.row.createAt) }}
        </strong>
      </template>
      <template #updateAt="scope">
        <strong>
          {{ $filters.formatTime(scope.row.updateAt) }}
        </strong>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button size="small" type="text"
            ><el-icon size="20"><EditPen /></el-icon>编辑</el-button
          >
          <el-button size="mini" type="text"
            ><el-icon size="20"><Delete /></el-icon>删除</el-button
          >
        </div>
      </template>
    </Hytable>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import Hytable from "@/base-ui/table";
import { useStore } from "@/store";
export default defineComponent({
  components: {
    Hytable,
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true,
    },
    pageName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    );
    // const userCount = computed(() => store.state.system.userCount);
    // console.log(dataList,'role');

    store.dispatch("system/getPageListAction", {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10,
      },
    });
    return {
      dataList,
    };
  },
});
</script>

<style lang="less" scoped>
.pageContent {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
