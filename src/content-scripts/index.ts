import { cache, CacheKey } from './cache'

export interface Message {
  type: CacheKey
  text?: string | Storage
}

window.chrome.runtime.onMessage.addListener(
  function (message: Message, sender: any, sendResponse: any) {
    console.log(message)
    const messageHandler = cache[message.type]
    const { text } = message

    // @ts-expect-error
    sendResponse(messageHandler(text))
  }
)
