import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { useUserStore } from '../store'

const routes: RouteRecordRaw[] = [
  {
    name: "Home",
    path: "/Home",
    component: () => import("@/pages/Home/index.vue")
  },
  {
    name: "Admin",
    path: "/Admin",
    component: () => import("@/pages/Admin/index.vue"),
    // （权限校验）
    meta: {
      isAdmin: true
    }
  },
  // 重定向
  {
    path: "/:pathMatch(.*)",
    redirect: '/Home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由前置（权限校验）
// router.beforeEach(async (to, from, next) => {
//   if (to.path === '/Login') {
//     next()
//   } else {
//     isLogin()

//     function isLogin() {
//       const user = useUserStore()
//       if (user.userId && user.userName && user.userType) {
//         if (!to.meta.isAdmin) {
//           isAdmin()
//         } else {
//           next()
//         }
//       } else {
//         alert('请先登录')
//         next('/Login')
//       }
//     }
//     function isAdmin() {
//       const user = useUserStore()
//       if (user.userType === 'admin') {
//         next()
//       } else {
//         alert('暂无权限，即将返回首页')
//         next('/Home')
//       }
//     }
//   }
// })

export default router