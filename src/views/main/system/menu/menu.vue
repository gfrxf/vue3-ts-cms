<template>
  <div class="menu">
    <pageContent
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import pageContent from "@/components/pageContent";
import { contentTableConfig } from "./config/content.config";
export default defineComponent({
  name: "hy-menu",
  components: {
    pageContent,
  },
  setup() {
    return {
      contentTableConfig,
    };
  },
});
</script>

<style scoped></style>
