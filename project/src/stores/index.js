import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    modalState: {
      modalWrap: false,
    },
  }),
  actions: {
    openModal(modalName) {
      this.modalState[modalName] = true
      console.log(modalName)
    },
    closeModal(modalName) {
      this.modalState[modalName] = false
    },
  }
})