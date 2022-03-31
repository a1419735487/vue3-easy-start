<template>
  <img alt="Vue logo" src="@/assets/img/logo.png" />
  <!-- 组件 -->
  <HelloWorld :msg="str" v-on:alertMsg="alertMsg"/>
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
  import { ref, reactive, onMounted, onUnmounted, watch, getCurrentInstance } from "vue"
  import { useRoute, useRouter } from 'vue-router'
  
  const route = useRoute()
  // 获取url参数————route.params
  const router = useRouter()
  // 路由跳转————router.push

  const str = ref('vue3-easy-start')
  const obj = reactive({
    key1: '',
    key2: 0
  })

  const alertMsg = () => {
    alert('haha, forget it')
  }

  watch(
    () => str.value,
    (newValue) => {
      console.log(newValue)
    },
    {deep: true}
  )

  onMounted(() => {
    // @ts-ignore
    const { proxy } = getCurrentInstance()
    proxy.$api.testAPI.getNoData()
  })
  onUnmounted(() => {})
</script>

<style lang="less" scoped>

</style>