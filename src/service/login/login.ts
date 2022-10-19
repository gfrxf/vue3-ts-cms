import hyRquest from "../index";
import {IAccount,ILoginResult,IDataType} from './type'
enum loginAPI{
  AccountLogin = '/login',
  loginUserInfo = '/users/',
  UserMeus = '/role/'

}
export function accountLoginRequest(account:IAccount){
  return hyRquest.post<IDataType<ILoginResult>>({
    url:loginAPI.AccountLogin,
    data:account
  })
}
export function requestUserInfoById(id:number){
  return hyRquest.get<IDataType>({
    url:loginAPI.loginUserInfo + id

  })
}
export function requestUserMenusByRoled(id:number){
return hyRquest.get<IDataType>({
  url:loginAPI.UserMeus + id + '/menu'
})
}
