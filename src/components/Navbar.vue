<template>
  <nav class="w-full py-4 bg-white border-b border-gray-200">
    <div
      class="sm:mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center gap-2"
    >
      <div class="flex flex-row w-full sm:w-auto sm:flex-col justify-between">
        <a href="#" class="text-2xl">
          <span>Todo</span>
          <strong>List</strong>
        </a>
        <button
          class="sm:hidden transition-transform cursor-pointer"
          type="button"
          @click="toggle"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          :aria-expanded="isOpen"
          aria-label="Toggle navigation"
        >
          <svg
            v-if="isOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div
        :class="[
          'grow flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0 w-full sm:w-auto pt-4 sm:pt-0',
          isOpen ? 'block' : 'hidden sm:flex',
        ]"
        id="navbarNav"
      >
        <ul class="flex flex-col sm:flex-row gap-2">
          <li class="nav-item">
            <!-- <router-link :to="{ name: 'Tasks' }" class="">Tasks</router-link> -->
            <a href="#" @click.prevent="$router.push('/tasks')">Tasks</a>
          </li>
          <li class="nav-item">
            <router-link to="#" class="nav-link">Summary</router-link>
          </li>
        </ul>
        <ul
          class="w-full sm:w-auto flex flex-col sm:flex-row space-y-2 sm:space-y-0 border-t pt-4 border-gray-200 sm:border-0 sm:pt-0"
        >
          <li class="">
            <router-link
              :to="{ name: 'Login' }"
              class="block w-full text-center py-2 sm:w-auto sm:px-4 bg-white-200 border border-violet-400 rounded-lg hover:bg-violet-50 font-semibold transition-colors text-violet-700 sm:ms-2"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Register' }"
              class="block w-full text-center py-2 sm:w-auto sm:px-4 bg-green-600 border border-green-600 rounded-lg hover:bg-green-500 font-semibold transition-colors text-white sm:ms-2"
              >Register</router-link
            >
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="block w-full text-center py-2 sm:w-auto sm:px-4 bg-white border border-red-400 rounded-lg hover:bg-red-50 font-semibold transition-colors text-red-700 sm:ms-2"
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>
