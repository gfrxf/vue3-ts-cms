<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrubs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
    <!-- <div>
      {{breadcrubs}}
    </div> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IBreadcrumb } from "../type/index";
export default defineComponent({
  props: {
    breadcrubs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => [],
    },
  },
  setup(props) {
    // console.log(props,'传过来的数据');

    return {};
  },
});
</script>

<style lang="less" scoped></style>
