<template>
  <div class="login-pannel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch class="demo-tabs" v-model="currentTab">
      <el-tab-pane class="" name="account">
        <template #label>
          <span class="custom-tabs-label">
            <!-- <el-icon><User /></el-icon> -->
            <span class="txt1"
              ><el-icon class="ficon"><User /></el-icon>账号登陆</span
            >
          </span>
        </template>
        <loginAccount ref="accountRef"></loginAccount>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <span class="txt2"
              ><el-icon class="phone"><Iphone /></el-icon>手机登陆</span
            >
          </span>
        </template>
        <loginPhone ref="phoneRef"></loginPhone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="iskeepPassword">记住密码</el-checkbox>
      <el-link class="link" type="primary">忘记密码</el-link>
    </div>
    <el-button class="btn" @click="handelClick" type="primary"
      >立即登陆</el-button
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import loginAccount from "./loginAccount.vue";
import loginPhone from "./loginPhone.vue";
import { Calendar, User, Iphone } from "@element-plus/icons-vue";
export default defineComponent({
  components: {
    User,
    Iphone,
    loginAccount,
    loginPhone,
  },
  setup() {
    // 定义属性
    const iskeepPassword = ref(true);
    const accountRef = ref<InstanceType<typeof loginAccount>>();
    const phoneRef = ref<InstanceType<typeof loginPhone>>();
    const currentTab = ref<string>("account");
    // 定义方法
    const handelClick = () => {
      if (currentTab.value === "account") {
        console.log("账号立即登陆", accountRef.value);
        accountRef.value?.loginAction(iskeepPassword.value);
      } else {
        console.log("phoneRef调用loginAction");
        console.log(phoneRef.value);

        phoneRef.value?.loginAction();
      }
    };

    return {
      iskeepPassword,
      handelClick,
      accountRef,
      currentTab,
      phoneRef,
    };
  },
});
</script>

<style lang="less" scoped>
.login-pannel {
  width: 320px;
  margin-bottom: 150px;
  .title {
    text-align: center;
  }
  // .demo-tabs{
  //   width: 600px;
  // }
  .txt1 {
    text-align: center;
    position: relative;
  }
  .txt1 /deep/ .ficon > svg {
    position: absolute;
    top: -5%;
    left: -37%;
    width: 20px;
    height: 20px;
  }
  .txt2 {
    position: relative;
  }
  .txt2 /deep/ .phone > svg {
    position: absolute;
    top: -5%;
    left: -37%;
    width: 20px;
    height: 20px;
  }
  .account-control {
    display: flex;
  }
  .link {
    margin-left: 184px;
  }
  .btn {
    width: 100%;
    margin-top: 15px;
  }
}
</style>
