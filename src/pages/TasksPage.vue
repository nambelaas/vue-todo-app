<template>
  <main style="min-height: 50vh; margin-top: 2rem">
    <div class="px-6">
      <div class="w-full flex items-center justify-center">
        <div class="overflow-y-auto w-1/2">
          <!-- Add new Task -->
          <div class="relative">
            <input
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="+ Add new task. Press enter to save."
            />
          </div>
          <!-- List of tasks -->
          <div class="border border-gray-300 rounded-lg px-3 py-2 mt-2">
            <ul class="list-group list-group-flush">
              <li class="">
                <div class="flex items-center space-x-2">
                  <input class="" type="checkbox" />
                  <div class="grow" title="Double click the text to edit or remove">
                    <!-- <div class="relative">
                                            <input class="editable-task" type="text" />
                                        </div> -->
                    <span>My First task</span>
                  </div>
                  <div class="task-date">24 Feb 12:00</div>
                </div>
                <div class="mt-2 space-x-2">
                  <button
                    class="border border-yellow-300 rounded-lg py-2 px-4 text-yellow-500 hover:bg-yellow-50 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pencil-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                      />
                    </svg>
                  </button>
                  <button
                    class="border border-red-300 rounded-lg py-2 px-4 text-red-500 hover:bg-red-50 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { allTasks } from '@/http/task-api'
import { onMounted, onUnmounted } from 'vue'

onMounted(async () => {
  const { data } = await allTasks()
  console.log(data)
})
</script>
