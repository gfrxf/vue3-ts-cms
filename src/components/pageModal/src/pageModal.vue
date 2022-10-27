<template>
  <div>
    <div class="pagemodal">
      <el-dialog
        destroy-on-close
        v-model="centerDialogVisible"
        title="新建用户"
        width="30%"
        center
      >
        <!-- <Hytable v-bind="modalConfig" v-model="formData"></Hytable> -->
        <Hyform v-bind="modalConfig" v-model="formData"></Hyform>
        <slot></slot>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="handleConfirmClick">
              确定
            </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useStore } from "@/store";
import Hyform from "@/base-ui/form/index";
export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true,
    },
    defaultInfo: {
      type: Object,
      default: () => ({}),
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      require: true,
    },
  },
  components: {
    Hyform,
  },
  setup(props) {
    const store = useStore();
    const centerDialogVisible = ref(false);
    const formData = ref<any>({});
    const handleConfirmClick = () => {
      centerDialogVisible.value = false;
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        console.log("编辑用户");
        store.dispatch("system/editPageDataAction", {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id,
        });
      } else {
        //新建
        console.log("新建用户");
        store.dispatch("system/createPageDataActio", {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo },
        });
      }
    };
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`];
          // console.log(props.modalConfig.formItems);

          // console.log(newValue);

          console.log(item, "item");
          //  console.log(`${item.field}`,'item.field');
          // console.log( formData.value[`${item.field}`]);
        }
      }
    );
    return {
      centerDialogVisible,
      formData,
      handleConfirmClick,
    };
  },
});
</script>

<style lang="less" scoped></style>
