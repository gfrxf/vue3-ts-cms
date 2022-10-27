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
        <el-button v-if="isCreate" type="primary" @click="handleNewClick"
          >新建用户</el-button
        >
      </template>
      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button size="small" :type="scope.row.enable ? 'success' : 'danger'">
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

      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            size="small"
            type="primary"
            @click="handleEditClick(scope.row)"
            ><el-icon v-if="isUpdate" size="20"><EditPen /></el-icon
            >编辑</el-button
          >
          <el-button
            v-if="isDelete"
            size="small"
            @click="handleDeleteClick(scope.row)"
            type="primary"
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
import { usePermission } from "@/hooks/usePermission";
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
  emits: ["newBtnClick", "editBtnClick"],
  setup(props, { emit }) {
    const store = useStore();
    // 0.获取操作的权限
    const isCreate = usePermission(props.pageName, "create");
    const isUpdate = usePermission(props.pageName, "update");
    const isDelete = usePermission(props.pageName, "delete");
    const isQuery = usePermission(props.pageName, "query");
    // const userCount = computed(() => store.state.system.userCount);
    // console.log(dataList,'role');
    // 1.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 });
    watch(pageInfo, () => getPageData());
    // 2.发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return;
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
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
    // 5.删除/编辑/新建操作
    const handleDeleteClick = (item: any) => {
      console.log(item);
      store.dispatch("system/deletePageDataAction", {
        pageName: props.pageName,
        id: item.id,
      });
    };
    const handleNewClick = () => {
      emit("newBtnClick");
      console.log("新建");
    };
    const handleEditClick = (item: any) => {
      console.log(item);
      emit("editBtnClick", item);
    };
    return {
      dataList,
      getPageData,
      dataCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      handleDeleteClick,
      handleNewClick,
      handleEditClick,
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
