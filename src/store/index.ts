import { defineStore } from 'pinia'

// 用户状态（权限校验）
export const useUserStore = defineStore({
  id: "userStore",
  // 相当于组件中的data
  state: () => {
    return {
      userId: 'undefined',
      userName: 'undefined',
      userType: 'undefined',
    }
  },
  // 相当于组件中的computed
  getters: {},
  // 相当于组件中的methods
  actions: {
    changeUser(userType: string, userName: string) {
      this.userType = userType
      this.userName = userName
    },
    login(userInfo: any) {
      this.userId = userInfo.userId
      this.userName = userInfo.userName
      this.userType = userInfo.userType
    },
    logout() {
      this.userId = 'undefined'
      this.userName = 'undefined'
      this.userType = 'undefined'
    }
  }
})

// 使用：
// import { useMainStore } from '../store'
// const mainStore = useMainStore()
// console.log(mainStore.count)

// 解构使用：
// import { storeToRefs } from 'pinia'
// const { num1, num2 } = storeToRefs(mainStore)

// 单个修改：mainStore.num1++
// 多个修改：
// mianStore.$patch(state => {
//   state.num1++
//   state.num2.push(6)
// })