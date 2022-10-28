<template>
  <div class="role">
    <pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
    <pageContent
      pageName="role"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handelNewData"
      @editBtnClick="handelEditData"
    ></pageContent>
    <pageModal :modalConfig="modalConfig"
    :defaultInfo="defaultInfo"
    ref="pageModalRef"
    pageName="role"
    :otherInfo="otherInfo"
    >
   <div class="menutree">
    <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        >
        </el-tree>
   </div>

  </pageModal>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { defineComponent,computed ,ref,nextTick} from "vue";
import pageContent from "@/components/pageContent";
import { searchFormConfig } from "./config/search.config";
import pageSearch from "@/components/pageSearch";
import { ElTree } from 'element-plus'
import pageModal from "@/components/pageModal";
import {usePageModal} from '@/hooks/usePageModal'
import {modalConfig} from './config/modal.config'
import { contentTableConfig } from "./config/content.config";
import {menuMapLeafKeys} from '@/utils/mapMenu'

// import {useStore} from 'vuex'
export default defineComponent({
  name: "role",
  components: {
    pageContent,
    pageSearch,
    pageModal
  },
  setup() {
      // 1.处理pageModal的hook
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback =(item:any) =>{
      // console.log(item);

    const leafKeys =  menuMapLeafKeys(item.menuList)
    // console.log(leafKeys,'leafkeys');
    nextTick(() => {
        console.log(elTreeRef.value)
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })


    }
    const [pageModalRef, defaultInfo, handelNewData, handelEditData] =usePageModal(undefined,  editCallback)
    const store = useStore()

    const otherInfo = ref({})


    const menus = computed(() => store.state.entireMenu)
    const handleCheckChange =(data1: any, data2: any) =>{
      // console.log(data1);
      // console.log(data2);
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys,...halfCheckedKeys]
      otherInfo.value = {menuList}


    }



    return {
      contentTableConfig,
      searchFormConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
       handelNewData,
       handelEditData,
       menus,
       otherInfo,
       handleCheckChange,
       elTreeRef

    };
  },
});
</script>

<style scoped lang="less">
.menutree{
  margin-left: 65px;
}
</style>
