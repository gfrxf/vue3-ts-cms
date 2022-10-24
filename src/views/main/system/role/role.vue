<template>
  <div class="role">
    <pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
    <pageContent
      pageName="role"
      :contentTableConfig="contentTableConfig"
    ></pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import pageContent from "@/components/pageContent";
import { searchFormConfig } from "./config/search.config";
import pageSearch from "@/components/pageSearch";
import { contentTableConfig } from "./config/content.config";
export default defineComponent({
  name: "role",
  components: {
    pageContent,
    pageSearch,
  },
  setup() {
    return {
      contentTableConfig,
      searchFormConfig,
    };
  },
});
</script>

<style scoped></style>
