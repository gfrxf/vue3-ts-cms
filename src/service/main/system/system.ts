import hyRquest from "@/service/index";
import { IDataType } from "../../type";
export function getPageListData(url: string, queryInfo: any) {
  return hyRquest.post<IDataType>({
    url: url,
    data: queryInfo,
  });
}
export function deletePageData(url: string) {
  return hyRquest.delete<IDataType>({
    url: url,
  });
}
export function createPageData(url: string, newData: any) {
  return hyRquest.post<IDataType>({
    url: url,
    data: newData,
  });
}
export function editPageData(url: string, editData: any) {
  return hyRquest.patch<IDataType>({
    url: url,
    data: editData,
  });
}
