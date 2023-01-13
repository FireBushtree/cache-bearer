import { cache, CacheKey, MessageType } from './cache'

export interface Message {
  type: CacheKey
  text?: string | Storage
  messageType?: MessageType
}

window.chrome.runtime.onMessage.addListener(
  function (message: Message, sender: any, sendResponse: any) {
    const messageHandler = cache[message.type]
    const { text, messageType } = message

    // @ts-expect-error
    sendResponse(messageHandler(text, messageType))
  }
)
