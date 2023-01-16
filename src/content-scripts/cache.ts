import { createApp } from 'vue'
import CMessage from './c-message.vue'

export type CacheKey = keyof typeof cache
export type MessageType = 'success' | 'fail'

export const cache = {
  copyCookie () {
    return window.document.cookie
  },

  pasteCookie (cookie: string) {
    window.document.cookie = cookie
  },

  clearCookie () {
    const cookies = document.cookie.split(';')

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i]
      const eqPos = cookie.indexOf('=')
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
    }
  },

  copyLocalStorage () {
    return window.localStorage.valueOf()
  },

  pasteLoalStorage (storage: Storage) {
    for (const [key, value] of Object.entries(storage)) {
      window.localStorage.setItem(key, value)
    }
  },

  clearLocalStroage () {
    window.localStorage.clear()
  },

  copySessionStorage () {
    return window.sessionStorage.valueOf()
  },

  pasteSessionStorage (storage: Storage) {
    for (const [key, value] of Object.entries(storage)) {
      window.sessionStorage.setItem(key, value)
    }
  },

  clearSessionStorage () {
    window.sessionStorage.clear()
  },

  callMessage (text: string, type: MessageType = 'success') {
    const container = document.querySelector('body')
    if (container) {
      const el = document.createElement('div')
      const app = createApp(CMessage, { text, type })
      app.mount(el)
      container.appendChild(el)
      setTimeout(() => {
        container.removeChild(el)
      }, 4000)
    }
  }
}
