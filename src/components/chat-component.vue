<template>
  <div class="chat-wrapper">
    <h3 class="title">{{ title }}</h3>

    <div class="chat">
      <div class="chat-header">
        <profile-image :image-path="recipient.profileImage" />
        <div v-if="recipient.specialization" class="user-initials">
          <p>{{ recipient.name }}</p>
          <p><img :src="ICONS.flagIcon" alt="flag" /> {{ recipient.specialization }}</p>
        </div>

        <div v-if="recipient.rating" class="star-rating">
          <button v-for="(star, index) in 5" :key="index">
            <img :src="getStarIcon(index + 1, recipient.rating)" alt="star" />
          </button>
        </div>
      </div>

      <div class="chat-container scrollbar-style">
        <div class="message-list">
          <div
            v-for="message in messages"
            :key="message.id"
            class="message-wrapper"
            :class="{ 'sender-message': message.author.id === getCurrentUserId() }"
          >
            <profile-image :image-path="message.author.profileImage" />

            <div class="message">
              <p>
                {{ message.message }}
              </p>
              <span>{{ getMessageDate(message.createdAt) }}</span>
            </div>
          </div>
        </div>
      </div>

      <form class="chat-form" @submit.prevent="sendMessage">
        <profile-image :image-path="isAdminChat ? user.profileImage : ADMIN.profileImage" />

        <div class="input-wrapper">
          <input v-model="message" class="input" type="text" placeholder="Напишите сообщение..." />
          <span :class="['helper-text', { 'helper-text-active': isValidationError }]"
            >обязательное поле</span
          >
        </div>

        <button class="send-btn">
          <img :src="ICONS.sendIcon" alt="send" />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ICONS } from '@/composable/icons'
import { getMessageDate } from '@/composable/utils'
import type { IMessageItem, IUser } from '@/types'
import { getStarIcon } from '@/composable/utils'
import { useChatStore } from '@/stores/chat-store'
import { storeToRefs } from 'pinia'
import { ADMIN } from '@/mokData'
import ProfileImage from '@/components/pfofile-image.vue'

const props = withDefaults(
  defineProps<{
    title: string
    user: IUser
    isAdminChat?: boolean
  }>(),
  {
    isAdminChat: false
  }
)

const message = ref('')
const isValidationError = ref(false)
const messageStore = useChatStore()
const { messages } = storeToRefs(messageStore)

const recipient = ref<IUser>(props.isAdminChat ? ADMIN : props.user)

const getCurrentUserId = () => {
  return props.isAdminChat ? props.user.id : ADMIN.id
}

const sendMessage = () => {
  isValidationError.value = false

  if (!message.value.trim()) return (isValidationError.value = true)

  const messageItem: IMessageItem = {
    id: String(Date.now()),
    author: props.isAdminChat ? props.user : ADMIN,
    message: message.value,
    createdAt: new Date().toISOString()
  }

  messageStore.addNewMessage(messageItem)

  message.value = ''
}
</script>

<style scoped>
.chat-wrapper {
  flex: 1;
}

.title {
  font-size: 29px;
  font-weight: bold;
  letter-spacing: 3%;
  margin-bottom: 25px;
}

.chat {
  position: relative;
  background-color: white;
}

.chat-header {
  padding: 26px;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid rgb(225, 224, 224);
  display: flex;
  align-items: center;
  gap: 26px;
}

.star-rating {
  margin-left: auto;
}

.user-initials p:first-child {
  font-size: 18px;
  line-height: 18px;
  font-weight: bold;
  margin-bottom: 6px;
}

.user-initials p:last-child {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  line-height: 17px;
  color: #ff4641;
}

.chat-container {
  height: 496px;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
  padding: 14px 26px;
}

.message-list {
  display: flex;
  flex-direction: column;
}

.chat-form {
  padding: 26px;
  border-top: 1px solid rgb(225, 224, 224);
}

.scrollbar-style::-webkit-scrollbar {
  height: 3px;
  width: 3px;
}

.scrollbar-style::-webkit-scrollbar-track {
  background-color: transparent;
}

.scrollbar-style::-webkit-scrollbar-thumb {
  background: #ff4641;
}

.scrollbar-style::-webkit-scrollbar-corner {
  background: #ff4641;
}

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

.chat-form {
  display: flex;
  align-items: center;
  gap: 18px;
}

.input-wrapper {
  flex: 1;
  position: relative;
}

.input {
  padding: 14px 24px;
  border: 1px solid #ececec;
  width: 100%;
}

.input:hover {
  border-color: rgb(0, 102, 255);
}

.input:focus {
  outline-color: rgb(0, 102, 255);
}

.helper-text {
  position: absolute;
  left: 0;
  bottom: 0px;
  font-size: 12px;
  color: red;
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    bottom 0.3s ease;
}

.helper-text-active {
  bottom: -20px;
  opacity: 1;
  transform: translateY(0);
}
</style>
