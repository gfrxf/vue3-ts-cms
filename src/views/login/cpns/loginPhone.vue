<template>
  <div class="login-account">
    <el-form :rules="rules" label-width="60px" :model="phone">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <div class="get-code">
          <el-input v-model="phone.password"></el-input>
          <el-button class="get-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { trigger } from "@vue/reactivity";
import { defineComponent, reactive } from "vue";
import { ElForm } from "element-plus";
import rules from "../config/phone-config ";
export default defineComponent({
  setup() {
    const phone = reactive({
      number: "",
      password: "",
    });
    // 编写规则

    return {
      phone,
      rules,
      ElForm,
    };
  },
});
</script>

<style lang="less" scoped>
.get-code {
  display: flex;
  flex-wrap: nowrap;
}
.get-btn {
  margin-left: 8px;
}
</style>
