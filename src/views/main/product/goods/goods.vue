<template>
  <div class="goods">
    <pageContent :contentTableConfig="contentTableConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :z-index="999999"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          :preview-teleported="true"
        >
        </el-image>
      </template>
      <template #oldPrice="scope">{{ "¥" + scope.row.oldPrice }}</template>
    </pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import pageContent from "@/components/pageContent";
import { contentTableConfig } from "./config/content.config";
export default defineComponent({
  name: "goods",
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
