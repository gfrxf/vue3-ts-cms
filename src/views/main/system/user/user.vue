<template>
  <div class="user">
    <div class="search">
      <Hyform
      v-bind="searchFormConfig"
      v-model="formData"
      ></Hyform>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";
import Hyform, { IFromItem, IFrom } from "../../../../base-ui/form";
import {searchFormConfig} from './config/search.config'
export default defineComponent({
  name: "user",
  components: { Hyform },
  setup() {
    const formData = ref({
      id:'',
      name:'',
      password:'',
      sport:'',
      createTime:''
    })
    return {
      searchFormConfig,
      formData
    };
  },
});
</script>

<style scoped></style>
