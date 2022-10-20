import { ILoginState } from "./login/type";
export interface IRootState {
  name: string;
  age: number;
}
export interface IRootWidthMoudle {
  login: ILoginState;
}
export type IStoreType = IRootState & IRootWidthMoudle;
