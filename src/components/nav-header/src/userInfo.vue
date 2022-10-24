<template>
  <div>
    <div class="userInfo">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            class="avatar"
            :size="25"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          />
          <span>{{ name }}</span>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="SwitchButton">退出登录</el-dropdown-item>
            <el-dropdown-item icon="User">用户信息</el-dropdown-item>
            <el-dropdown-item icon="Tools">系统管理</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "../../../store";
export default defineComponent({
  setup() {
    const store = useStore();
    const name = computed(() => store.state.login.userInfo.name);
    return {
      name,
    };
  },
});
</script>

<style lang="less" scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
  .avatar {
    margin-right: 10px;
  }
}
</style>
