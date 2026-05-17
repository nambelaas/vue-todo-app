<template>
  <div class="relative">
    <input
      type="text"
      class="w-full px-3 py-2 border border-gray-300 rounded-lg"
      placeholder="+ Add new task. Press enter to save."
      @keydown.enter="addNewTask"
    />
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/task'
import { reactive } from 'vue'

const store = useTaskStore()
const { handleAddedTask } = store

const newTaskData = reactive({
  name: '',
  is_completed: false,
})

const addNewTask = async (event: Event) => {
  const target = event.target as HTMLInputElement

  if (target.value.trim()) {
    newTaskData.name = target.value
    target.value = ''
    await handleAddedTask(newTaskData)
  }
}
</script>
