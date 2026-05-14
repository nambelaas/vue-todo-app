<template>
  <div class="border border-gray-300 rounded-lg px-3 py-2 mt-2" v-if="tasks?.length">
    <ul class="list-group list-group-flush">
      <Task v-for="task in tasks" :task="task" :key="task.id" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import Task from './Task.vue'
const props = defineProps({
  tasks: Array<Object>,
})
</script>
