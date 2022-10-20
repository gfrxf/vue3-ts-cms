import {RouteRecordRaw} from 'vue-router'
export function  mapMenusToRoutes(userMenu:any[]):RouteRecordRaw[]{
const routes:RouteRecordRaw[] = []
const allRoutes:RouteRecordRaw[] = []
//1、先去加载默认所有的routes

const routeFiles = require.context('../router/main',true,/\.ts/)
routeFiles.keys().forEach((key)=>{
  // console.log(key);
  // console.log(key.split('.'));

  const route =require( '../router/main' + key.split('.')[1])
// console.log(route);

  allRoutes.push(route.default)

})
// console.log(allRoutes);

//2、根据菜单获取的需要添加的routes
// usernemu
// type == 1 => children => type === 1 => children ===>type ===2 才能去找我们URL去匹配路由

// type === 2 => url => route
const recurseGetRoute = (menus:any[]) =>{
  for(const menu of menus ){
    if(menu.type === 2){
      const route = allRoutes.find((route)=> route.path === menu.url)
      if(route) routes.push(route)
    }else{
      recurseGetRoute(menu.children)
    }
  }
}
recurseGetRoute(userMenu)
return routes
}
