<template>
  <div class="hyTable">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        align="center"
        width="80"
        label="序号"
      >
      </el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column align="center" v-bind="propItem" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          class="pagination"
          :page-sizes="[10, 20, 30]"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listcount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["selectionChange", "update:page"],
  props: {
    title: {
      type: String,
      default: "",
    },
    listcount: {
      type: Number,
      default: 0,
    },
    listData: {
      type: Array,
      require: true,
    },
    propList: {
      type: Array,
      require: true,
    },
    showIndexColumn: {
      type: Boolean,
      default: false,
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 }),
    },
    childrenProps: {
      type: Object,
      default: () => ({}),
    },
    showFooter: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    // console.log(props.listData, "table");
    const handleSelectionChange = (value: any) => {
      emit("selectionChange", value);
    };
    const handleSizeChange = (pageSize: number) => {
      emit("update:page", { ...props.page, pageSize });
    };
    const handleCurrentChange = (currentPage: number) => {
      emit("update:page", { ...props.page, currentPage });
    };
    return {
      handleSelectionChange,
      handleCurrentChange,
      handleSizeChange,
    };
  },
});
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .pagination {
    text-align: right;
    margin-left: 700px;
  }
}
</style>
