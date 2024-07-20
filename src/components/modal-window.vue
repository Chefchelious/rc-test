<template>
  <div v-if="isOpen" class="modal-backdrop" @click="emit('close-thumbs-modal')">
    <div class="modal-content" @click.stop>
      <div style="text-align: right; margin-bottom: 12px">
        <button class="close-button" @click="emit('close-thumbs-modal')">x</button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close-thumbs-modal'])

watch(
  () => props.isOpen,
  (v) => {
    const body = document.body

    if (v) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = ''
    }
  }
)
</script>

<style scoped>
.close-button {
  border: 2px solid gainsboro;
  padding: 3px 6px;
  border-radius: 4px;
  color: gainsboro;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  overflow: auto;
  width: 60%;
  background: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 1001;
}
</style>
