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
          <!-- List of uncompleted tasks -->
          <Tasks :tasks="uncompletedTasks" />

          <!-- show toggle button -->

          <!-- list of completed tasks -->
          <Tasks :tasks="completedTasks" />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import Tasks from '@/components/tasks/Tasks.vue'
import { allTasks } from '@/http/task-api'
import { computed, onMounted, onUnmounted, ref } from 'vue'
interface Task {
  id: number
  name: string
  is_completed: boolean
}

const tasks = ref([])

onMounted(async () => {
  const { data } = await allTasks()
  tasks.value = data.data
  console.log(data)
})

const uncompletedTasks = computed(() => tasks.value.filter((task) => !task.is_completed))
const completedTasks = computed(() => tasks.value.filter((task) => task.is_completed))
</script>
