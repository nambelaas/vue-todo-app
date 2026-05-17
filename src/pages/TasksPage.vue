<template>
  <main style="min-height: 50vh; margin-top: 2rem">
    <div class="px-6">
      <div class="w-full flex items-center justify-center">
        <div class="overflow-y-auto w-1/2">
          <!-- Add new Task -->
          <NewTask @added="handleAddedTask" />

          <!-- List of uncompleted tasks -->
          <Tasks
            :tasks="uncompletedTasks"
            @updated="handleUpdatedTask"
            @completed="handleCompletedTask"
            @removed="handleRemovedTask"
          />

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
          <Tasks
            :tasks="completedTasks"
            :show="completedTasksVisible && showCompletedTasks"
            @completed="handleCompletedTask"
            @removed="handleRemovedTask"
          />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import Tasks from '@/components/tasks/Tasks.vue'
import { allTasks, completeTask, createTask, removeTask, updateTask } from '@/http/task-api'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import NewTask from '@/components/tasks/NewTask.vue'
import { useTaskStore } from '@/stores/task'
import { storeToRefs } from 'pinia'

interface Task {
  id: number
  name: string
  is_completed: boolean
}

const store = useTaskStore()
const { completedTasks, uncompletedTasks } = storeToRefs(store)
const { fetchAllTasks } = store

// store.$patch({
//   task: {
//     name: 'New First Task',
//     is_completed: true,
//   },
// })

const tasks = ref([])

onMounted(async () => {
  fetchAllTasks()
})

// const uncompletedTasks = computed(() => tasks.value.filter((task) => !task.is_completed))
// const completedTasks = computed(() => tasks.value.filter((task) => task.is_completed))

const showToggleCompleteBtn = computed(
  () => uncompletedTasks.value.length > 0 || completedTasks.value.length > 0,
)

const completedTasksVisible = computed(
  () => uncompletedTasks.value.length === 0 || completedTasks.value.length > 0,
)

const showCompletedTasks = ref(false)

const handleAddedTask = async (newTask: Object) => {
  const { data: createdTask } = await createTask(newTask)
  tasks.value.unshift(createdTask.data)
}

const handleUpdatedTask = async (task: Object) => {
  const { data: updatedTask } = await updateTask(task.id, {
    name: task.name,
  })

  const currentTask = tasks.value.find((item) => item.id === task.id)
  currentTask.name = updatedTask.data.name
}

const handleCompletedTask = async (task: Object) => {
  const { data: updatedTask } = await completeTask(task.id, {
    is_completed: task.is_completed,
  })

  const currentTask = tasks.value.find((item) => item.id === task.id)
  currentTask.is_completed = updatedTask.data.is_completed
}

const handleRemovedTask = async (task: Object) => {
  const { data: updatedTask } = await removeTask(task.id)

  const index = tasks.value.findIndex((item) => item.id === task.id)

  tasks.value.splice(index, 1)
}
</script>
