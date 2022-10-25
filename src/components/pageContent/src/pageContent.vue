<template>
  <div class="pageContent">
    <Hytable
      :listData="dataList"
      v-model:page="pageInfo"
      :listcount="dataCount"
      v-bind="contentTableConfig"
    >
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
      <!-- 在page-content中动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </Hytable>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
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

    // const userCount = computed(() => store.state.system.userCount);
    // console.log(dataList,'role');
    // 1.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 0, pageSize: 10 });
    watch(pageInfo, () => getPageData());
    // 2.发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo,
        },
      });
    };
    getPageData();
    // 3.从vuex中获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    );
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    );
    // 4.获取其他的动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === "status") return false;
        if (item.slotName === "createAt") return false;
        if (item.slotName === "updateAt") return false;
        if (item.slotName === "handler") return false;
        return true;
      }
    );
    return {
      dataList,
      getPageData,
      dataCount,
      pageInfo,
      otherPropSlots,
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
