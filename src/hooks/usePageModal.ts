import { ref } from "vue";
import pageModal from "@/components/pageModal/index";
type CallbackFn = (item?:any) => void;
export function usePageModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof pageModal>>();
  const handelNewData = () => {
    defaultInfo.value = {};
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true;
    }
    newCb && newCb();
  };
  const defaultInfo = ref({});
  const handelEditData = (item: any) => {
    defaultInfo.value = { ...item };
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true;
    }
    editCb && editCb(item);
  };
  return [pageModalRef, defaultInfo, handelNewData, handelEditData];
}
