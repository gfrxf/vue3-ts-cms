<template>
  <div class="login-account">
    <el-form label-width="60px" ref="formRef" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { trigger } from "@vue/reactivity";
import { defineComponent, reactive, ref } from "vue";
import { ElForm } from "element-plus";
import rules from "../config/account-config";
import localCache from '../../../utils/cache'
import {useStore} from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('name'),
      password:localCache.getCache('password'),
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = (iskeepPassword:boolean
    ) => {
      console.log("真正开始登陆");
      formRef.value?.validate((valid:boolean) => {
       if(valid){
        // 判断是否要记住密码
        if(iskeepPassword){
          // 进行本地缓存
          localCache.setCache('name',account.name)
          localCache.setCache('password',account.password)

        }
        else{
          localCache.deleCache('name')
          localCache.deleCache('password')
        }
        // 登陆验证
        store.dispatch('login/accountLoginAction',{...account})
       }
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
