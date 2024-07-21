<template>
  <div class="message-wrapper" :class="{ 'sender-message': message.author.id === currentUserId }">
    <profile-image :image-path="message.author.profileImage" />

    <div class="message">
      <p>
        {{ message.message }}
      </p>
      <span>{{ getMessageDate(message.createdAt) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileImage from '@/components/pfofile-image.vue'
import { getMessageDate } from '@/composable/utils'
import type { IMessageItem } from '@/types'

defineProps<{
  message: IMessageItem
  currentUserId: string
}>()
</script>

<style scopped>
.message-wrapper {
  display: flex;
  gap: 19px;
  align-items: flex-start;
  padding: 14px;
}

.sender-message {
  background-color: #f9f7f2;
}

.message-wrapper + .message-wrapper {
  margin-top: 18px;
}

.message p {
  font-size: 15px;
  line-height: 24px;
  margin-bottom: 4px;
}

.message span {
  font-size: 11px;
  line-height: 25px;
  color: #9d9d9d;
}
</style>
