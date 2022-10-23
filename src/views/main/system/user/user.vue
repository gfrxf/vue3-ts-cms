<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
    <div class="container">
      <el-table :data="userList" border style="width: 100%">
   <template v-for="propItem in propList" :key="propItem.prop">
  <el-table-column align="center" v-bind="propItem"></el-table-column>
  </template>

  </el-table>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent,ref,computed} from "vue";
import {useStore} from '@/store'
import pageSearch from '../../../../components/pageSearch/index'
import {searchFormConfig} from './config/search.config'
export default defineComponent({
  name: "user",
  components: { pageSearch },
  setup() {
    const store = useStore()
    const userList = computed(() =>store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount
    )
    const propList =[
    { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      }
    ]
    store.dispatch('system/getPageListAction',{
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    return {
      searchFormConfig,
      userList,
      userCount,
      propList

    };
  },
});
</script>

<style scoped>
.container{
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}

</style>
