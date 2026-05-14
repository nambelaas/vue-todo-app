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
              <Task v-for="task in tasks" :task="task" :key="task.id" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import Task from '@/components/tasks/Task.vue'
import { allTasks } from '@/http/task-api'
import { onMounted, onUnmounted, ref } from 'vue'
interface Task {
  id: number
  name: string
  is_completed: boolean
}

const tasks = ref(Array<Task>)

onMounted(async () => {
  const { data } = await allTasks()
  tasks.value = data.data
  console.log(data)
})
</script>
