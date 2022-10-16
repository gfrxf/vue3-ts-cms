<template>
  <div>
    <router-link to="/login">登陆</router-link>
    <router-link to="/main">首页</router-link>
    <router-view></router-view>
    <h2>{{ $store.state.name }}</h2>
    <el-button>哈哈哈</el-button>
    <el-button type="success">hhh</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import{ElButton} from 'element-plus'

export default defineComponent({
  name: "App",
  // components: {
  //   ElButton
  // },
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
