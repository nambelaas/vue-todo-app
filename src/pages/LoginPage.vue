<template>
  <main style="min-height: 50vh; margin-top: 2rem">
    <h1>Login</h1>
    <button
      class="py-2 px-4 bg-green-500 border border-green-500 rounded-md text-white hover:bg-green-600 cursor-pointer transition-colors"
      @click="handleClick"
    >
      Login
    </button>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClick = () => {
  router.push({ name: 'Tasks' })
}
</script>
