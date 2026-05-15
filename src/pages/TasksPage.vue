<template>
  <main style="min-height: 50vh; margin-top: 2rem">
    <div class="px-6">
      <div class="w-full flex items-center justify-center">
        <div class="overflow-y-auto w-1/2">
          <!-- Add new Task -->
          <NewTask @added="handleAddedTask" />

          <!-- List of uncompleted tasks -->
          <Tasks :tasks="uncompletedTasks" />

          <!-- show toggle button -->
          <div class="flex justify-center mt-2" v-show="showToggleCompleteBtn">
            <button
              class="py-2 px-4 rounded-md border border-gray-400 bg-gray-400 hover:bg-gray-500 cursor-pointer transition-colors text-white"
              @click="($event) => (showCompletedTasks = !showCompletedTasks)"
            >
              <span v-if="!showCompletedTasks">Show Completed</span>
              <span v-else>Hide Completed</span>
            </button>
          </div>

          <!-- list of completed tasks -->
          <Tasks :tasks="completedTasks" :show="completedTasksVisible && showCompletedTasks" />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import Tasks from '@/components/tasks/Tasks.vue'
import { allTasks, createTask } from '@/http/task-api'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import NewTask from '@/components/tasks/NewTask.vue'

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

const showToggleCompleteBtn = computed(
  () => uncompletedTasks.value.length > 0 && completedTasks.value.length > 0,
)

const completedTasksVisible = computed(
  () => uncompletedTasks.value.length === 0 || completedTasks.value.length > 0,
)

const showCompletedTasks = ref(false)

const handleAddedTask = async (newTask: Object) => {
  const { data: createdTask } = await createTask(newTask)
  tasks.value.unshift(createdTask.data)
}
</script>
