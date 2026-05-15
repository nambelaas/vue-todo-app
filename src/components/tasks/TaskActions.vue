<template>
  <div :class="['space-x-2', showAction ? 'block' : 'hidden']">
    <button
      class="border border-yellow-300 rounded-lg py-2 px-4 text-yellow-500 hover:bg-yellow-50 cursor-pointer"
      @click="emit('edit')"
    >
      <IconPencil />
    </button>
    <button
      class="border border-red-300 rounded-lg py-2 px-4 text-red-500 hover:bg-red-50 cursor-pointer"
      @click="emit('remove')"
    >
      <IconTrash />
    </button>
  </div>
</template>

<script setup lang="ts">
import IconPencil from '../icons/IconPencil.vue'
import IconTrash from '../icons/IconTrash.vue'

defineProps({
  showAction: Boolean,
})

const emit = defineEmits(['edit', 'remove'])
</script>
