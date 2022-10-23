import menu from '@/router/main/system/menu/menu'
import {RouteRecordRaw} from 'vue-router'
import {IBreadcrumb} from '../base-ui/breadcrumb'
let firstMenu:any = null
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
      if(!firstMenu){
        firstMenu = menu
      }
    }else{
      recurseGetRoute(menu.children)
    }
  }
}
recurseGetRoute(userMenu)
return routes
}
// 匹配路由和面包屑函数相似，重构
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string){
  const breadcrumbs: IBreadcrumb[] = []
  pathMapTomenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}
export function pathMapTomenu(userMenus:any[],currentPath:string,breadcrumbs?:IBreadcrumb[]):any{
  for(const menu of userMenus){
   if(menu.type ===1){
    const findMenu = pathMapTomenu(menu.children ?? [],currentPath)
    if(findMenu){
      breadcrumbs?.push({ name: menu.name })
      breadcrumbs?.push({ name: findMenu.name })
      return findMenu
    }

   }
    else if(menu.type === 2 && menu.url === currentPath){
      return menu
    }
  }
}
// 匹配对应路由的函数
// export function pathMapTomenu (userMenus:any[],currentPath:string) {
// for(const menu of userMenus){
//   // console.log(menu);
//   // console.log(currentPath,'当前路径');

//  if(menu.type ===1){
//   const findMenu = pathMapTomenu(menu.children ?? [],currentPath)
//   if(findMenu){
//     return findMenu
//   }

//  }
//   else if(menu.type === 2 && menu.url === currentPath){
//     return menu
//   }
// }
// }
// // 匹配面包屑函数
// export function pathMapBreakcrumbs(userMenus:any[],currentPath:string){
//   const breadcrumbs:IBreadcrumb[] = []
//   for(const menu of userMenus){
//     // console.log(menu);
//     // console.log(currentPath,'当前路径');

//    if(menu.type ===1){
//     const findMenu = pathMapTomenu(menu.children ?? [],currentPath)
//     if(findMenu){
//       breadcrumbs.push({name:menu.name,path:menu.url})
//       breadcrumbs.push({name:findMenu.name,path:findMenu.url})
//       return findMenu
//     }

//    }
//     else if(menu.type === 2 && menu.url === currentPath){
//       return menu
//     }
//   }
// }
export {firstMenu}
