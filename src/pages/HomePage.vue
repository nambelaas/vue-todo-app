<template>
  <main
    style="min-height: 100vh; margin-top: 2rem"
    class="w-full flex flex-col justify-center items-center"
  >
    <h1 class="font-bold text-4xl">Stay organized, be productive</h1>
    <div class="flex flex-col justify-center items-center mt-2">
      <p>Organize your ideas, and be productive everyday.</p>
      <div class="flex gap-3 mt-5">
        <router-link
          :to="{ name: 'Register' }"
          class="py-2 px-4 bg-green-500 text-white hover:bg-green-600 rounded-md transition-colors"
          >Sign Up</router-link
        >
        <router-link
          :to="{ name: 'Login' }"
          class="py-2 px-4 bg-white border border-green-500 hover:border-green-100 hover:bg-green-100 rounded-md transition-colors"
          >Sign In</router-link
        >
      </div>
    </div>
  </main>
</template>
