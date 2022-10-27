<template>
  <div class="user">
    <pageSearch
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></pageSearch>
    <pageContent
      ref="pageContentRef"
      pageName="users"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handelNewData"
      @editBtnClick="handelEditData"
    ></pageContent>
    <pageModal
      :defaultInfo="defaultInfo"
      pageName="users"
      :modalConfig="modalConfigRef"
      ref="pageModalRef"
    ></pageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "@/store";
import pageModal from "@/components/pageModal/index";
import pageSearch from "../../../../components/pageSearch/index";
import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";
import Hytable from "@/base-ui/table";
import { usePageSearch } from "@/hooks/usePageSearch";
import pageContent from "@/components/pageContent";
import { usePageModal } from "@/hooks/usePageModal";
export default defineComponent({
  name: "user",
  components: { pageSearch, Hytable, pageContent, pageModal },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] =
      usePageSearch();
    // pageModal相关的hook逻辑
    // 1.处理密码的逻辑
    const newCallBack = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === "password"
      );
      passwordItem!.isHidden = false;
      console.log(passwordItem.isHidden, "新增用户");
    };
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === "password"
      );
      passwordItem!.isHidden = true;
      console.log(passwordItem.isHidden, "编辑用户");
    };
    // 2.动态添加部门和角色列表
    const store = useStore();
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === "departmentId"
      );
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id };
      });
      const roleItem = modalConfig.formItems.find(
        (item) => item.field === "roleId"
      );
      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id };
      });
      return modalConfig;
    });

    // 3.调用hook获取公共变量和函数
    const [pageModalRef, defaultInfo, handelNewData, handelEditData] =
      usePageModal(newCallBack, editCallback);

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modalConfig,
      pageModalRef,
      handelNewData,
      handelEditData,
      defaultInfo,
      modalConfigRef,
    };
  },
});
</script>

<style scoped>
.container {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
