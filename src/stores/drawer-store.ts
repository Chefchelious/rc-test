import { defineStore } from 'pinia'

interface IState {
  drawer: boolean
}

export const useDrawerStore = defineStore('drawer-store', {
  state: (): IState => ({
    drawer: false
  }),
  actions: {
    setDrawer(val: boolean) {
      this.drawer = val
    }
  }
})
