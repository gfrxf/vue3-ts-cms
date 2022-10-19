import { Module} from 'vuex'
import {ILoginState,ILoginResult,IDataType} from './type'
import {IRootState,} from '../type'
import { IAccount } from '../../service/login/type';
import localCache from '../../utils/cache'
import router from '@/router';
import {accountLoginRequest,requestUserInfoById,
  requestUserMenusByRoled} from '../../service/login/login'
const loginMoudle: Module<ILoginState,IRootState> ={
  namespaced:true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters:{},
  mutations:{
    changeToken(state,token:string){
      state.token = token
    },
    changeUserInfo(state,userInfo:any){
      state.userInfo = userInfo
    },
    changeMenu(state,menu:any){
      state.userMenus = menu
    }
  },
  actions:{
   async accountLoginAction({commit},payload:IAccount){
      // 实现登陆逻辑
      const loginRequest = await accountLoginRequest(payload)
      console.log(loginRequest);

      const {id,token} = loginRequest.data
      commit('changeToken',token)
      localCache.setCache('token',token)

      // 请求用户信息
      const userInfoRsult = await requestUserInfoById(id)
      console.log(userInfoRsult);

      const userInfo = userInfoRsult.data
      localCache.setCache('userInfo',userInfo)
      commit('changeUserInfo',userInfo)
     //用户的菜单
     const userMenuResult = await requestUserMenusByRoled(userInfo.role.id)
     const userMenu = userMenuResult.data
     console.log(userMenu);
     commit('changeMenu',userMenu)
     localCache.setCache('usermenu',userMenu)
    //  跳到首页
    router.push('/main')
    },
    loadLocalLogin({commit}){
      const token = localCache.getCache('token')
      if(token){
        commit('changeToken',token)
      }
      const userInfo = localCache.getCache('userInfo')
      if(token){
        commit('changeUserInfo',userInfo)
      }
      const userMenu = localCache.getCache('userMenu')
      if(token){
        commit('changeMenu',userMenu)
      }

    },
    // 手机登陆
    phoneLoginAction({commit},payload:any){
      console.log("执行手机accla",payload);

    }
  }
}
export default loginMoudle
