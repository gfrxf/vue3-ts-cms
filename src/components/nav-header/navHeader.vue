<template>
  <div class="nav-header">
    <div class="icon">
      <el-icon v-if="!isfold" :size="25" class="menu" @click="handelclick"
        ><Open
      /></el-icon>
      <el-icon class="menu" v-if="isfold" :size="25" @click="handelclick"
        ><TurnOff
      /></el-icon>
    </div>

    <div class="content">
      <div>面包屑</div>
      <userInfo></userInfo>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import userInfo from './src/userInfo.vue'
export default defineComponent({
  emits: ["foldChange"],
  components:{
    userInfo
  },
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
.nav-header {
  display: flex;
  width: 100%;
  .menu {
    cursor: pointer;
  }
  .content {
    flex: 1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

}
</style>
