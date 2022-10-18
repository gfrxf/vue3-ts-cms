<template>
  <div class="login-account">
    <el-form label-width="60px" ref="formRef" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { trigger } from "@vue/reactivity";
import { defineComponent, reactive, ref } from "vue";
import { ElForm } from "element-plus";
import rules from "../config/account-config";
export default defineComponent({
  setup() {
    const account = reactive({
      name: "",
      password: "",
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = () => {
      console.log("真正开始登陆");
      formRef.value?.validate((valid) => {
        console.log(valid);
      });
    };

    return {
      account,
      rules,
      ElForm,
      loginAction,
      formRef,
    };
  },
});
</script>

<style lang="less" scoped></style>
