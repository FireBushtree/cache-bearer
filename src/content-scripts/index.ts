import { cache, CacheKey } from './cache'
import { createApp } from 'vue'
import CMessage from './c-message.vue'

export interface Message {
  type: CacheKey
  text?: string | Storage
}

// window.onload = async () => {
//   const container = document.querySelector('body')
//   if (container) {
//     const el = document.createElement('div')
//     const app = createApp(CMessage)
//     app.mount(el)
//     container.appendChild(el)
//   }
// }

window.chrome.runtime.onMessage.addListener(
  function (message: Message, sender: any, sendResponse: any) {
    console.log(message)
    const messageHandler = cache[message.type]
    const { text } = message

    // @ts-expect-error
    sendResponse(messageHandler(text))
  }
)
