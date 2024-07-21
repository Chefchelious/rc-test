import type { IMessageItem } from '@/types'
import { defineStore } from 'pinia'

interface IState {
  messages: IMessageItem[]
}

export const useChatStore = defineStore('chat-store', {
  state: (): IState => ({
    messages: []
  }),
  actions: {
    addNewMessage(message: IMessageItem) {
      this.messages.push(message)
    }
  }
})
