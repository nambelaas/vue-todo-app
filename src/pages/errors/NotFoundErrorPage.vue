<template>
  <div class="w-full h-lvh flex flex-col items-center justify-center">
    <h1 class="text-9xl font-bold text-gray-400">404</h1>
    <p>
      Sorry, the page <code>{{ $route.params.notFound }}</code> you're looking for is not found
    </p>
    <router-link
      :to="{ name: 'Tasks' }"
      class="mt-4 py-2 px-4 bg-green-500 rounded-md hover:bg-green-600 text-white transition-color"
      >Back to your task</router-link
    >
  </div>
</template>
