<template>
  <section class="chat-section">
    <chat-component title="Чат с пользователем" :user="USER" />

    <div class="separator" />

    <chat-component title="Чат с администратором" :user="USER" is-admin-chat />
  </section>
</template>

<script setup lang="ts">
import ChatComponent from '@/components/chat-component.vue'
import { USER } from '@/mokData'
</script>

<style scoped>
.chat-section {
  display: flex;
  gap: 24px;
}

.separator {
  width: 2px;
  background-color: #cccccc;
  height: auto;
}
</style>
