<template>
  <div class="nav-header">
    <el-icon v-if="!isfold" :size="25" class="menu" @click="handelclick"
      ><Open
    /></el-icon>
    <el-icon v-if="isfold" :size="25" @click="handelclick"><TurnOff /></el-icon>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isfold = ref(false);
    const handelclick = () => {
      isfold.value = !isfold.value;
      emit("foldChange", isfold.value);
    };
    return {
      handelclick,
      isfold,
    };
  },
});
</script>

<style lang="less" scoped>
.menu {
  cursor: pointer;
}
</style>
