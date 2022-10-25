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
    ></pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import pageSearch from "../../../../components/pageSearch/index";
import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import Hytable from "@/base-ui/table";
import { usePageSearch } from "@/hooks/usePageSearch";
import pageContent from "@/components/pageContent";
export default defineComponent({
  name: "user",
  components: { pageSearch, Hytable, pageContent },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] =
      usePageSearch();
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
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
