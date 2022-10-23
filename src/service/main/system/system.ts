import hyRquest from "@/service/index";
import {IDataType} from '../../type'
export function getPageListData(url:string,queryInfo:any){
 return hyRquest.post<IDataType>({
  url:url,
  data:queryInfo
})
}
