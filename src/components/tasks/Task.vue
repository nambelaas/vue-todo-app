<template>
  <li
    class="flex flex-row items-center justify-between h-10"
    @mouseover="setHover(true)"
    @mouseleave="setHover(false)"
  >
    <div class="flex items-center space-x-2">
      <input class="" type="checkbox" />
      <div class="grow" title="Double click the text to edit or remove">
        <!-- <div class="relative">
                                            <input class="editable-task" type="text" />
                                        </div> -->
        <span>{{ task.name }}</span>
      </div>
      <!-- <div class="task-date">24 Feb 12:00</div> -->
    </div>
    <div :class="['space-x-2', taskHover ? 'block' : 'hidden']">
      <button
        class="border border-yellow-300 rounded-lg py-2 px-4 text-yellow-500 hover:bg-yellow-50 cursor-pointer"
      >
        <IconPencil />
      </button>
      <button
        class="border border-red-300 rounded-lg py-2 px-4 text-red-500 hover:bg-red-50 cursor-pointer"
      >
        <IconTrash />
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import IconPencil from '../icons/IconPencil.vue'
import IconTrash from '../icons/IconTrash.vue'

defineProps({
  task: Object,
})

const taskHover = ref(false)

const setHover = (value: boolean) => {
  taskHover.value = value
}
</script>
