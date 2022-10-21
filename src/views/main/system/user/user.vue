<template>
  <div class="user">
    <div class="search">
      <Hyform
      v-bind="searchFormConfig"
      ></Hyform>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hyform, { IFromItem, IFrom } from "../../../../base-ui/form";
import {searchFormConfig} from './config/search.config'
export default defineComponent({
  name: "user",
  components: { Hyform },
  setup() {

    return {
      searchFormConfig
    };
  },
});
</script>

<style scoped></style>
