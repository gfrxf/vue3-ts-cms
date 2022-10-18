<template>
  <div class="login">
    <loginPannel></loginPannel>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import loginPannel from "./cpns/loginPannel.vue";

export default defineComponent({
  components: {
    loginPannel,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.login {
  display: flex;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login-bg.svg");
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
