<template>
  <li
    class="flex flex-row items-center justify-between h-10"
    @mouseover="setHover(true)"
    @mouseleave="setHover(false)"
  >
    <div class="flex items-center space-x-2">
      <input
        class=""
        :class="completedClass"
        type="checkbox"
        :checked="task?.is_completed"
        @change="markTaskAsCompleted"
      />
      <div
        class="grow"
        :class="completedClass"
        title="Double click the text to edit or remove"
        @dblclick="isEdit = true"
      >
        <div class="relative" v-if="isEdit">
          <input
            class="border border-gray-200 rounded-md"
            type="text"
            @keyup.esc="undo"
            @keyup.enter="handleUpdateTask"
            v-model="editingTask"
            v-focus
          />
        </div>
        <span v-else>{{ task?.name }}</span>
      </div>
      <!-- <div class="task-date">24 Feb 12:00</div> -->
    </div>
    <TaskActions
      :show-action="taskHover"
      @edit="isEdit = true"
      v-show="!isEdit"
      @remove="removeTask"
    />
  </li>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskActions from './TaskActions.vue'

const props = defineProps({
  task: Object,
})

const emit = defineEmits(['updated', 'completed', 'removed'])

const taskHover = ref(false)

const setHover = (value: boolean) => {
  taskHover.value = value
}

const completedClass = computed(() => {
  return props.task?.is_completed ? 'text-gray-500 line-through' : ''
})

const isEdit = ref(false)
const editingTask = ref(props.task?.name)

const vFocus = {
  mounted: (el: HTMLElement) => {
    el.focus()
  },
}

const handleUpdateTask = (event: Event) => {
  const target = event.target as HTMLInputElement

  const updatedTask = { ...props.task, name: target.value }
  isEdit.value = false
  emit('updated', updatedTask)
}

const markTaskAsCompleted = (event: Event) => {
  const target = event.target as HTMLInputElement

  const updatedTask = { ...props.task, is_completed: !props.task?.is_completed }
  emit('completed', updatedTask)
}

const undo = () => {
  isEdit.value = false
  editingTask.value = props.task?.name
}

const removeTask = () => {
  if(confirm("Are you sure delete this task?")){
    emit('removed', props.task)
  }
}
</script>
