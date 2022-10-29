import { ILoginState } from "./login/type";
import { ISystemState } from "./main/system/type";
import {IDashboardState} from './main/analysis/types'
export interface IRootState {
  name: string;
  age: number;
  entireDepartment: any[];
  entireRole: any[];
  entireMenu: any[]
}
export interface IRootWidthMoudle {
  login: ILoginState;
  system: ISystemState;
  dashboard ; IDashboardState
}
export type IStoreType = IRootState & IRootWidthMoudle;
