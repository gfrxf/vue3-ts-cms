import { ILoginState } from "./login/type";
import { ISystemState } from './main/system/type'
export interface IRootState {
  name: string;
  age: number;
}
export interface IRootWidthMoudle {
  login: ILoginState;
  system: ISystemState
}
export type IStoreType = IRootState & IRootWidthMoudle;
