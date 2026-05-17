<template>
  <div class="border border-gray-300 rounded-lg px-3 py-2 mt-2" v-if="tasks?.length && show">
    <ul class="list-group list-group-flush">
      <Task
        v-for="task in tasks"
        :task="task"
        :key="task.id"
        @updated="handleUpdatedTask"
        @completed="handleCompletedTask"
        @removed="handleRemovedTask"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/task'
import Task from './Task.vue'

const store = useTaskStore()
const { handleUpdatedTask, handleCompletedTask, handleRemovedTask } = store
const props = defineProps({
  tasks: Array<Object>,
  show: {
    type: Boolean,
    default: true,
  },
})
</script>
