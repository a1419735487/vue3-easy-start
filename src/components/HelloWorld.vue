<template>
  <h1>{{ msg }}</h1>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="emit('alertMsg')">count is: {{ count }}</button>

</template>

<script setup lang="ts">
  import { ref } from 'vue'

  // 接收父组件传值（含默认值）
  interface Props {
    msg?: string
  }
  withDefaults(defineProps<Props>(), {
    msg: 'hello world'
  })

  // 调用父组件方法
  const emit = defineEmits(['alertMsg'])
  // emit('alertMsg')

  const count = ref(0)
</script>

<style lang="less" scoped>
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
</style>
